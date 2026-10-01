import * as yup from "yup";
export const ProjectRequestSchema = yup.object({
  service: yup.string().required("Please select a service"),
  name: yup.string().min(2).required("Name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  description: yup
    .string()
    .min(20, "Please add at least 20 characters")
    .required("Description is required"),
});
