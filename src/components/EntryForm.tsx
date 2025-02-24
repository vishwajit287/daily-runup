import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface FormData {
  name: string;
  email: string;
}

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
});

const EntryForm: React.FC<{
  onSave: (data: FormData) => void;
  editingEntry?: FormData | null;
}> = ({ onSave, editingEntry }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: editingEntry || { name: "", email: "" },
  });

  const onSubmit = (data: FormData) => {
    onSave(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white shadow-md rounded-lg p-6 w-full max-w-md mx-auto space-y-4"
    >
      <h2 className="text-xl font-semibold text-gray-700 text-center">
        {editingEntry ? "Edit Entry" : "Add Entry"}
      </h2>

      <div>
        <input
          {...register("name")}
          type="text"
          placeholder="Enter your name"
          className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
            errors.name
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-blue-500"
          }`}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <input
          {...register("email")}
          type="email"
          placeholder="Enter your email"
          className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
            errors.email
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-blue-500"
          }`}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-half bg-black hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
      >
        Submit
      </button>
    </form>
  );
};

export default EntryForm;
