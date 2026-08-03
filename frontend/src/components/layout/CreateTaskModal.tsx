import { useEffect, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

import { GoDotFill } from "react-icons/go";
import { TbCloudUpload } from "react-icons/tb";

import Input from "./Input";
import TextArea from "./TextArea";
import Backdrop from "./Backdrop";
import Container from "./Container";
import Conditional from "./Conditional";
import Button from "@/components/ui/Button";
import ModalBackButton from "./ModalBackButton";
import SecondaryHeading from "./SecondaryHeading";
import Paragraph from "@/components/ui/Paragraph";

import type { Priority, Task } from "@/api/todos";
import { useCreateTask } from "@/components/hooks/useCreateTask";
import { useUpdateTask } from "@/components/hooks/useUpdateTask";
import { useGetPriorities } from "@/components/hooks/useGetPriorities";

type FormValues = {
  taskTitle: string;
  dueDate: string;
  priority: string;
  description: string;
  image?: FileList;
};

interface TaskModalProps {
  show: boolean;
  onCloseModal: () => void;
  fristWord: string;
  secondWord: string;
  taskToEdit?: Task | null;
}

export default function CreateTaskModal({
  show,
  onCloseModal,
  fristWord,
  secondWord,
  taskToEdit,
}: TaskModalProps) {
  const { priorities } = useGetPriorities();
  const { createTask, isPending } = useCreateTask();
  const { updateTask, isPending: isUpdating } = useUpdateTask();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, isDirty },
  } = useForm<FormValues>({
    defaultValues: {
      taskTitle: "",
      dueDate: "",
      priority: "",
      description: "",
    },
  });

  const firstErrorKey = Object.keys(errors)[0] as keyof FormValues | undefined;
  const summaryError = firstErrorKey
    ? errors[firstErrorKey]?.message || `${firstErrorKey} is invalid`
    : null;
  const sortedPriorities = priorities
    ? [...priorities].sort((a, b) => {
        const order = ["extreme", "moderate", "low"];
        const indexA = order.indexOf(a.label.toLowerCase());
        const indexB = order.indexOf(b.label.toLowerCase());
        return (indexA === -1 ? 99 : indexA) - (indexB === -1 ? 99 : indexB);
      })
    : [];

  const imageFile = watch("image");
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (imageFile && imageFile.length > 0) {
      const file = imageFile[0];
      if (file instanceof File) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    } else {
      if (!taskToEdit) {
        setPreview(null);
      }
    }
  }, [imageFile, taskToEdit]);

  useEffect(() => {
    if (taskToEdit) {
      reset({
        taskTitle: taskToEdit.title,
        dueDate: taskToEdit.dueDate
          ? new Date(taskToEdit.dueDate).toISOString().split("T")[0]
          : "",
        priority:
          (taskToEdit.priority as any)?._id ||
          (taskToEdit.priority as any) ||
          "",
        description: taskToEdit.description || "",
      });
      setPreview(taskToEdit.image || null);
    } else {
      reset({
        taskTitle: "",
        dueDate: "",
        priority: "",
        description: "",
      });
      setPreview(null);
    }
  }, [taskToEdit, reset]);

  useEffect(() => {
    if (!show) {
      reset({
        taskTitle: "",
        dueDate: "",
        priority: "",
        description: "",
      });
      setValue("image", [] as any);
      setPreview(null);
    }
  }, [show, reset, setValue]);

  const resetFormState = () => {
    reset({
      taskTitle: "",
      dueDate: "",
      priority: "",
      description: "",
    });
    setValue("image", [] as any);
    setPreview(null);
  };

  const handleCloseModal = () => {
    onCloseModal();
    resetFormState();
  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    let imageBase64 = preview || "";

    if (data.image && data.image.length > 0) {
      const file = data.image[0];
      imageBase64 = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.readAsDataURL(file);
      });
    }

    const taskData = {
      title: data.taskTitle,
      dueDate: data.dueDate,
      priority: data.priority,
      description: data.description,
      image: imageBase64,
      status: taskToEdit ? taskToEdit.status._id : undefined,
      isVital: taskToEdit ? taskToEdit.isVital : false,
    };

    if (taskToEdit) {
      updateTask(
        {
          id: taskToEdit._id,
          data: taskData,
        },
        {
          onSuccess: () => {
            handleCloseModal();
          },
        },
      );
    } else {
      createTask(taskData, {
        onSuccess: () => {
          handleCloseModal();
        },
      });
    }
  };

  return (
    <Backdrop show={show} center={true}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`p-6 md:py-6 md:px-10 bg-white h-auto max-h-[90vh] md:max-h-none w-[95vw] md:w-full md:min-w-xl rounded-md flex flex-col overflow-y-auto md:overflow-visible shadow-2xl ${summaryError ? "gap-2" : "gap-4"}`}
      >
        <Container
          variant="div"
          className={"w-full flex items-center justify-between"}
        >
          <SecondaryHeading fristWord={fristWord} secondWord={secondWord} />
          <ModalBackButton onClick={handleCloseModal} />
        </Container>

        <Conditional condition={summaryError}>
          <Container
            variant="div"
            className={
              "w-full py-2 px-3 bg-red-50 border border-red-200 rounded-md animate-in fade-in slide-in-from-top-1"
            }
          >
            <Paragraph className="text-red-600 text-sm font-medium">
              {summaryError}
            </Paragraph>
          </Container>
        </Conditional>

        <Container
          variant="div"
          className={
            "w-full flex flex-col md:flex-row gap-4 border border-gray-300 p-4"
          }
        >
          <Container
            variant="div"
            className={"w-full md:w-3/4 space-y-2 md:space-y-4"}
          >
            <FormRow>
              <Input
                id="task-title"
                type="text"
                label="Title"
                placeholder="Enter task title"
                error={!!errors.taskTitle}
                disabled={isPending}
                {...register("taskTitle", {
                  required: "Task title is required",
                  minLength: {
                    value: 2,
                    message: "Task title must be at least 2 characters long",
                  },
                  maxLength: {
                    value: 100,
                    message: "Task title must be at most 100 characters long",
                  },
                })}
              />
            </FormRow>

            <FormRow>
              <Input
                id="due-date"
                type="date"
                label="Date"
                error={!!errors.dueDate}
                disabled={isPending}
                {...register("dueDate", {
                  required: "Due date is required",
                  validate: (value) => {
                    if (!value) return true;
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);
                    const selectedDate = new Date(value);
                    return (
                      selectedDate >= today || "Due date cannot be in the past"
                    );
                  },
                })}
              />
            </FormRow>

            <Container variant="div" className={"w-full"}>
              <Paragraph
                variant="small"
                className={"text-dark font-semibold mb-1"}
              >
                Priority
              </Paragraph>
              <Container
                variant="div"
                className={"flex flex-wrap items-center gap-4"}
              >
                {sortedPriorities.map((priority: Priority) => (
                  <FormRow key={priority._id}>
                    <Input
                      id={priority._id}
                      type="radio"
                      label={
                        <span className={"flex items-center gap-1"}>
                          <GoDotFill
                            size={14}
                            style={{ color: priority.color }}
                          />{" "}
                          {priority.label}
                        </span>
                      }
                      value={priority._id}
                      priority={true}
                      style={{ accentColor: priority.color }}
                      error={!!errors.priority}
                      {...register("priority", {
                        required: "Please select a priority",
                      })}
                    />
                  </FormRow>
                ))}
              </Container>
            </Container>

            <FormRow>
              <TextArea
                id="description"
                label="Description"
                placeholder="Start writing here..."
                rows={6}
                className={"resize-none"}
                error={!!errors.description}
                {...register("description", {
                  required: "Description is required",
                  minLength: {
                    value: 10,
                    message: "Description must be at least 10 characters long",
                  },
                })}
              />
            </FormRow>
          </Container>

          <Container
            variant="div"
            className={"w-full medium:w-1/3 flex md:items-end md:justify-end"}
          >
            <Container variant="div" className={"w-full"}>
              <Paragraph
                variant="small"
                className={"text-dark font-semibold mb-1"}
              >
                Upload image
              </Paragraph>

              <label
                htmlFor="image"
                className={
                  "w-full flex flex-col items-center justify-center gap-1 rounded-md border border-gray-300 h-34 cursor-pointer hover:bg-gray-50 transition-colors overflow-hidden relative group"
                }
              >
                {preview ? (
                  <>
                    <img
                      src={preview}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white gap-1">
                      <TbCloudUpload size={24} />
                      <span className="text-[10px] uppercase font-bold">
                        Change Image
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <TbCloudUpload className={"text-gray-400"} size={28} />
                    <Paragraph
                      className={
                        "text-gray-400 uppercase font-bold text-[10px]"
                      }
                    >
                      Click to upload
                    </Paragraph>
                  </>
                )}
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  className="hidden"
                  {...register("image")}
                />
              </label>
              <Conditional condition={!!preview && !isPending}>
                <Button
                  variant="text"
                  className={
                    "text-red-500 text-[10px] font-bold uppercase mt-1 w-full text-center hover:underline"
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setValue("image", [] as any);
                    setPreview(null);
                  }}
                >
                  Remove Image
                </Button>
              </Conditional>
            </Container>
          </Container>
        </Container>

        <Container variant="div" className={"w-full flex gap-3 justify-start"}>
          <Button
            type="submit"
            ariaLabel="Create task"
            disabled={
              taskToEdit ? isUpdating || !isDirty : isPending || !isDirty
            }
            className={
              "bg-btn-col hover:text-white text-col-white px-8 py-3 rounded-md"
            }
          >
            {taskToEdit
              ? isUpdating
                ? "Updating..."
                : "Update Task"
              : isPending
                ? "Creating..."
                : "Done"}
          </Button>
        </Container>
      </form>
    </Backdrop>
  );
}

function FormRow({ children }: { children: React.ReactNode }) {
  return (
    <Container variant="div" className={"flex flex-col gap-1"}>
      {children}
    </Container>
  );
}
