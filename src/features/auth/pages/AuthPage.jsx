import React, { useState } from "react";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import { Link } from "react-router-dom";

const AuthPage = () => {
  const [status, setStatus] = useState("Sign in");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-full mx-auto pt-28">
      <div className="flex flex-col items-center ">
        <img src="/navbar_logo.png" alt="navbar_logo" className="w-16" />

        <div className="flex flex-col items-center w-full">
          <h1 className="text-[32px] font-black">
            {status === "Sign in" ? "Sign in to Shopie" : "Create an account"}
          </h1>
          <p
            className="text-body-lg text-shop-violet cursor-pointer hover:underline"
            onClick={() =>
              setStatus(status === "Sign in" ? "Sign up" : "Sign in")
            }
          >
            {status === "Sign in"
              ? "Or create an account"
              : "Log in into your account"}
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xs flex flex-col justify-center gap-4 mt-3"
        >
          {status !== "Sign in" ? (
            <>
              <Input
                placeholder={"Enter your name"}
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </>
          ) : null}
          <Input
            placeholder={"Enter your email"}
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            placeholder={"Enter your password"}
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <Button size="lg" className="w-full">
            {status === "Sign in" ? "Sign in" : "Create account"}
          </Button>

          <span className=" text-[11px] text-center text-muted-gray">
            By continuing, you agree to the{" "}
            <Link to="/terms" className="font-medium underline">
              terms
            </Link>{" "}
            and acknowledge the{" "}
            <Link to="/privacy" className="font-medium underline">
              privacy policy.
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
