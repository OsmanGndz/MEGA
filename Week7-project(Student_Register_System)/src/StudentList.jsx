import React from "react";
import StudentListItem from "./StudentListItem";

function StudentList({ students, removeStudent, updateStudent }) {
  return (
    <>
      <div className="custom_container1">
        <p className="head">Öğrenci Kayıtları</p>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">İsim</th>
              <th scope="col">Soyisim</th>
              <th scope="col">Numara</th>
              <th scope="col">Not</th>
            </tr>
          </thead>
          <tbody>
            {students.map((item) => (
              <StudentListItem key = {item.uuid} item={item} removeStudent = {removeStudent} 
              updateStudent = {updateStudent}/>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default StudentList;
