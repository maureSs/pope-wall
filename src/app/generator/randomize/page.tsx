'use client'
import Link from "next/link";
import Form from "@/components/Form";
import { generatePassword } from "@/utils/generatePassword";
import { useState, ChangeEvent, FormEvent } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";

const initialValues = {
  length: 10,
  includeLowerCase: false,
  includeUpperCase: false,
  includeNumber: false,
  includeSymbols: false
};

const RandomPassword = () => {
  const [values, setValues] = useState(initialValues);
  const [generatedPassword, setGeneratedPassword] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: newValue
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const password = generatePassword(values);
    setGeneratedPassword(password);
  };

  return (
    <div className="password-gen-container opacity-90">
      <Link href="/generator" className="flex flex-row mt-7 md:mt-0"><IoMdArrowRoundBack className="text-2xl mr-2" />Return</Link>
      <h1 className="text-3xl md:text-4xl text-center mt-20">Password generator</h1>
      <Form handleSubmit={handleSubmit} values={values} generatedPassword={generatedPassword} handleChange={handleChange} hasCharacterLength />
    </div>
  );
};

export default RandomPassword