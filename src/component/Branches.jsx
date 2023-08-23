import React from 'react'
import {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import Usersuccess from './Usersuccess'
import BranchPost from './branches/BranchPost';


export default function Branches() {


    const [data, setData] = useState([]);

    const [searchInput, SetSearchInput] = useState('');

    const [filter, setFilter]=useState(data)
    const [loading, setLoading] = useState(false)
    let componentMounted = true;

    const [isopen, setIsModalOpen] = useState(true);

    const openModal = () => {
        console.log(isopen)
        setIsModalOpen(true);
    };

    const closeModal = () => {
        isopen(false);
    };


    useEffect(() => {
        const getBranches = async () => {
            setLoading(true)
            const response = await fetch("https://everest-back.na4u.ru/api/branches");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.clone().json());

                // setFilter(await response.json());
                setLoading(false);
            }
            return() => {
                componentMounted = false;
            } 
        }
        getBranches();
    }, []);


    const handleInputChangevalue = (event) => {
        SetSearchInput(event.target.value);
        // console.log(event.target.value)
        const   res = data.filter(value => value.phone.includes(event.target.value) )
        
        setFilter(res)
        console.log(filter)
        
        event.preventDefault();
      };

    
    const search = () => {
        data.filter(value => {
            if(1){
              
                console.log(data, searchInput)
            }
        })
    }


    const Loading = () => {
        return (
            <div className="loader"></div>
        )
    }

    const ShowClients = () => {
        return (
            <>


                <section className="section">

                <BranchPost />

                <div className='card p-3'>
                <div className="form-inline mr-auto">
  <div className="search-element">
    <input
      className="form-control"
      type="search"
      placeholder="Search"
      aria-label="Search"
      data-width={200}
      style={{ width: 200 }}
      onChange={handleInputChangevalue}
      value={searchInput}
    />
    <button onClick className="btn" type="submit">
      <i className="fas fa-search" />
    </button>
  </div>
</div>
                </div>

                    <div className="card">
                        <div className="card-header">
                            <h4>Branches</h4>
                        </div>
                        <div className="card-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th>Name</th>
                                        <th scope="col">Phone Number</th>
                                        <th scope="col">
                                            region
                                        </th>
                                        <th scope='col'>Area</th>
                                        <th scope="col">Adress</th>

                                    </tr>
                                </thead>
                                <tbody>
                               {  
                                    filter.length == 0 && <h1>Branches is emty</h1>
                                }
                                     {
                                    
                                    filter.map((item) => {
                                        return (
                                            <tr key={
                                                item.id
                                            }>
                                                <th scope="row">
                                                    {
                                                    item.id
                                                }</th>
                                                <td>{
                                                    item.name
                                                }</td>
                                                <td>
                                                    <NavLink to={
                                                        `/employess/${
                                                            item.id
                                                        }`
                                                    }>
                                                        {
                                                        item.phone
                                                    }</NavLink>
                                                </td>
                                                <td>{
                                                    item.region
                                                }</td>
                                                <td>
                                                   {item.area}
                                                </td>
                                                <td>{
                                                    item.address
                                                }</td>

                                            </tr>
                                        )
                                    })
                                } </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </>
        )
    }

    return (
        <> {
            loading ? <Loading/>: <ShowClients/>
        } </>
    )


}
