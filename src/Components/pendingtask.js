import React from 'react';
import  './dashboard.css';

function pendingtask() {
    return (
        <div>
             <section id="pending-task">
        <div className="container">
          <div className="row">
            <div className="col-md-12 d-flex align-content-center flex-wrap width-auto">
              
              
                <h4>Pending Exercises</h4>
              
        
                
                <ion-icon className="ml-auto p-2" name="trash-outline"></ion-icon>
             
           <a href="/addexercise">  <button className="btn btn-theme1  my-0 "> Add New Task</button> </a>
              
            </div>
          </div>
        </div>

        <div className="task-card">

          <div className="container mt-5 mb-3">
            <div className="row">
                <div className=" col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card p-3 mb-2">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                                <div className="icon"> <i className="far fa-futbol"></i> </div>
                                <div className="ms-2 c-details">
                                    <h6 className="mb-0">Football</h6> <span>1 days ago</span>
                                </div>
                            </div>
                            <div className="badge"><a href='/addexercise'> <span>Edit</span> </a></div>
                        </div>
                        <div className="mt-5">
                          <div className="d-flex justify-content-between">
                            <h5 className="heading">Progress</h5>
                            <span></span>
                            <h5>55%</h5>
                          </div>
                            <div className="mt-3">
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{width: "55%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="mt-3"> <span class="text1">Days Left <span class="text2">5 Days</span></span> </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" col-lg-4  col-md-6 col-sm-12">
                  <div className="card p-3 mb-2">
                      <div className="d-flex justify-content-between">
                          <div className="d-flex flex-row align-items-center">
                              <div className="icon"> <i class="fas fa-swimmer"></i> </div>
                              <div className="ms-2 c-details">
                                  <h6 className="mb-0">Swimming</h6> <span>1 days ago</span>
                              </div>
                          </div>
                          <div className="badge"> <span>Edit</span> </div>
                      </div>
                      <div className="mt-5">
                        <div className="d-flex justify-content-between">
                          <h5 className="heading">Progress</h5>
                          <span></span>
                          <h5>30%</h5>
                        </div>
                          <div className="mt-3">
                              <div className="progress">
                                  <div className="progress-bar" role="progressbar" style={{width: "30%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                              <div className="mt-3"> <span className="text1">Days Left <span className="text2">5 Days</span></span> </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className=" col-lg-4  col-md-6 col-sm-12">
                <div className="card p-3 mb-2">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex flex-row align-items-center">
                            <div className="icon"> <i class="fas fa-biking"></i></div>
                            <div className="ms-2 c-details">
                                <h6 className="mb-0">Bicycling</h6>  <span>1 days ago</span>
                            </div>
                        </div>
                        <div className="badge"> <span>Edit</span> </div>
                    </div>
                    <div className="mt-5">
                      <div className="d-flex justify-content-between">
                        <h5 className="heading">Progress</h5>
                        <span></span>
                        <h5>90%</h5>
                      </div>
                        <div className="mt-3">
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{width: "90%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div className="mt-3"> <span class="text1">Days Left <span class="text2">5 Days</span></span> </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" col-lg-4 col-md-6 col-sm-12">
              <div className="card p-3 mb-2">
                  <div className="d-flex justify-content-between">
                      <div className="d-flex flex-row align-items-center">
                          <div className="icon"> <i class="fas fa-running"></i> </div>
                          <div className="ms-2 c-details">
                              <h6 className="mb-0">Bicycling</h6> <span>1 days ago</span>
                          </div>
                      </div>
                      <div className="badge"> <span>Edit</span> </div>
                  </div>
                  <div className="mt-5">
                    <div className="d-flex justify-content-between">
                      <h5 className="heading">Progress</h5>
                      <span></span>
                      <h5>85%</h5>
                    </div>
                      <div className="mt-3">
                          <div className="progress">
                              <div className="progress-bar" role="progressbar" style={{width: "85%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <div className="mt-3"> <span class="text1">Days Left <span class="text2">5 Days</span></span> </div>
                      </div>
                  </div>
              </div>
          </div>

          <div className=" col-lg-4 col-md-6 col-sm-12">
            <div className="card p-3 mb-2">
                <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                        <div className="icon"><i class="fas fa-running"></i>  </div>
                        <div className="ms-2 c-details">
                            <h6 className="mb-0">Bicycling</h6> <span>1 days ago</span>
                        </div>
                    </div>
                    <div className="badge"> <span>Edit</span> </div>
                </div>
                <div className="mt-5">
                  <div className="d-flex justify-content-between">
                    <h5 className="heading">Progress</h5>
                    <span></span>
                    <h5>15%</h5>
                  </div>
                    <div className="mt-3">
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: "15%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div className="mt-3"> <span className="text1">Days Left <span className="text2">5 Days</span></span> </div>
                    </div>
                </div>
            </div>
        </div>

        <div class=" col-lg-4 col-md-6 col-sm-12">
          <div class="card p-3 mb-2">
              <div class="d-flex justify-content-between">
                  <div class="d-flex flex-row align-items-center">
                      <div class="icon">  <i class="fas fa-swimmer"></i></div>
                      <div class="ms-2 c-details">
                          <h6 class="mb-0">Bicycling</h6> <span>1 days ago</span>
                      </div>
                  </div>
                  <div class="badge"> <span>Edit</span> </div>
              </div>
              <div class="mt-5">
                <div class="d-flex justify-content-between"> 
                  <h5 class="heading">Progress</h5>
                  <span></span>
                  <h5>100%</h5>
                </div>
                  <div class="mt-3">
                      <div class="progress">
                          <div class="progress-bar" role="progressbar" style={{width: "100%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <div class="mt-3"> <span class="text1">Days Left <span class="text2">5 Days</span></span> </div>
                  </div>
              </div>
          </div>
      </div>

      
                
               


            </div>
        </div>

        </div>

      </section>
        </div>
    )
}

export default pendingtask
