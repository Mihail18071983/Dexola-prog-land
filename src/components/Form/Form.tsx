
import styles from "./Form.module.scss";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { ColorRing } from "react-loader-spinner";


export const Form = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { isSubmitting, errors }
  } = useForm({
    defaultValues: {
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
    mode:"onChange"
  });

  type FormData = {
    email: string;
    phoneNumber: string;
    password: string;
    confirmPassword: string;
  };

  

  const onSubmitHandler = async (data: FormData) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitHandler)} className={styles.form}>
        <label className={styles.label} htmlFor="email">
          RECEIVER ADDRESS
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
            placeholder="wallet_address"
            defaultValue=""
          />
          {errors.email && (
            <p className={styles.errMessage}>{errors.email.message}</p>
          )}
        </label>

        <label className={styles.label} htmlFor="phone">
          AMOUNT TO SEND
          <input
            id="phone"
            className={styles.input}
            {...register("phoneNumber", {
              required: true,
            })}
            type="text"
          />
          {errors.phoneNumber && (
            <p className={styles.errMessage}>{errors.phoneNumber.message}</p>
          )}
        </label>

        <label className={styles.label} htmlFor="password">
          AMOUNT TO SEND
          <input
            id="password"
            className={styles.input}
            {...register("password", {
              required: true,
            })}
            type="text"
          />
          {errors.password && (
            <p className={styles.errMessage}>{errors.password.message}</p>
          )}
        </label>

        <label className={styles.label} htmlFor="confirmPassword">
          AMOUNT TO SEND
          <input
            id="confirmPassword"
            className={styles.input}
            {...register("confirmPassword", {
              required: true,
            })}
            type="text"
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
