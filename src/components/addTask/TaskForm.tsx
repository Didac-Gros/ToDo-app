import { useState } from "react";
import { InputTask } from "./InputTask";
import { PriorityCheck } from "./PriorityCheck";
import { UploadImage } from "./UploadImage";
import { TaskPriority } from "../../types/global";

export function TaskForm() {
  const [title, setTitle] = useState<string>("");
  const [date, setDate] = useState<Date | null>(null);
  const [description, setDescription] = useState<string>("");
  const [priority, setPriority] = useState<TaskPriority | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const [errorDate, setErrorDate] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(e.target.value);
    if (new Date() > newDate) {
      setErrorDate("Please select a future date");
    }
    // if(e.target.value) setDate(new Date(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(true);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center  bg-black/50">
      <div className="bg-white p-12 rounded-lg shadow-lg w-220 h-170">
        <header className="flex justify-between mb-7 font-semibold text-lg">
          <div className="flex">
            <p className="underline ">Add new ta</p>
            <span className="">sk</span>
          </div>

          <p className="underline">Go back</p>
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
            <div className="flex gap-7 h-auto">
              <div className="flex-1">
                <InputTask
                  label="Task Description"
                  big
                  onInputChange={(e) => setDescription(e.target.value)}
                  error={error && description === ""}
                ></InputTask>
              </div>
              <UploadImage onFileUpload={() => {}}></UploadImage>
            </div>

            <button
              type="submit"
              className="self-start bg-orange-500 hover:bg-orange-400 cursor-pointer text-white  rounded-lg px-6 py-1 mt-5"
            >
              Done
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}
