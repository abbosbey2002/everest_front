import React from 'react'
import ReactModal from 'react-modal'


ReactModal.setAppElement("body")

const Usersuccess =({isopen}) => {  
return (
  <ReactModal isopen={isopen}    contentLabel="Modal">

      <div class="card">
                <div class="card-header">
                  <h4>Default</h4>
                </div>
                <div class="card-body">
                  <div class="alert alert-primary">
                    This is a primary alert.
                  </div>
                  <div class="alert alert-secondary">
                    This is a secondary alert.
                  </div>
                  <div class="alert alert-success">
                    This is a success alert.
                  </div>
                  <div class="alert alert-danger">
                    This is a danger alert.
                  </div>
                  <div class="alert alert-warning">
                    This is a warning alert.
                  </div>
                  <div class="alert alert-info">
                    This is a info alert.
                  </div>
                  <div class="alert alert-light">
                    This is a light alert.
                  </div>
                  <div class="alert alert-dark">
                    This is a dark alert.
                  </div>
                </div>
              </div>
  </ReactModal>
)
}

export default Usersuccess;
