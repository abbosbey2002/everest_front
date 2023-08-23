import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Studentadd() {

    const navigate = useNavigate();

    const [id_client, setId_Client] = useState();
    const [course_type, setCourse_type] = useState();
    const [state, setState] = useState();
  

    const saveBranches = () =>{
        
        fetch("https://everest-back.na4u.ru/api/students", {
            method: "POST",
            headers: {
                "Content-Type" : "Application/json"
            },
            body: JSON.stringify({
               id_client,
               course_type,
               state
            })
        }).then(data => data.json())
        .then(res => {
            if(res.operationResult.result == 0){
                console.log(res);
                alert("Malumotlarni to`g`ri kiriting")
            }else{
                window.location.reload()
            }
        })
    }

  return (
    <>
      
    <section className="section">
    <div className="card p-3 row">
        <div>
    <label htmlFor="id_branch">id_branch</label>
    <input type="number" id='id_branch' className='form-control' onChange={(e) => setId_Client(e.target.value)} />
        </div>
        <div>
    <label htmlFor="course_type">course Type</label>
    <input type="text" id='course_type' className='form-control' onChange={(e) => setCourse_type(e.target.value)} />
        </div>

        <div>
    <label htmlFor="state">State</label>
    <select type="text" id='state' className='form-control' onChange={(e) => setState(e.target.value)} >
        <option value="1">finished course</option>
        <option value="4">continuing_course</option>
        <option value="7">paid course</option>
         </select>
        </div>

        <div>
    <label htmlFor="name">Name</label>
    <input type="text" id='name' className='form-control'  />
        </div>

        <div>
    <label htmlFor="address">Famele</label>
    <input type="text" id='address' className='form-control'  />
        </div>
        <div>
    <label htmlFor="Surname">Surname</label>
    <input type="text" id='Surname' className='form-control'  />
        </div>

       
    <div className='m-2'>  <button onClick={saveBranches} className='btn btn-success'>Save</button> </div>
    </div>        
    </section>
    </>
  )
}

export default Studentadd
