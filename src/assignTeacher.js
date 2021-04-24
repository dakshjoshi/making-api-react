import React from "react";
import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import { TextField, Container, Button } from "@material-ui/core";

export const AssignTeacher = () => {
  const { control, handleSubmit } = useForm();

  const server = `https://making-apis.herokuapp.com/student`;
  const localServer = `http://localhost:6969/`;

  const student = async (assignedTeacher) => {
    console.log(assignedTeacher);
    await axios.put(server, assignedTeacher);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(student)}>
        <Container className="d-flex flex-column w-25">
          <Controller
            control={control}
            name="studentID"
            render={({ field }) => (
              <TextField placeholder="" label="Student ID" {...field} />
            )}
          />
          <Controller
            control={control}
            name="teacherID"
            render={({ field }) => <TextField label="Teacher ID" {...field} />}
          />

          <input type="submit" className="btn btn-dark mt-4 rounded-0" />
        </Container>
      </form>
    </div>
  );
};
