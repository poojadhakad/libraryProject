import React from "react"
import Layout from "../component/layout"
const Feedback = () => {
  return (
    <>
 <Layout>
  <div class="container">
<h1>Feedback Form</h1>
<div class="mb-3">
      <input type="text" class="form-control" placeholder="Name"/>
    </div>
<div class="mb-3">
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email"/>
</div>
<div class="mb-3">
      <input type="text" class="form-control" placeholder="Banasthali ID"/>
    </div>
<div class="mb-3">
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
</div>
<button type="submit" class="btn btn-primary">Submit</button>
</div>
      </Layout>
    </>
  )
}
export default Feedback