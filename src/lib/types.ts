export type Rating = 1 | 2 | 3 | 4 | 5;

export type FormData = {
  satisfaction: string;
  usability: Rating | '';
  features: Rating | '';
  improvements: string;
  email: string;
};

export type FormErrors = Partial<Record<keyof FormData, string>>;

export interface StepProps {
  formData: FormData;
  errors: FormErrors;
  updateForm: (field: keyof FormData, value: string | number) => void;
}