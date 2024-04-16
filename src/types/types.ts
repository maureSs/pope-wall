import { FormEvent } from "react";

export interface PasswordProps {
  length: number;
  includeYourWord: string;
  includeUpperCase: boolean;
  includeLowerCase: boolean;
  includeNumber: boolean;
  includeSymbols: boolean;
}

export interface FormProps {
  values: any;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  generatedPassword: string;
  hasCharacterLength: boolean;
}

export interface PrebuiltFormProps {
  items: string[];
  addText: (e: FormEvent<HTMLFormElement>) => void;
  generatePassword: () => void;
}

export interface Tip {
  tip: string;
  tip_description?: string;
}