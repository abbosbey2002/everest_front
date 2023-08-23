import React, { useEffect, useState } from 'react'

function CourseList() {

    const [data, setData] = useState([])
    let componentMounted = true;

    useEffect(() => {
        const getStudent =async () =>{
            const responce = await fetch("https://everest-back.na4u.ru/api/courses");
            if(componentMounted ){
                setData(await responce.clone().json());
                console.log(data)
            }

            return() => {
                componentMounted = false;
            } 
        }

        getStudent()
    })




  return (

        <div className="card">
            <div className="card-header">
                <h4>Branches</h4>
            </div>
            <div className="card-body">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th>course_type</th>
                            <th scope="col">course_level</th>
                            <th scope='col'>start date</th>
                            <th scope="col">state</th>

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
                                        item.course_type
                                    }</td>
                                  
                                    <td>{
                                        item.course_level
                                    }</td>
                                    <td>
                                       {item.s_date}
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

export default CourseList;
