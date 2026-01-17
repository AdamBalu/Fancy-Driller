import toast from "react-hot-toast";

export const toastSuccess = (message: string, duration = 1500) => {
  toast.dismiss();
  toast.success(message, {
    duration: duration,
    style: {
      pointerEvents: "none",
      border: "1px solid #20a10e",
      padding: "10px 10px 10px 18px",
      color: "#20a10e",
      background: "transparent",
    },
  });
};

export const toastError = (message: string, duration = 1500) => {
  toast.dismiss();
  toast.error(message, {
    duration: duration,
    style: {
      pointerEvents: "none",
      border: "1px solid #cc0e0e",
      padding: "10px 10px 10px 18px",
      color: "#cc0e0e",
      background: "transparent",
    },
  });
};
