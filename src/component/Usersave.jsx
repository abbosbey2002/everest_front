import React, {useState, useEffect} from "react";
import {NavLink} from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


function Usersave() {



    const navigate = useNavigate();

    const {id} = useParams();
    // console.log({id})

    const [name, setName] = useState('')
    const [middle_name, setMiddleName] = useState('')
    const [lastname, setLastName] = useState('')
    const [passportSeria, setPassportSeria] = useState('')
    const [passportNumber, setPassportNumber] = useState()
    const [phone, setPhone] = useState(id)
    const [pinfl, setPinfl] = useState()
    const [birthdate, setBirthdate] = useState()

    const [error, setError] = useState('');
    const [errorState, setErrorState]=useState(false);

    const [loading, setLoading] = useState(false);
    let componentMounted = true;
    
    const handleClick = () => {

        const url = "https://everest-back.na4u.ru/api/clients"

        console.log(  {
          "name": name,
          "id_client" : '88234567',
          "surname": lastname,
          "middle_name": middle_name,
          "seria": passportSeria,
          "passport": passportNumber,
          "phone": phone,
          "pinfl": pinfl,
          "birthday":  birthdate
      })

        fetch("https://everest-back.na4u.ru/api/clients", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    "name": name,
                    "id_client" : Number(pinfl.slice(0, 7)),
                    "surname": lastname,
                    "middle_name": middle_name,
                    "seria": passportSeria,
                    "passport": passportNumber,
                    "phone": phone,
                    "pinfl": pinfl,
                    "birthday":  birthdate
                }
            )
        }).then(response => response.json()).then(data => { 
            navigate('/apply');
          if(data.operationResult.errorMessage.id_client[0].length > 1){
            setError(data.operationResult.errorMessage.id_client[0])
            setErrorState(true)
          }

        }).catch(error => { // Handle any errors
        });

    }


    return (
        <>

            <div className="row">

                <div className="col-12 col-md-6 mt-5">
                    <NavLink href="assets/img/image-gallery/1.png" data-sub-html="Demo Description">
                        <img width="100%" className="img-responsive thumbnail" src="assets/img/image-gallery/thumb/thumb-1.png" alt=""/>
                    </NavLink>
                </div>


                <div className="col-md-6 col-12 mt-5">
                    <div className="row">
                        <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2">
                            <div className="card card-primary">
                                <div className="card-header">
                                    <h4>User save</h4>
                                </div>
                                {/*  action="https://everest-back.na4u.ru/api/clients"  */}
                                <div className="card-body">
                                    {/* <form method="POST"> */}
                                    <div className="row">
                                        <div className="form-group col-6">
                                            <label htmlFor="frist_name">First Name</label>
                                            <input id="frist_name" type="text" className="form-control" name="name"

                                                onChange={
                                                    (e) => setName(e.target.value)
                                                }/>
                                            <input type="hidden" name="id_client" value="2222222"/>
                                        </div>
                                        <div className="form-group col-6">
                                            <label htmlFor="last_name">Last Name</label>
                                            <input id="last_name" type="text" className="form-control" name="surname"
                                                onChange={
                                                    (e) => setLastName(e.target.value)
                                                }/>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="form-group col-6">
                                            <label htmlFor="phone" className="d-block">
                                                Phone Number
                                            </label>
                                            <input id="phone" type="text" value={phone}  className="form-control pwstrength" name="phone"
                                                onChange={
                                                    (e) => setPhone(e.target.value)
                                                }/>
                                            <div id="pwindicator" className="pwindicator">
                                                <div className="bar"/>
                                                <div className="label"/>
                                            </div>
                                        </div>
                                        <div className="form-group col-6">
                                            <label htmlFor="password2" className="d-block">
                                                Middle name
                                            </label>
                                            <input id="middle_name" type="text" className="form-control" name="middle_name"
                                                onChange={
                                                    (e) => setMiddleName(e.target.value)
                                                }/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-6">
                                            <label htmlFor="seria">Passport Seria</label>
                                            <input id="seria" type="text" className="form-control" name="seria"
                                                onChange={
                                                    (e) => setPassportSeria(e.target.value)
                                                }/>
                                        </div>
                                        <div className="form-group col-6">
                                            <label htmlFor="passport_number">Passport Number</label>
                                            <input id="passport_number" type="text" className="form-control" name="passport"
                                                onChange={
                                                    (e) => setPassportNumber(e.target.value)
                                                }/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col">
                                            <label htmlFor="pnfl">PINFL</label>
                                            <input id="pnfl" type="text" className="form-control" name="pinfl"
                                                onChange={
                                                    (e) => setPinfl(e.target.value)
                                                }/>
                                        </div>
                                        <div className="form-group col">
                                            <label htmlFor="birth_date">Birth date</label>
                                            <input id="birth_date" type="date" className="form-control" name="birthday"
                                                onChange={
                                                    (e) => setBirthdate(e.target.value)
                                                }/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" name="agree" className="custom-control-input" id="agree"/>
                                            <label className="custom-control-label text-danger" htmlFor="agree">
                                                Qayta tekshirib chiqing
                                            </label>
                                        </div>
                                        <div className="custom-control">
                                            {errorState && <p className="text-danger">{error}</p>}
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <button onClick={handleClick}
                                            className="btn btn-primary btn-lg btn-block">
                                            Save
                                        </button>
                                    </div>
                                    {/* </form> */} </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Usersave;
