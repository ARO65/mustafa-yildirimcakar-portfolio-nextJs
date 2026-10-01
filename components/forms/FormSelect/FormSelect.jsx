"use client";

import styles from "./FormSelect.module.scss";

export default function FormSelect({
  label,
  name,
  error,
  options = [],
  value,
  onChange,
  placeholder = "Select",
  ...props
}) {
  const invalid = Boolean(error);

  return (
    <div className={styles.field}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>

      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`${styles.control} ${invalid ? styles.invalid : ""}`}
        aria-invalid={invalid}
        aria-describedby={invalid ? `${name}-error` : undefined}
        {...props}
      >
        <option value="">{placeholder}</option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {invalid && (
        <small id={`${name}-error`} className={styles.error} role="alert">
          {error}
        </small>
      )}
    </div>
  );
}
