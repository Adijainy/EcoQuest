import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { createTaskOperation } from "../../service/operations/taskAPI";
import { FaArrowRight } from "react-icons/fa";

const EditTask = () => {
    const { register, handleSubmit, reset } = useForm();
  const [unGoal, setUnGoal] = useState("");
  const [unGoalList, setUnGoalList] = useState([]);
  const [description, setDescription] = useState("");
  const [descriptionList, setDescriptionList] = useState([]);
  const handleFormSubmit = (data) => {
    //console.log("Form DATA", data);
    console.log("DESCRIPTION LIST", descriptionList);
    console.log("UN GOAL LIST", unGoalList);
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", descriptionList);
    formData.append("unGoalDescription", data.unGoalDescription);
    formData.append("category", data.category);
    formData.append("points", data.points);
    formData.append("carbonAvoided", data.carbonAvoided);
    formData.append("unGoals", unGoalList);
    formData.append("specialTask", false);
    setDescriptionList([]);
    setUnGoalList([]);
    setDescription("");
    setUnGoal("");
    const result  = createTaskOperation(formData);
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
          placeholder="Task Name"
          {...register("title", { required: true })}
          required
          className="special-box w-full"
        />
        <div className="flex">
          <input
            type="text"
            placeholder="Task Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="special-box w-full rounded-r-none"
          />
          <button
            className=" p-4 text-xl rounded-l-none special-box"
            onClick={(e) => {
              //e.preventDefault();
              setDescriptionList([...descriptionList, description]);
              setDescription("");
            }}
          >
            <FaArrowRight />
          </button>
        </div>

        <input
          type="text"
          placeholder="UN Goal Description"
          {...register("unGoalDescription", { required: true })}
          required
          className="special-box w-full"
        />
        <input
          type="text"
          placeholder="Category"
          {...register("category", { required: true })}
          required
          className="special-box w-full"
        />
        <div className="grid grid-cols-3 gap-3">
          <input
            type="number"
            placeholder="Points"
            {...register("points", { required: true })}
            required
            className="special-box w-full"
          />
          <input
            type="number"
            placeholder="Carbon Avoided"
            {...register("carbonAvoided", { required: true })}
            required
            className="special-box w-full"
          />
          <div className="flex">
            <input
              type="text"
              placeholder="UN goal"
              value={unGoal}
              onChange={(e) => setUnGoal(e.target.value)}
              className="special-box w-full rounded-r-none"
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                setUnGoalList([...unGoalList, unGoal]);
                setUnGoal("");
              }}
              className="special-box px-3 rounded-l-none"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
        <button type="submit" className="btn-gradient p-4 text-xl">
          EDIT TASK
        </button>
      </form>
    </div>
  )
}

export default EditTask
