import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TasksPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  function onBackClick() {
    navigate(-1);
  }

  return (
    <div className="h-screen w-screen bg-slate-500 p-6">
      <div className="w-screen h-screen bg-slate-500 flex justify-center p-6 text-slate-100">
        <div className="w-[500px] space-y-4">
          <div className="flex justify-center relative">
            <button
              onClick={onBackClick}
              className="absolute left-0 top-0 bottom-0 mb-4"
            >
              <ChevronLeftIcon />
            </button>
            <h1 className="text-3xl text-slate-100 font-bold text-center">
              Your Task
            </h1>
          </div>

          <div className="bg-slate-400 p-4 rounded-md">
            <h2 className="text-xl text-white font-bold">{title}</h2>
            <p className="text-white">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TasksPage;
