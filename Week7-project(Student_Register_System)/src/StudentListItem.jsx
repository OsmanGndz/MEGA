import React from "react";

function StudentListItem({ key, item, removeStudent, updateStudent }) {
  return (
    <tr key = {key}>
      
      <th scope="col">{item.name}</th>
      <th scope="col">{item.surname}</th>
      <th scope="col">{item.schoolID}</th>
      <th scope="col">{item.grade}</th>

      
      <button onClick={()=> removeStudent(item.uuid)}
        className="btn btn-sm btn-danger float-end"
      >Sil</button>
      <button onClick={()=> updateStudent(item.uuid)}
        className="btn btn-sm btn-info float-end"
      >Güncelle</button>
    </tr>
  );
}

export default StudentListItem;
