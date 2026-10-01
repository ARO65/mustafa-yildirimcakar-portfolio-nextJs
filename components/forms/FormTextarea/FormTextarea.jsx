"use client";

import styles from "./FormTextarea.module.scss";

export default function FormTextarea({
  label,
  name,
  error,
  rows = 6,
  className = "",
  ...props
}) {
  const invalid = Boolean(error);

  return (
    <div className={`${styles.field} ${className}`}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>

      <textarea
        id={name}
        name={name}
        rows={rows}
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
