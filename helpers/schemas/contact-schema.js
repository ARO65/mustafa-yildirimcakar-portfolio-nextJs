import * as yup from "yup";
export const ContactSchema = yup.object({
  name: yup.string().min(2).required("Name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  message: yup
    .string()
    .min(20, "Please add a little more detail")
    .required("Message is required"),
});
