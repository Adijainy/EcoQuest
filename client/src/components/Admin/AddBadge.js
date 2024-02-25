import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { createBadgeOperation} from '../../service/operations/badgeAPI'

const AddBadge = () => {
    const { register, handleSubmit, reset } = useForm();
    const handleFormSubmit = (data) => {
    //console.log("Form DATA", data);
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("BadgeFile", data.BadgeFile[0]);
    formData.append("pointsReq", data.pointsReq);

    
    const result  = createBadgeOperation(formData);
    reset();
    
  };
  return (
    <div className="bg-richgreen-100 bg-opacity-10 max-w-[513px] p-10 border-2 border-richgreen-50 rounded-2xl">
      <form
        className="flex flex-col gap-3"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <input
          type="text"
          placeholder="Badge Title"
          {...register("title", { required: true })}
          required
          className="special-box w-full"
        />
        <input
          type="file"
          placeholder="Badge File"
          {...register("BadgeFile", { required: true })}
          required
          className="special-box w-full"
        />
        <input
            type="number"
            placeholder="Points"
            {...register("pointsReq", { required: true })}
            required
            className="special-box w-full"
          />
        <button type="submit" className="btn-gradient p-4 text-xl">
          ADD TASK
        </button>
      </form>
    </div>
  )
}

export default AddBadge
