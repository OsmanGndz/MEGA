import React, { useState } from "react";
import "./App.css";
import StudentList from "./StudentList";
import { v4 as uuidv4 } from "uuid";

function Frame() {
  const emptyForm = { name: "", surname: "", schoolID: 0, grade: 0 };
  const [formData, setFormData] = useState(emptyForm);
  const [students, setStudents] = useState([]);

  function handleForSubmit(event) {
    event.preventDefault();
    if (formData.isEdited) {
      const studentsIndex = students.findIndex((item) => item.uuid === formData.uuid);
      const newStudents = students.slice();
      newStudents[studentsIndex] = {...formData};
      setStudents(newStudents);
    } 
    else {
      
      formData.uuid = uuidv4();
      setStudents([...students, formData]);
      console.log({ students });
    }
    setFormData(emptyForm);
    event.target.reset();
  }

  function handleInputChange(event) {
    setFormData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  }
  function removeStudent(uuid) {
    console.log(uuid);
    setStudents((prev) => prev.filter((item) => item.uuid !== uuid));
  }

  function updateStudent(uuid) {
    console.log(uuid);
    const student = students.find((item) => item.uuid == uuid);
    console.log(student);
    setFormData({ ...student, isEdited: true });
  }

  return (
    <>
      <div className="custom_container">
        <form onSubmit={handleForSubmit}>
          <p className="head">Öğrenci Kayıt Sistemi</p>
          <div className="row">
            <div className="col ">
              <label htmlFor="exampleInputEmail1" className="form-label">
                İsim
              </label>
              <input
                onChange={handleInputChange}
                value={formData.name}
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                name="name"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="col ">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Soyisim
              </label>
              <input
                onChange={handleInputChange}
                value={formData.surname}
                name="surname"
                type="text"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
          </div>
          <div className="row">
            <div className="col ">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Okul Numarası
              </label>
              <input
                onChange={handleInputChange}
                value={formData.schoolID}
                name="schoolID"
                type="number"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="col ">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Notu
              </label>
              <input
                onChange={handleInputChange}
                value={formData.grade}
                name="grade"
                type="number"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary mt-2 mb-2">
            Kaydet
          </button>
        </form>
      </div>
      <StudentList
        students={students}
        removeStudent={removeStudent}
        updateStudent={updateStudent}
      />
    </>
  );
}

export default Frame;
