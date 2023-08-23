import React, { useEffect, useState } from 'react'

function GroupsList() {

    const [data, setData] = useState([])
    let componentMounted = true;

    useEffect(() => {
        const getStudent =async () =>{
            const responce = await fetch("https://everest-back.na4u.ru/api/groups");
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
                            <th>id_branch</th>
                            <th scope="col">id_group</th>
                            <th scope='col'>course type</th>
                           

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
                                        item.id_group
                                    }</td>
                                  
                                    <td>{
                                        item.id_group
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

export default GroupsList;
