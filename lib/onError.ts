import { toast } from "sonner";

export const onError = (message: string, error?: Error) => {
  toast.error(message);
  error && console.error(error);
  navigator?.vibrate(200);
};
