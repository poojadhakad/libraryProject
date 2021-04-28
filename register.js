import React from "react"
import Layout from "../component/layout"
import"../component/styling.scss"
const Register = () => {
    return(
<>
<Layout>
<form>
  <div className ="container ">
  <h1>Sign Up</h1>
  <h6>Please fill in this form to create account! </h6>
  <div class="form-row">
    <div class="col">
      <input type="text" class="form-control" placeholder="First name"/>
    </div>
    <div class="col mb-3">
      <input type="text" class="form-control" placeholder="Last name"/>
    </div>
  </div>

  <div class="mb-3">
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div class="mb-3">
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="password"/>
  </div>

  <div class="mb-3">
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Confirm Password"/>
  </div>

  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
  </div>
  <button type="submit" class="btn btn-primary">Sign Up</button>
  </div>
</form>

</Layout>
</>
    )
}

export default Register; 