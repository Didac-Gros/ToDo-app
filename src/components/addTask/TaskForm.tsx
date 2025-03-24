import { InputTask } from "./InputTask";
import { PriorityCheck } from "./PriorityCheck";
import { UploadImage } from "./UploadImage";
import { TaskPriority } from "../../types/global";
import { useCreateTask } from "../../hooks/useCreateTask";

interface TaskFormProps {
  setShowModal: (show: boolean) => void;
}

export function TaskForm({ setShowModal }: TaskFormProps) {
  const {
    title,
    date,
    description,
    priority,
    image,
    errorDate,
    error,
    setTitle,
    handleDateChange,
    setDescription,
    setPriority,
    setImage,
    handleSubmit,
  } = useCreateTask({ setShowModal });

  return (
    <div className="fixed inset-0 flex items-center justify-center  bg-black/50">
      <div className="bg-white p-12 pt-7 rounded-lg shadow-lg w-220 h-175">
        <header className="flex justify-between mb-5 font-semibold text-lg">
          <div className="flex">
            <p className="underline">Add new ta</p>
            <span className="">sk</span>
          </div>
          <button
            className="cursor-pointer hover:text-black/70"
            onClick={() => setShowModal(false)}
          >
            <p className="underline">Go back</p>
          </button>
        </header>
        <main className=" border-1 border-gray-400 p-4 rounded-md">
          <form
            action="submit"
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 "
          >
            <InputTask
              label="Title"
              onInputChange={(e) => setTitle(e.target.value)}
              error={error && title === ""}
            ></InputTask>
            <InputTask
              label="Date"
              typeDate
              onInputChange={handleDateChange}
              errorDate={errorDate}
              error={error && !date}
            ></InputTask>

            <p className="font-semibold">Priority</p>
            <div className="flex gap-8">
              <PriorityCheck
                className="bg-orange-500"
                text={TaskPriority.EXTREME}
                active={priority === TaskPriority.EXTREME}
                onCheckChange={() => setPriority(TaskPriority.EXTREME)}
              ></PriorityCheck>
              <PriorityCheck
                className="bg-cyan-500"
                text={TaskPriority.MODERATE}
                active={priority === TaskPriority.MODERATE}
                onCheckChange={() => setPriority(TaskPriority.MODERATE)}
              ></PriorityCheck>
              <PriorityCheck
                className="bg-green-500"
                text={TaskPriority.LOW}
                active={priority === TaskPriority.LOW}
                onCheckChange={() => setPriority(TaskPriority.LOW)}
              ></PriorityCheck>
            </div>
            <p className="text-xs text-red-500">
              {error && !priority ? "Choose priority" : ""}
            </p>
            <div className="flex gap-7 h-auto">
              <div className="flex-1">
                <InputTask
                  label="Task Description"
                  big
                  onInputChange={(e) => setDescription(e.target.value)}
                  error={error && description === ""}
                ></InputTask>
              </div>
              <UploadImage
                onFileUpload={(file: File) => setImage(file)}
                error={error && image === null}
                image={image}
              ></UploadImage>
            </div>

            <button
              type="submit"
              className="self-start bg-orange-500 hover:bg-orange-400 cursor-pointer text-white  rounded-lg px-6 py-1 mt-2"
            >
              Done
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}
