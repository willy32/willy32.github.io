import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, Input, Spacer, Textarea } from '@nextui-org/react';

import styles from "../styles/Home.module.css";

const schema = yup.object().shape({
  name: yup.string().min(1).required(),
  email: yup.string().email().required(),
  message: yup.string().min(2).required()
});

export default function Home() {
  /*
  const {register, handleSubmit, formState: {errors}, reset} = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmitHandler = (data) => {
    console.log(data);
    reset();
  }
  */


  return (
    <form action="" method="post" className={styles.container}>
      <Input label="Name" placeholder="Name" />
      <Spacer y={0.5} />
      <Input label="Email" placeholder="Email" type="email" />
      <Spacer y={0.5} />
      <Textarea label="Message" placeholder="Message" minRows={4} />
      <Spacer y={1.0} />
      <Button auto>Send</Button>
    </form>

    /*
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <h2>Lets sign you in.</h2>
      <br />

      <input {...register("name")} placeholder="Name" type="text" required />
      <p>{errors.name?.message}</p>

      <input
        {...register("email")}
        placeholder="E-Mail"
        type="email"
        required
      />
      <p>{errors.email?.message}</p>

      <textarea {...register("message")} cols={30} rows={10} placeholder="Message"></textarea>
      <p>{errors.message?.message}</p>

      <button type="submit">Send</button>
    </form>*/
  );
}
