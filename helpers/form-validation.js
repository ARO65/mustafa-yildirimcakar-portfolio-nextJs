export { ValidationError as YupValidationError } from "yup";
export const transformFormDataToJSON = (formData) =>
  Object.fromEntries(formData.entries());
export const response = (ok, message, errors = null, data = null) => ({
  ok,
  message,
  errors,
  data,
  responseId: crypto.randomUUID(),
});
export const transformYupErrors = (errors) => {
  const errObject = {};
  errors.forEach((error) => {
    if (error.path) errObject[error.path] = error.message;
  });
  return response(false, "Validation Error", errObject);
};
