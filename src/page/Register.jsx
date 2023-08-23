import React from "react";
import { NavLink } from "react-router-dom";


function Register (){


  


    return (
        <>
      
        <section className="section">
          <div className="container mt-5">
            <div className="row">
              <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2">
                <div className="card card-primary">
                  <div className="card-header">
                    <h4>Register</h4>
                  </div>
                  <div className="card-body">
                    <form method="POST" action="" >
                      <div className="row">
                        <div className="form-group col-6">
                          <label htmlFor="frist_name">First Name</label>
                          <input
                            id="frist_name"
                            type="text"
                            className="form-control"
                            name="frist_name"
                            autofocus=""
                          />
                        </div>
                        <div className="form-group col-6">
                          <label htmlFor="last_name">Last Name</label>
                          <input
                            id="last_name"
                            type="text"
                            className="form-control"
                            name="last_name"
                          />
                        </div>
                      </div>

                      <div className="row">
                        <div className="form-group col-6">
                          <label htmlFor="phone" className="d-block">
                            Phone Number
                          </label>
                          <input
                            id="phone"
                            type="phone"
                            className="form-control pwstrength"
                         
                            name="phone"
                          />
                          <div id="pwindicator" className="pwindicator">
                            <div className="bar" />
                            <div className="label" />
                          </div>
                        </div>
                        <div className="form-group col-6">
                          <label htmlFor="password2" className="d-block">
                            Middle name
                          </label>
                          <input
                            id="middle_name"
                            type="text"
                            className="form-control"
                            name="middle_name"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-6">
                          <label htmlFor="seria">Passport Seria</label>
                          <input
                            id="seria"
                            type="text"
                            className="form-control"
                            name="seria"
                            autofocus=""
                          />
                        </div>
                        <div className="form-group col-6">
                          <label htmlFor="passport_number">Passport Number</label>
                          <input
                            id="passport_number"
                            type="number"
                            className="form-control"
                            name="passport_number"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col">
                          <label htmlFor="pinfl">PINFL</label>
                          <input
                            id="pinfl"
                            type="text"
                            className="form-control"
                            name="pinfl"
                            autofocus=""
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            name="agree"
                            className="custom-control-input"
                            id="agree"
                          />
                          <label className="custom-control-label" htmlFor="agree">
                            I agree with the terms and conditions
                          </label>
                        </div>
                      </div>
                      <div className="form-group">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg btn-block"
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="mb-4 text-muted text-center">
                    Already Registered? <NavLink to="/login">Login</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
            </>
    )
}


export default Register;