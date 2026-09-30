import React from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "../../lib/utils.js";

const CoverflowCarousel = ({
  slides = [],
  rotate = 44,
  depth = 0.6,
  perspective = 3,
  falloff = 0.56,
  fade = 0.1,
  cardWidth = "clamp(160px, 22vw, 260px)",
  gap = 0.05,
  loop = true,
  showCaption = true,
  showPagination = false,
  showNavigation = false,
  label = "Product carousel",
  className,
  cardClassName,
}) => {
  const count = slides.length;

  const frameRef = React.useRef(null);
  const cardRefs = React.useRef([]);
  const posRef = React.useRef(0);
  const targetRef = React.useRef(0);
  const widthRef = React.useRef(0);
  const rafRef = React.useRef(null);

  const dragRef = React.useRef(null);

  const [selected, setSelected] = React.useState(0);

  const indexAt = React.useCallback(
    (pos) => {
      if (!count) return 0;

      return ((Math.round(pos) % count) + count) % count;
    },
    [count],
  );

  const paint = React.useCallback(() => {
    const width = widthRef.current;

    if (!width || !count) return;

    const pitch = width * (1 + gap);
    const pos = posRef.current;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      let offset = index - pos;

      if (loop) {
        offset = ((offset % count) + count) % count;

        if (offset > count / 2) {
          offset -= count;
        }
      }

      const distance = Math.abs(offset);

      const ramp = Math.pow(distance, falloff);

      const tilt = Math.min(rotate * ramp, 82) * Math.sign(offset);

      card.style.transform =
        `translateX(calc(-50% + ${offset * pitch}px)) ` +
        `translateZ(${-depth * width * ramp}px) ` +
        `rotateY(${-tilt}deg)`;

      const edge = loop ? Math.min(1, Math.max(0, count / 2 - distance)) : 1;

      card.style.opacity = String(Math.max(0, 1 - fade * distance) * edge);

      card.style.zIndex = String(100 - Math.round(distance));
    });
  }, [count, depth, fade, falloff, gap, loop, rotate]);

  const settle = React.useCallback(
    (target) => {
      if (!count) return;

      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }

      targetRef.current = target;

      setSelected(indexAt(target));

      const step = () => {
        const remaining = target - posRef.current;

        if (Math.abs(remaining) < 0.0004) {
          posRef.current = target;
          paint();
          rafRef.current = null;
          return;
        }

        posRef.current += remaining * 0.16;

        paint();

        rafRef.current = requestAnimationFrame(step);
      };

      rafRef.current = requestAnimationFrame(step);
    },
    [count, indexAt, paint],
  );

  const clamp = React.useCallback(
    (pos) => {
      if (loop) return pos;

      return Math.max(0, Math.min(count - 1, pos));
    },
    [count, loop],
  );

  const nudge = React.useCallback(
    (amount) => {
      if (!count) return;

      settle(clamp(Math.round(targetRef.current) + amount));
    },
    [clamp, count, settle],
  );

  const goTo = React.useCallback(
    (index) => {
      if (!count) return;

      const target = loop
        ? index + Math.round((targetRef.current - index) / count) * count
        : index;

      settle(clamp(target));
    },
    [clamp, count, loop, settle],
  );

  const onPointerDown = (event) => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }

    event.currentTarget.setPointerCapture(event.pointerId);

    targetRef.current = posRef.current;

    dragRef.current = {
      id: event.pointerId,
      x: event.clientX,
      pos: posRef.current,
      v: 0,
      t: performance.now(),
    };
  };

  const onPointerMove = (event) => {
    const drag = dragRef.current;

    if (!drag || drag.id !== event.pointerId) return;

    const pitch = widthRef.current * (1 + gap);

    if (!pitch) return;

    const now = performance.now();
    const previous = posRef.current;

    posRef.current = clamp(drag.pos - (event.clientX - drag.x) / pitch);

    drag.v = ((posRef.current - previous) / Math.max(now - drag.t, 1)) * 1000;

    drag.t = now;

    const index = indexAt(posRef.current);

    if (index !== selected) {
      setSelected(index);
    }

    paint();
  };

  const endDrag = (event) => {
    const drag = dragRef.current;

    if (!drag || drag.id !== event.pointerId) return;

    dragRef.current = null;

    const carried = Math.max(-2, Math.min(2, drag.v * 0.18));

    settle(clamp(Math.round(posRef.current + carried)));
  };

  React.useLayoutEffect(() => {
    const frame = frameRef.current;

    if (!frame || !count) return;

    const measure = () => {
      const card = cardRefs.current[0];

      if (!card) return;

      widthRef.current = card.offsetWidth;

      paint();
    };

    measure();

    const observer = new ResizeObserver(measure);

    observer.observe(frame);

    return () => observer.disconnect();
  }, [count, paint]);

  React.useEffect(() => {
    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  if (!slides.length) {
    return null;
  }

  const active = slides[selected];

  return (
    <div
      className={cn("w-full", className)}
      style={{
        "--cf-card": cardWidth,
      }}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
    >
      <div className="relative">
        {/* Carousel */}
        <div
          ref={frameRef}
          tabIndex={0}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              nudge(-1);
            }

            if (event.key === "ArrowRight") {
              event.preventDefault();
              nudge(1);
            }
          }}
          className="cursor-grab overflow-hidden py-10 outline-none focus-visible:ring-2 active:cursor-grabbing"
          style={{
            perspective: `calc(var(--cf-card) * ${perspective})`,
            touchAction: "pan-y",
          }}
        >
          <div
            className="relative select-none"
            style={{
              height: "var(--cf-card)",
              transformStyle: "preserve-3d",
            }}
          >
            {slides.map((slide, index) => (
              //   <div
              //     key={index}
              //     ref={(node) => {
              //       cardRefs.current[index] = node;
              //     }}
              //     className={cn(
              //       "absolute left-1/2 top-0 aspect-square overflow-hidden rounded-2xl bg-gray-100 shadow-xl will-change-transform",
              //       cardClassName,
              //     )}
              //     style={{
              //       width: "var(--cf-card)",
              //     }}
              //   >
              //     <img
              //       src={slide.src}
              //       alt={slide.alt}
              //       draggable={false}
              //       className="h-full w-full select-none object-cover"
              //     />
              //   </div>

              <div
                key={index}
                ref={(node) => {
                  cardRefs.current[index] = node;
                }}
                className={cn(
                  "absolute left-1/2 top-0 aspect-square overflow-hidden rounded-2xl bg-gray-100 shadow-xl will-change-transform",
                  cardClassName,
                )}
                style={{
                  width: "var(--cf-card)",
                }}
              >
                {/* Product image */}
                <img
                  src={slide.src}
                  alt={slide.alt}
                  draggable={false}
                  className="h-full w-full select-none object-cover"
                />

                {/* Product information */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent px-4 pb-4 pt-12 text-white">
                  <h3 className="text-sm font-semibold">{slide.title}</h3>

                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-sm font-medium">{slide.price}</span>

                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          size={12}
                          className="fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        {showNavigation && (
          <>
            <button
              type="button"
              aria-label="Previous product"
              onClick={() => nudge(-1)}
              className="absolute left-3 top-1/2 z-[200] -translate-y-1/2 rounded-full bg-white/80 p-2 text-black shadow-md backdrop-blur transition hover:bg-white"
            >
              <ChevronLeft className="size-5" />
            </button>

            <button
              type="button"
              aria-label="Next product"
              onClick={() => nudge(1)}
              className="absolute right-3 top-1/2 z-[200] -translate-y-1/2 rounded-full bg-white/80 p-2 text-black shadow-md backdrop-blur transition hover:bg-white"
            >
              <ChevronRight className="size-5" />
            </button>
          </>
        )}
      </div>

      {/* Logo */}

      <div className="relative z-[150] -mt-6 flex justify-center">
        <div className="flex w-64 items-center justify-center p-2 ">
          <img
            src="/logo.png"
            alt="Shopie"
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      {/* Pagination */}
      {showPagination && (
        <div className="mt-6 flex items-center justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to product ${index + 1}`}
              aria-current={index === selected}
              onClick={() => goTo(index)}
              className={cn(
                "size-2 rounded-full bg-foreground transition-opacity",
                index === selected ? "opacity-100" : "opacity-30",
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CoverflowCarousel;
