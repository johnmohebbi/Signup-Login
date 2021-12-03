import { toast } from "react-toastify";

export const notify = (type) => {
  if (type === "success") {
    toast.success("your signed successfully.", {
      theme: "colored",
    });
  } else {
    toast.error("invalid data.", {
      theme: "colored",
    });
  }
};
