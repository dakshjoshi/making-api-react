import React from "react";
import { Controller, useForm } from "react-hook-form";
import { TextField, Container, Button } from "@material-ui/core";

import axios from "axios";

export const TeacherForm = () => {
  const { control, handleSubmit } = useForm();

  const server = `https://making-apis.herokuapp.com/teacher`;
  const localServer = `http://localhost:6969/`;

  const teacher = async (teacherData) => {
    console.log(teacherData);
    await axios.post(server, teacherData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(teacher)}>
        <Container className="d-flex flex-column w-25">
          <Controller
            control={control}
            name="teacher"
            render={({ field }) => (
              <TextField placeholder="" label="Teacher" {...field} />
            )}
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
