import React, { useEffect, useState, useContext } from 'react'
import { Col, Row, Form, Button, Table } from 'react-bootstrap';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const ContactForm = () => {
 //Initial State
 const initialState = {
  fullname: '',
  email: '',
  mobile: '',
 }
 const[values, setValues] = useState(initialState);
 return (
  <>
  <Row className="py-4" >
   <Col md={6} className="mx-auto">
    <h2 className="text-center">Firebase Form</h2>
    <Form>
     <Form.Group controlId="formBasicEmail">
      <Form.Label>Full Name</Form.Label>
      <Form.Control 
       type="email"
       placeholder="Enter email" 
       name="fullname"
       // value={values.fullname}
       />
     </Form.Group>
     <Form.Group>
      <Form.Label>Email Address</Form.Label>
      <Form.Control 
       type="email"
       name="email"
       onChange={onChangeHandler}
       value={values.email}
      />
     </Form.Group>
     <Form.Group>
      <Form.Label>Mobile Number</Form.Label>
      <Form.Control
       name="mobile"
       onChange={onChangeHandler}
       value={values.mobile}
      />
     </Form.Group>

     <Button variant="info" type="submit">
      Submit
  </Button>
    </Form>
   </Col>
  </Row>
  <Row>
  <Col md={8} className="mx-auto">
    <h2 className="text-center">Firebase data</h2>
    <Table striped hover>
     <thead>
      <tr>
       <th>Full Name</th>
       <th>Email</th>
       <th>Mobile</th>
       <th>Action</th>
      </tr>
     </thead>
     <tbody>
      <tr>
       <td>1</td>
       <td>Mark</td>
       <td>Otto</td>
       <td style={{ display: 'flex', width: '70px', justifyContent: 'space-between' }}>
        <Link to=""><FaPencilAlt /></Link>
        <Link to=""><FaTrash /></Link>
       </td>
      </tr>
     </tbody>
    </Table>
   </Col>
  </Row>
  </>
 )
}

export default ContactForm
