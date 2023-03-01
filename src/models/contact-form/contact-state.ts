import { FormValidity } from "./form-validity";
import { Form } from "./form";

export interface ContactState extends FormValidity, Form {
  formErrors: {
    name: string,
    email: string,
    message: string,
  },
  lastMessageSentTime: number,
  timeLeft: number,
  isSubmitting: boolean
}