import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

function StdudentList() {

    const [data, setData] = useState([]);

    let componentMounted=true;

    useEffect( () =>{

       const getStudents =async () =>{

           const response =await fetch('https://everest-back.na4u.ru/api/students');
           if (componentMounted) {
            setData(await response.clone().json());
            console.log(data);
        }
        return() => {
            componentMounted = false;
        } 
        }

        getStudents()
    }, [])

  return (
    <div className="card">
    <div className="card-header">
        <h4>Students</h4>
    </div>
    <div className="card-body">
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th>id_client</th>
                    <th>course_type</th>
                    <th>state</th>
                </tr>
            </thead>
            <tbody>
           {  
                data.length == 0 && <h1>Branches is emty</h1>
            }
                 {
                
                data.map((item) => {
                    return (
                        <tr key={
                            item.id
                        }>
                            <th scope="row">
                                {
                                item.id
                            }</th>
                            <td>{
                                item.id_client
                            }</td>
                            <td>
                               {item.course_type}
                            </td>
                            <td>{
                                item.state
                            }</td>
                           

                        </tr>
                    )
                })
            } </tbody>
        </table>
    </div>
    </div>
  )
}

export default StdudentList
