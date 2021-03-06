import React, { useState } from "react";
import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import { TextField, Container, Button } from "@material-ui/core";

export const StudentForm = () => {
  const server = `https://making-apis.herokuapp.com/student`;
  const localServer = `http://localhost:6969/student`;
  const { control, handleSubmit } = useForm();
  const [sent, setSent] = useState(false);

  const student = async (studentData) => {
    console.log(studentData);
    const datat = await axios.post(server, studentData);
    console.log(datat);
    if (datat) {
      setSent(true);
    }
  };

  return (
    <div className="form">
      {sent == true && <h6>Student added in Mongo DB</h6>}

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
          <input type="submit" className="btn btn-dark mt-4 rounded-0" />
        </Container>
      </form>
    </div>
  );
};
