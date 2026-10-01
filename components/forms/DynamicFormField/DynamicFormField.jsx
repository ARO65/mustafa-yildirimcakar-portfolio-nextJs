"use client";
import FormInput from "../FormInput/FormInput";
import FormSelect from "../FormSelect/FormSelect";
import FormTextarea from "../FormTextarea/FormTextarea";
export default function DynamicFormField({ field, error, value, onChange }) {
  const common = {
    label: field.label,
    name: field.name,
    error,
    required: field.required,
  };
  if (field.component === "select")
    return (
      <FormSelect
        {...common}
        options={field.options}
        value={value ?? null}
        onChange={onChange}
      />
    );
  if (field.component === "textarea")
    return (
      <FormTextarea
        {...common}
        rows={field.rows || 6}
        placeholder={field.placeholder}
      />
    );
  return (
    <FormInput
      {...common}
      type={field.type || "text"}
      placeholder={field.placeholder}
      autoComplete={field.autoComplete}
    />
  );
}
