"use client";

import { useActionState } from "react";
import { contactAction } from "@/actions/contact-actions";
import DynamicFormField from "../DynamicFormField/DynamicFormField";
import { contactFields } from "@/data/request-fields";
import useActionAlert from "@/hooks/useActionAlert";
import styles from "./ContactForm.module.scss";

const initialState = { ok: null, message: null, errors: null, data: null, responseId: null };

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(contactAction, initialState);

  useActionAlert(state, {
    successTitle: "Message sent",
    errorTitle: "Message could not be sent",
  });

  return (
    <form className={styles.form} action={formAction} noValidate>
      {contactFields.map((field) => (
        <DynamicFormField
          key={field.name}
          field={field}
          error={state?.errors?.[field.name]}
        />
      ))}

      <button className="button" type="submit" disabled={isPending}>
        <i className="pi pi-send" aria-hidden="true" />
        {isPending ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
