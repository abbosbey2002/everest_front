import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Employees() {
  const { id } = useParams();

  const [data, setData] = useState([]);
  const [employer, setEmployer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [jon_title, setJon_title] = useState('');
  const [error, setError] = useState('');
  const [errorState, setErrorState] = useState(false);

  const navigate = useNavigate()

  useEffect(() => {
    let componentMounted = true;

    const getClients = async () => {
      setLoading(true);
      const response = await fetch("https://everest-back.na4u.ru/api/clients");
      const jsonData = await response.json();

      if (componentMounted) {
        setData(jsonData);
        setLoading(false);
      }
    };

    getClients();

    return () => {
      componentMounted = false;
    };
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const selectedEmployer = data.find(item => item.id === parseInt(id));
      setEmployer(selectedEmployer);
    }
  }, [data, id]);

  const saveEmployeer = () => {
    fetch("https://everest-back.na4u.ru/api/employees", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "id_branch": 7,
        "id_client": employer.id_client,
        "jon_title": jon_title
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data.operationResult.resul ==  0) {
          alert(data.operationResult.errorMessage)
          setError(data.operationResult.errorMessage.id_client[0])
          setErrorState(true)
          console.log(data)
        } else {
          alert('add your changes 👍')
          navigate('/clients');
        }
      })
      .catch(error => {
        alert(error)
        // Xatolarni qayta ishlash
      });
  }

  const Loading = () => {
    return <div className='loader'></div>;
  };

  const AddEmployees = () => {
    return (
      <div className="card">
        <div className="card-header">
          <h4>Custom Forms #2</h4>
        </div>
        <div className="card-body">
          <label className='my-2' htmlFor="name">Name</label>
          <input disabled id="name" value={employer.name} placeholder='Name' type="text" className="form-control " name="" />

          <label className='my-2' htmlFor="family">Family</label>
          <input disabled id="family" value={employer.surname} placeholder='Family' type="text" className="form-control " name="" />

          <label className='my-2' htmlFor="middle_name">Middle Name</label>
          <input disabled id="middle_name" value={employer.middle_name} placeholder='Middle name' type="text" className="form-control " name="" />

          <label className='my-2' htmlFor="birthday">Birthday</label>
          <input disabled id="birthday" value={employer.birthday} placeholder='Birthday' type="date" className="form-control" name="" />

          <div className="section-title mt-0">Tanlang</div>
          <div className="form-group">
            <label>Birini tanlang</label>
            <select className="custom-select" onChange={(e) => setJon_title(e.target.value)}>
              <option defaultValue>Choose employer of job</option>
              <option value={1}>Admin</option>
              <option value={2}>Farrosh</option>
              <option value={3}>Uyqichi</option>
            </select>
          </div>
          <button className='btn btn-success' onClick={saveEmployeer}>Save</button>
        </div>
      </div>
    );
  };

  return (
    <>
      {loading ? <Loading /> : employer ? <AddEmployees /> : null}
    </>
  );
}