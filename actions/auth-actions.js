"use server";

import { AuthError } from "next-auth";
import { signIn } from "@/auth";
import {
  response,
  transformFormDataToJSON,
  transformYupErrors,
  YupValidationError,
} from "@/helpers/form-validation";
import { AuthSchema } from "@/helpers/schemas/auth-schema";

export const loginAction = async (prevState, formData) => {
  const fields = transformFormDataToJSON(formData);

  try {
    AuthSchema.validateSync(fields, { abortEarly: false });
    await signIn("credentials", { ...fields, redirectTo: "/dashboard" });
    return response(true, "Signed in successfully");
  } catch (error) {
    if (error instanceof YupValidationError) return transformYupErrors(error.inner);
    if (error instanceof AuthError) return response(false, "Invalid email or password");
    throw error;
  }
};
