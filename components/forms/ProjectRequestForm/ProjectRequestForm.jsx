"use client";

import { useActionState, useState } from "react";
import { createProjectRequestAction } from "@/actions/request-actions";
import DynamicFormField from "../DynamicFormField/DynamicFormField";
import { requestFields } from "@/data/request-fields";
import useActionAlert from "@/hooks/useActionAlert";
import styles from "./ProjectRequestForm.module.scss";

const initialState = { ok: null, message: null, errors: null, data: null, responseId: null };

export default function ProjectRequestForm() {
  const [state, formAction, isPending] = useActionState(
    createProjectRequestAction,
    initialState
  );
  const [controlled, setControlled] = useState({ service: null });

  useActionAlert(state, {
    successTitle: "Request created",
    errorTitle: "Request could not be created",
  });

  return (
    <form action={formAction} className={styles.form} noValidate>
      {requestFields.map((field) => (
        <DynamicFormField
          key={field.name}
          field={field}
          error={state?.errors?.[field.name]}
          value={controlled[field.name]}
          onChange={
            field.component === "select"
              ? (event) =>
                  setControlled((value) => ({
                    ...value,
                    [field.name]: event.value,
                  }))
              : undefined
          }
        />
      ))}

      <button type="submit" disabled={isPending}>
        <i className="pi pi-send" aria-hidden="true" />
        {isPending ? "Sending..." : "Send Request"}
      </button>
    </form>
  );
}
