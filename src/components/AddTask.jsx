import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const taskSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
});

function AddTask({ onAddTaskSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(taskSchema),
  });

  const onSubmit = (data) => {
    onAddTaskSubmit(data.title, data.description);
    reset();
  };

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Type your task title!"
            className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md w-full"
            {...register("title")}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        <div>
          <textarea
            placeholder="Type your task description!"
            className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md resize-none h-24 w-full"
            {...register("description")}
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="bg-slate-500 text-white px-4 py-2 rounded-md w-full"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default AddTask;
