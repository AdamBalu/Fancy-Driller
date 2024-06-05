import toast from "react-hot-toast";

export const toastSuccess = (message: string) => {
  toast.success(message, {
    style: {
      border: "1px solid #20a10e",
      padding: "16px",
      color: "#20a10e",
      background: "#01060b",
    },
  });
};

export const toastError = (message: string) => {
  toast.error(message, {
    style: {
      border: "1px solid #cc0e0e",
      padding: "16px",
      color: "#cc0e0e",
      background: "#01060b",
    },
  });
};
