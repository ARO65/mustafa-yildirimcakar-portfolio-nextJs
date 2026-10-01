"use client";

import { useEffect, useRef } from "react";
import Swal from "sweetalert2";

export default function useActionAlert(state, options = {}) {
  const lastResponseId = useRef(null);
  const {
    successTitle = "Success",
    errorTitle = "Something went wrong",
  } = options;

  useEffect(() => {
    if (!state?.responseId || state.responseId === lastResponseId.current) return;
    lastResponseId.current = state.responseId;

    // Yup errors stay next to their fields instead of opening a modal.
    if (state.message === "Validation Error") return;

    if (state.ok === true) {
      Swal.fire({
        icon: "success",
        title: successTitle,
        text: state.message || "The operation completed successfully.",
        confirmButtonText: "OK",
      });
      return;
    }

    if (state.ok === false) {
      Swal.fire({
        icon: "error",
        title: errorTitle,
        text: state.message || "Please try again.",
        confirmButtonText: "OK",
      });
    }
  }, [state?.responseId, state?.ok, state?.message, successTitle, errorTitle]);
}
