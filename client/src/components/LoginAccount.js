import React, { useState } from "react";
import Header from "./Header";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginAccount = () => {
  const { register, handleSubmit, errors, reset } = useForm();
  const [passwordShown, setPasswordShown] = useState(false);
  const handleFormSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="flex w-screen h-screen">
      <Header />
      <div className=" text-center my-auto px-40 pb-5 font-Poppins w-[40%] mx-auto">
        <h3 className="font-bold text-4xl text-richgreen-300">Welcome Back</h3>
        <h4 className="text-xl my-2">Login to your account</h4>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <input
            className="text-field"
            type="email"
            placeholder="Email"
            required={true}
            {...register("email", { required: true })}
          />
          {/* {errors.email && <p className="text-red-500">Email is required</p>} */}
          <div className="relative">
            <input
              className="text-field"
              type={passwordShown ? "text" : "password"}
              placeholder="Password"
              required={true}
              {...register("password", { required: true })}
            />
            <button
              className="absolute top-3 right-3"
              onClick={() => setPasswordShown(!passwordShown)}
            >
              {passwordShown ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* {errors.password && (
            <p className="text-red-500">Password is required</p>
          )} */}
          <button type="submit" className="btn-gradient">
            Log In
          </button>
        </form>
        <p className="text-base">
          Don’t have an Account?
          <br />
          <span className="text-richgreen-100 font-semibold">
            Create Account
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginAccount;
