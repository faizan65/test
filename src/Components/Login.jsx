import React,{useState} from 'react'



const Login = () => {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");



    return (
        <div>

           
                   
                 
                   <section className="form-3">
                <div class="container">
                    <div class="row">

                        <div class="col-md-6 col-sm-12 pic-sec">

                        </div>
                        <div class="col-md-6 col-sm-12 col-2-login ">
                            <img src="./schrimer-removebg-preview.png" style={{ width: "220px" }} alt="" />
                            <h4>Log in</h4>
                            <form>

                                <div class="form-group">
                                    <label htmlFor="Password">Email</label>
                                    <input   type="email" class="form-control" id="Email" placeholder="E-mail" autoComplete="off" required/>
                                </div>
                                <div class="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input  type="password" class="form-control" id="password" placeholder="Password" autoComplete="off" required/>
                                </div>
                                <button type="submit" class="btn">Log in</button> 
                            </form>

                        </div>
                    </div>
                </div>
                     </section>
                   
           

        </div>
    )
}

export default Login
