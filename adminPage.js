import React from "react"
import Layout from "../component/layout"
import { Button, Row, Col } from "react-bootstrap"
const AdminPage = () => {
  return (
    <>
      <Layout>
     <div className="col gap-3 p-3 mx-auto" style={{ width: '200px' }}>
        <h1 className="ml-auto">ADMIN PANEL</h1>
        <div className="col gap-3 p-2">
          <div className="row gap-3 p-2">
            <Button variant="outline-primary">Add Books</Button>
          </div>

          <div className="row gap-3 p-2">
            <Button variant="outline-primary">View Books</Button>
          </div>

          <div className="row gap-3 p-2">
            <Button variant="outline-primary">Issue Books</Button>
          </div>

          <div className="row gap-3 p-2">
            <Button variant="outline-primary">Return Books</Button>
          </div >
        </div>
        </div>

      </Layout>





    </>
  )
}
export default AdminPage



