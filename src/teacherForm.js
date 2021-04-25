import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { TextField, Container, Button } from "@material-ui/core";

import axios from "axios";

export const TeacherForm = () => {
  const { control, handleSubmit } = useForm();

  const server = `https://making-apis.herokuapp.com/teacher`;
  const localServer = `http://localhost:6969/teacher`;
  const [sent, setSent] = useState(false);

  const teacher = async (teacherData) => {
    console.log(teacherData);
    const datat = await axios.post(server, teacherData);
    console.log(datat);
    if (datat) {
      setSent(true);
    }
  };

  return (
    <div>
      {sent == true && <h6>Teacher added in Mongo DB</h6>}

      <form onSubmit={handleSubmit(teacher)}>
        <Container className="d-flex flex-column w-25">
          <Controller
            control={control}
            name="teacher"
            render={({ field }) => (
              <TextField placeholder="" label="Teacher" {...field} />
            )}
          />

          <input type="submit" className="btn btn-dark mt-4 rounded-0" />
        </Container>
      </form>
    </div>
  );
};
