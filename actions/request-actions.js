"use server";
import { revalidatePath } from "next/cache";
import { ProjectRequestSchema } from "@/helpers/schemas/request-schema";
import {
  response,
  transformFormDataToJSON,
  transformYupErrors,
  YupValidationError,
} from "@/helpers/form-validation";
export async function createProjectRequestAction(_prevState, formData) {
  const fields = transformFormDataToJSON(formData);
  try {
    ProjectRequestSchema.validateSync(fields, { abortEarly: false });
    // Persistence service will be connected in the next backend/data phase.
    revalidatePath("/dashboard/requests");
    return response(true, "Project request created successfully", null, fields);
  } catch (error) {
    if (error instanceof YupValidationError)
      return transformYupErrors(error.inner);
    return response(false, "Something went wrong");
  }
}
