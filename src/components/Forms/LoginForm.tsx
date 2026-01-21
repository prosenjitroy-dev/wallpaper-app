"use client";

import { loginSchema, LoginSchematype } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";

import { Controller, useForm } from "react-hook-form";
import { Field, FieldError, FieldLabel } from "../shadcnui/field";
import { Input } from "../shadcnui/input";
import { Checkbox } from "../shadcnui/checkbox";
import { Button } from "../shadcnui/button";
import { FingerprintIcon, LoaderIcon } from "lucide-react";

const LoginForm = () => {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: true,
    },
    mode: "all",
  });

  const LoginFormHandeler = async (loginData: LoginSchematype) => {
    console.log(loginData);
  };
  return (
    <form
      onSubmit={handleSubmit(LoginFormHandeler)}
      className="grid gap-4"
      noValidate>
      <Controller
        name="email"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>Email</FieldLabel>
            <Input
              {...field}
              id={field.name}
              type="email"
              aria-invalid={fieldState.invalid}
              placeholder="Enter your email"
              autoComplete="email"
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <Controller
        name="password"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>Password</FieldLabel>
            <Input
              {...field}
              id={field.name}
              type="password"
              aria-invalid={fieldState.invalid}
              placeholder="Enter your password"
              autoComplete="current-password"
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <Checkbox
              id={field.name}
              name={field.name}
              checked={field.value}
              onCheckedChange={field.onChange}
            />
            <FieldLabel htmlFor={field.name}>Password</FieldLabel>

            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <Button
        type="submit"
        className="cursor-pointer"
        disabled={isSubmitting}>
        {isSubmitting ?
          <>
            <LoaderIcon className="animate-spin" />
            Submitting.....
          </>
        : <>
            <FingerprintIcon />
            Login
          </>
        }
      </Button>
    </form>
  );
};

export default LoginForm;
