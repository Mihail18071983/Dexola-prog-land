import React from "react";
import styles from "./Form.module.scss";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { ColorRing } from "react-loader-spinner";
import InputMask from "react-input-mask";

const defaultPhoneNumber = "+38(0__) ___ __ __";

type FormData = {
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
};

export const Form = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting, errors },
  } = useForm({
    defaultValues: {
      email: "",
      phoneNumber: defaultPhoneNumber,
      password: "",
      confirmPassword: "",
    },
    // mode: "onChange",
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    reset()
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <label className={styles.label} htmlFor="email">
          <input
            id="email"
            className={styles.input}
            {...register("email", {
              required: true,
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Please enter a valid address wallet!",
              },
            })}
            type="text"
            placeholder="Enter email"
            defaultValue=""
          />
          {errors.email && (
            <p className={styles.errMessage}>{errors.email.message}</p>
          )}
        </label>

        <label className={styles.label}>
          <Controller
            control={control}
            defaultValue={defaultPhoneNumber}
            name="phoneNumber"
            render={({ field: { onChange, onBlur, ref,value } }) => (
              <InputMask className={styles.input}
                alwaysShowMask
                mask="+38(099) 999-9999"
                onBlur={onBlur}
                onChange={onChange}
                inputRef={ref}
                value={value}
              />
            )}
          />
        </label>

        <label className={styles.label} htmlFor="password">
          <input
            id="password"
            className={styles.input}
            {...register("password", {
              required: true,
            })}
            type="text"
            placeholder="Password"
          />
          {errors.password && (
            <p className={styles.errMessage}>{errors.password.message}</p>
          )}
        </label>

        <label className={styles.label} htmlFor="confirmPassword">
          <input
            id="confirmPassword"
            className={styles.input}
            {...register("confirmPassword", {
              required: true,
            })}
            type="text"
            placeholder="Confirm Password"
          />
          {errors.password && (
            <p className={styles.errMessage}>{errors.password.message}</p>
          )}
        </label>

        <button className={styles.btn} type="submit">
          {isSubmitting ? (
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
          ) : (
            "Send it"
          )}
        </button>
      </form>
      <DevTool control={control} />
    </>
  );
};
