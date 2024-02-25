import React, { useState } from "react";
import Header from "./Header";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate, Link} from 'react-router-dom';
import { registerOperation} from '../service/operations/auth'
//import { useDispatch } from 'react-redux'

const RegisterAccount = () => {
  const navigate = useNavigate();
  //const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
  const handleFormSubmit = async(data) => {
    const formData = new FormData();
    formData.append('profilePic', data.profilePic[0]);
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('password', data.password);
    //console.log("Register Form data : ", data);
    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match");
      reset();
      return;
    }
    //eslint-disable-next-line
    const result = await registerOperation(formData, navigate);
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

          <input type="file"  className="text-field" {...register("profilePic", { required: true })} placeholder="Profile Picture" required/>
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
          <Link to = "/login"><span className="text-richgreen-100 font-semibold">Log in</span></Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterAccount;
