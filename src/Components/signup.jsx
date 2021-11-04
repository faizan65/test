import React from 'react'

import "./signup.css"


const Signup = () => {
    return (
        <div>


                   
                   <section className="form-3">
                <div className="container">
                    <div className="row">

                        <div className="col-md-7 pic-sec">
    

                        </div>
                        <div className="col-md-5 col-sm-12 col-xs-12 col-2-sign">
                            <img src="./schrimer-removebg-preview.png" style={{ width: "220px" }} alt="" />

                            <h4>Sign up</h4>
                            <form>
                                <div className="form-group">
                                    <label for="Name">Name</label>
                                    <input type="text" className="form-control" id="Name" placeholder="Name" required />
                                </div>
                                <div className="form-group">
                                    <label for="Email">Email</label>
                                    <input type="email" className="form-control" id="Email" placeholder="E-mail" required />
                                </div>
                                <div className="form-group">
                                    <label for="password">Password</label>
                                    <input type="password" className="form-control" id="password" placeholder="Password" required />
                                </div>
                                <div className="form-group">
                                    <label for="confirm-password">confirm Password</label>
                                    <input type="password" className="form-control" id="confirm-password" placeholder="confirm password" required />
                                </div>
                              <button  type="submit" className="btn ">Sign up </button> 
                            </form>

                        </div>
                    </div>
                </div>
            </section>
                   

                   

               

           
        </div>
    )
}

export default Signup;