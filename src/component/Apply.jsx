import React, {useState, useEffect} from "react";
import {NavLink} from "react-router-dom";

function Apply() {


    const [data, setData] = useState([]);
    // const [filter, setFilter]=useState(data)
    const [loading, setLoading] = useState(false)
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true)
            const response = await fetch("https://everest-back.na4u.ru/api/phones");
            if (componentMounted) {
                setData(await response.clone().json());
              

                // setFilter(await response.json());
                setLoading(false);
            }
            return() => {
                componentMounted = false;
            }
        } 
        
        getProducts();
    }, []);


    const Loading = () => {
        return (
          <div className="loader"></div>
        )
    }

    const ShowApply = () => {
        return (
            <>
                <section className="section">

                    <div className="card">
                        <div className="card-header">
                            <h4>Simple</h4>
                        </div>
                        <div className="card-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Phone Number</th>
                                        <th scope="col"> State  </th>
                                        <th scope="col">Date</th>

                                    </tr>
                                </thead>
                                <tbody> {
                                    data.map((item) => {
                                        return (
                                            <tr key={item.id}>
                                                <th scope="row">{item.id}</th>
                                                <td>
                                                    <NavLink to={`/usersave/${item.phone}`}>{item.phone}</NavLink>
                                                </td>
                                                <td>{item.state}</td>
                                                <td>{new Date(item.created_at).toLocaleString()}</td>
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
            loading ? <Loading/>: <ShowApply/>
        } </>
    )

}


export default Apply;
