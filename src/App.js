import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { StudentForm } from "./studentForm";
import { TeacherForm } from "./teacherForm";
import { AssignTeacher } from "./assignTeacher";

function App() {
  return (
    <div>
      <h5>Add student</h5>
      <StudentForm></StudentForm>
      <h5>Add Teacher</h5>
      <TeacherForm></TeacherForm>
      <h5>Assign Teacher or change assigned teacher to student</h5>
      <AssignTeacher></AssignTeacher>
    </div>
  );
}

export default App;
