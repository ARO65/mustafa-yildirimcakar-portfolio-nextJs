"use client";

import { useActionState } from "react";
import { loginAction } from "@/actions/auth-actions";
import FormInput from "@/components/forms/FormInput/FormInput";
import styles from "./LoginForm.module.scss";

const initialState = { ok: null, message: null, errors: null, data: null };

export default function LoginForm() {
  const [state, formAction, isPending] = useActionState(
    loginAction,
    initialState,
  );

  return (
    <form action={formAction} className={styles.form} noValidate>
      <FormInput
        label="Email"
        name="email"
        type="email"
        error={state?.errors?.email}
        autoComplete="email"
      />
      <FormInput
        label="Password"
        name="password"
        type="password"
        error={state?.errors?.password}
        autoComplete="current-password"
      />
      {state?.message && !state.ok && (
        <p className={styles.message} role="alert">
          {state.message}
        </p>
      )}
      <button type="submit" disabled={isPending} className={styles.submit}>
        {isPending ? "Signing in..." : "Sign in"}
      </button>
    </form>
  );
}
