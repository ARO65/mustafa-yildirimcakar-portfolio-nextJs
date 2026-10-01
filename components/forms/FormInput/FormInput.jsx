"use client";

import styles from "./FormInput.module.scss";

export default function FormInput({
  label,
  name,
  error,
  type = "text",
  className = "",
  ...props
}) {
  const invalid = Boolean(error);

  return (
    <div className={`${styles.field} ${className}`}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        className={`${styles.control} ${invalid ? styles.invalid : ""}`}
        aria-invalid={invalid}
        aria-describedby={invalid ? `${name}-error` : undefined}
        {...props}
      />

      {invalid && (
        <small id={`${name}-error`} className={styles.error} role="alert">
          {error}
        </small>
      )}
    </div>
  );
}
