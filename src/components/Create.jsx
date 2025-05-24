import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { todocontext } from "../Wrapper";

const Create = () => {
    const [todos, settodos] = useContext(todocontext);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const SubmitHandler = (data) => {
        data.isCompleted = false;
        data.id = nanoid();

        settodos([...todos, data]);
        toast.success("Todo created!");
        reset();
    };
    return (
        <div className="w-[60%] p-10">
            <h1 className="mb-10 text-5xl font-thin">
                Set <span className="text-red-400">Reminders</span> for <br /> tasks
            </h1>
            <form onSubmit={handleSubmit(SubmitHandler)}>
                {/* <input
                  {...register("title", { required: "Title cannot be empty" })}
                    className="p-2 border-b w-full text-2xl font-thin focus:outline-0 focus:border-red-400 bg-transparent text-white"
                    type="text"
                   placeholder="Title"
                  /> */}
                  <input
                {...register("title", { required: "Title cannot be empty" })}
                className="p-2 border-b w-full text-2xl font-thin outline-0 bg-white text-black placeholder:text-gray-500 rounded"
                type="text"
                placeholder="Title"
                 />
                <small className="font-thin text-red-400">{errors?.title?.message}</small>
                <br /><br />
                <button className="mt-5 text-xl px-10 py-2 border rounded">
                    Create Todo
                </button>
            </form>
        </div>
    );
};

export default Create;
