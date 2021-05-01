import React, { Component } from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
} from 'reactstrap'
import { Link } from 'react-router-dom';


// Validation in Redux or React? - I left this in case it's useful. - TH
const required = (val) => val && val.length // Makes sure there IS a val, and that .length > 0
const maxLength = (len) => (val) => !val || val.length <= len // function in a function
const minLength = (len) => (val) => val && val.length >= len //
const isNumber = (val) => !isNaN(+val) // +val changes string to number
const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val)

class Contact extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      subject: '',
      phoneNum: '',
      email: '',
      agree: false,
      contactType: 'By Phone',
      feedback: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  validate(yourName, subject, phoneNum, email) {
    const errors = {
      yourName: '',
      subject: '',
      phoneNum: '',
      email: '',
    }

    if (this.state.touched.yourName) {
      if (yourName.length < 2) {
        errors.yourName = 'Your name must be at least 2 characters.'
      } else if (yourName.length > 15) {
        errors.yourName = 'Your name must be 15 or less characters.'
      }
    }

    if (this.state.touched.subject) {
      if (subject.length < 2) {
        errors.subject = 'Subject must be at least 2 characters.'
      } else if (subject.length > 15) {
        errors.subject = 'Subject must be 15 or less characters.'
      }
    }

    const reg = /^\d+$/
    if (this.state.touched.phoneNum && !reg.test(phoneNum)) {
      errors.phoneNum = 'The phone number should contain only numbers.'
    }

    if (this.state.touched.email && !email.includes('@')) {
      errors.email = 'Email should contain a @'
    }

    return errors
  }

  handleInputChange(event) {
    const target = event.target
    const name = target.name
    const value = target.type === 'checkbox' ? target.checked : target.value

    this.setState({
      [name]: value,
    })
  }

  handleSubmit(event) {
    console.log('Current state is: ' + JSON.stringify(this.state))
    alert('Current state is: ' + JSON.stringify(this.state))
    event.preventDefault()
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to='/home'>Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>Contact Us</BreadcrumbItem>
            </Breadcrumb>
            <hr />
          </div>
        </div>
        <div className='row row-content align-items-center'>
          <div style={{ color: 'gray' }} className='text-align-center'>
            <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              dignissimos iusto dicta eveniet debitis odio, fugit porro dolorum
              fugiat excepturi ratione sapiente id quibusdam temporibus numquam
              commodi. Neque consectetur ut, quis accusamus alias optio
              praesentium. Quisquam quos dicta voluptate suscipit quod maxime
              maiores officia facere, totam asperiores aliquam explicabo sed!{' '}
            </h3>
          </div>
          <div className='col align-item-center '>
            <p style={{ color: 'grey' }}>
              {' '}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
              dolore atque ratione architecto voluptatum iste porro cumque
              minima nisi sunt, et vero quibusdam esse id enim, illo autem
              dolorem. Unde.{' '}
            </p>
          </div>
        </div>
        <div>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup row>
              <Label htmlFor='yourName' md={2}>
                Your Name
              </Label>
              <Col md={10}>
                <Input
                  type='text'
                  id='yourName'
                  name='yourName'
                  placeholder='Your Name'
                  value={this.state.yourName}
                  onChange={this.handleInputChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor='phoneNum' md={2}>
                Phone
              </Label>
              <Col md={10}>
                <Input
                  type='tel'
                  id='phoneNum'
                  name='phoneNum'
                  placeholder='Phone number'
                  value={this.state.phoneNum}
                  onChange={this.handleInputChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor='email' md={2}>
                Your Email
              </Label>
              <Col md={10}>
                <Input
                  type='email'
                  id='email'
                  name='email'
                  placeholder='Your Email'
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor='subject' md={2}>
                Subject
              </Label>
              <Col md={10}>
                <Input
                  type='text'
                  id='subject'
                  name='subject'
                  placeholder='Subject'
                  value={this.state.subject}
                  onChange={this.handleInputChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md={{ size: 4, offset: 2 }}>
                <FormGroup check>
                  <Label check>
                    <Input
                      type='checkbox'
                      name='agree'
                      checked={this.state.agree}
                      onChange={this.handleInputChange}
                    />{' '}
                    <strong>Contact Method</strong>
                  </Label>
                </FormGroup>
              </Col>
              <Col md={4}>
                <Input
                  type='select'
                  name='contactType'
                  value={this.state.contactType}
                  onChange={this.handleInputChange}
                >
                  <option>By Phone</option>
                  <option>By Email</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor='feedback' md={2}>
                Your Message
              </Label>
              <Col md={10}>
                <Input
                  type='textarea'
                  id='feedback'
                  name='feedback'
                  rows='8'
                  value={this.state.feedback}
                  onChange={this.handleInputChange}
                ></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md={{ size: 10, offset: 2 }}>
                <Button type='submit' color='success'>
                  Submit
                </Button>
              </Col>
            </FormGroup>
          </Form>
          <hr />
          <div className='col-md-10'>
            <div className='row row-content align-items-center'>
              <div className='col-sm-4'>
                <h5>Address</h5>
                <address>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque, tempore!
                </address>
              </div>
              <div className='col'>
                <a
                  role='button'
                  className='btn btn-link'
                  href='tel:+12065551234'
                >
                  <i className='fa fa-phone' /> 1-123-123-1234
                </a>
                <br />
                <a
                  role='button'
                  className='btn btn-link'
                  href='mailto:fakeemail@fakeemail.co'
                >
                  <i className='fa fa-envelope-o' /> ha@nerdvana.co
                </a>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    )
  }
}

export default Contact
