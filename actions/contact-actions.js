"use server";
import { ContactSchema } from "@/helpers/schemas/contact-schema";
import {
  transformFormDataToJSON,
  transformYupErrors,
  response,
  YupValidationError,
} from "@/helpers/form-validation";
export async function contactAction(_prev, formData) {
  const fields = transformFormDataToJSON(formData);
  try {
    ContactSchema.validateSync(fields, { abortEarly: false });
    return response(
      true,
      "Thanks. Your message is ready to be processed.",
      null,
      fields,
    );
  } catch (error) {
    if (error instanceof YupValidationError)
      return transformYupErrors(error.inner);
    throw error;
  }
}
