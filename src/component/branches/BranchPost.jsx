import React from 'react'
import { useState } from 'react'
import { json, useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

function BranchPost() {

    const [id_branch, setId_branch] = useState('')
    const [name, setName] = useState('')
    const [region, setRegion] = useState('')
    const [area, setArea] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')    
    const [location, setLocation] = useState('') 

    const navigate = useNavigate();

    const saveBranches = () => {

        console.log({
            id_branch,
            name,
            region,
            area,
            address,
            phone,
            location
        })

        fetch("https://everest-back.na4u.ru/api/branches", {
            method: "POST",
            headers: {
                "Content-Type" : "Application/json"
            },
            body: JSON.stringify({
                id_branch,
                name,
                region,
                area,
                address,
                phone,
                location
            })
        }).then(data => data.json())
        .then(res => {
            if(res.operationResult.result == 0){
                console.log(res);
                alert("Malumotlarni to`g`ri kiriting")
            }else{
                navigate("/clients");
            }
        })
    }


  return (
    <section className="section">
    <div className="card p-3 row">
        <div>
    <label htmlFor="id_branch">id_branch</label>
    <input type="number" id='id_branch' className='form-control' onChange={(e) => setId_branch(e.target.value)} />
        </div>
        <div>
    <label htmlFor="name">name</label>
    <input type="text" id='name' className='form-control' onChange={(e) => setName(e.target.value)} />
        </div>

        <div>
    <label htmlFor="region">Region</label>
    <select type="text" id='region' className='form-control' onChange={(e) => setRegion(e.target.value)} >
        <option value="1">Toshkent</option>
        <option value="75">Surxondaryo</option>
        <option value="80">Buxoro</option>
         </select>
        </div>

        <div>
    <label htmlFor="area">Area</label>
    <select type="text" id='area' className='form-control' onChange={(e) => setArea(e.target.value)} >
        <option value="1">Chilonzor</option>
        <option value="75">Qumqo`rg`on</option>
        <option value="80">Temiz</option>
         </select>
        </div>

        <div>
    <label htmlFor="address">address</label>
    <input type="text" id='address' className='form-control' onChange={(e) => setAddress(e.target.value)} />
        </div>
        <div>
    <label htmlFor="phone">phone</label>
    <input type="number" id='phone' className='form-control' onChange={(e) => setPhone(e.target.value)} />
        </div>

        <div>
    <label htmlFor="location">location</label>
    <input type="text" id='location' className='form-control' onChange={(e) => setLocation(e.target.value)} />
        </div>
    <div className='m-2'>  <button onClick={saveBranches} className='btn btn-success'>Save</button> </div>
    </div>        
    </section>
  )
}

export default BranchPost
