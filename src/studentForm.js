import React from "react";
import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import { TextField, Container, Button } from "@material-ui/core";

export const StudentForm = () => {
  const server = `https://making-apis.herokuapp.com/student`;
  const localServer = `http://localhost:6969/`;
  const { control, handleSubmit } = useForm();

  const student = async (studentData) => {
    console.log(studentData);
    await axios.post(server, studentData);
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit(student)}>
        <Container className="d-flex flex-column w-25">
          <Controller
            control={control}
            name="student"
            render={({ field }) => (
              <TextField placeholder="" label="Student" {...field} />
            )}
          />
          <Controller
            control={control}
            name="teacher"
            render={({ field }) => <TextField label="Teacher" {...field} />}
          />
          <Controller
            name="id"
            control={control}
            render={({ field }) => <TextField label="Custom ID" {...field} />}
          />
          <input type="submit" className="btn btn-dark mt-4 rounded-0" />
        </Container>
      </form>
    </div>
  );
};
