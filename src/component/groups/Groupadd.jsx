import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



function Groupadd() {
  const navigate = useNavigate();

  const [id_branch, setId_branch] = useState();
  const [id_group, setId_group] = useState();
  const [course_type, setCourse_type] = useState();

  const saveGroup = () => {
    fetch("https://everest-back.na4u.ru/api/groups", {
            method: "POST",
            headers: {
                "Content-Type" : "Application/json"
            },
            body: JSON.stringify({
                id_branch,
                id_group,
                course_type
            })
        }).then(data => data.json())
        .then(res => {
            if(res.operationResult.result == 0){
                console.log(res);
                alert("Malumotlarni to`g`ri kiriting")
            }else{
                window.location.reload();
            }
        })
  };

  return (
    <>
      <section className="section">
        <div className="card p-3 row">
          <div>
            <label htmlFor="id_branch">setId_branch</label>
            <input
              type="number"
              id="id_branch"
              className="form-control"
              onChange={e => setId_branch(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="group_id">id_group</label>
            <input
              type="text"
              id="group_id"
              className="form-control"
              onChange={e => setId_group(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="state">course_type</label>
            <select
              type="text"
              id="course_type"
              className="form-control"
              onChange={e => setCourse_type(e.target.value)}
            >
              <option value="1">finished course</option>
              <option value="4">continuing_course</option>
              <option value="7">paid course</option>
            </select>
          </div>

          <div className="m-2">
            <button onClick={saveGroup} className="btn btn-success">
              Save
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Groupadd;