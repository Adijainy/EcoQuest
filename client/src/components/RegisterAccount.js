import React, { useState } from "react";
import Header from "./Header";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterAccount = () => {
  const { register, handleSubmit, errors, reset } = useForm();
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
  const handleFormSubmit = (data) => {
    console.log(data);
    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match");
      reset();
      return;
    }
  };
  return (
    <div className="flex w-screen h-screen">
      <Header />
      <div className=" text-center my-auto px-40 pb-5 font-Poppins w-[40%] mx-auto">
        <h3 className="font-bold text-4xl text-richgreen-300">Register</h3>
        <h4 className="text-xl my-2">Create your new account</h4>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <input
            className="text-field"
            type="text"
            placeholder="Name"
            required={true}
            {...register("name", { required: true })}
          />
          {/* {errors.name && <p className="text-red-500">Name is required</p>} */}
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

          <div className="relative">
            <input
              className="text-field"
              type={confirmPasswordShown ? "text" : "password"}
              placeholder="Confirm Password"
              required={true}
              {...register("confirmPassword", { required: true })}
            />
            <button
              className="absolute top-3 right-3"
              onClick={() => setConfirmPasswordShown(!confirmPasswordShown)}
            >
              {confirmPasswordShown ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {/* {errors.confirmPassword && (
            <p className="text-red-500">Confirm Password is required</p>
          )} */}

          <p className="text-xs my-2">
            By signing up you agree to our{" "}
            <span className="text-richgreen-100 underline">
              Terms & Conditions
            </span>{" "}
            and{" "}
            <span className="text-richgreen-100 underline">Privacy Policy</span>
          </p>
          <button type="submit" className="btn-gradient">
            Sign up
          </button>
        </form>
        <p className="text-base">
          Already have an Account?{" "}
          <span className="text-richgreen-100 font-semibold">Log in</span>
        </p>
      </div>
    </div>
  );
};

export default RegisterAccount;
