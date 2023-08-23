import React, { useState } from 'react'
import {FaRegCalendar, FaUserAlt, FaLock} from 'react-icons/fa'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import Button from 'react-bootstrap/Button';
import CustomInput from './CustomInput'

const Register = ({setIsLogin}) => {

  const [userForm, setUserForm] = useState({
    name: '',
    dob: '',
    email: '',
    password: '',
  })

  const handleUserForm = (e) => {
    setUserForm((prevData) => {
      return {...prevData, [e.target.name]:[e.target.value]}
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userForm);
  }

  return (
    <form>
      <CustomInput icon={<FaUserAlt color='rgb(129, 139, 165)' />} name="name" id="name" type="text" value={userForm.name} onChange={handleUserForm} placeholder="name" />
      <CustomInput icon={<FaRegCalendar color='rgb(129, 139, 165)' />} name="dob" id="dob" type="date" value={userForm.dob} onChange={handleUserForm} placeholder="date of birth" />
      <CustomInput icon={<MdOutlineAlternateEmail color='rgb(129, 139, 165)' />} name="email" id="email" type="email" value={userForm.email} onChange={handleUserForm} placeholder="email" />
      <CustomInput icon={<FaLock color='rgb(129, 139, 165)' />} name="password" id="password" type="password" value={userForm.password} onChange={handleUserForm} placeholder="password" />
      <Button variant="info" size="lg" style={{width: '100%'}} onClick={handleSubmit} >Register</Button>
      <small onClick={() => setIsLogin(true)} className='text-light d-block text-center mt-1' role='button'>Don't have an account? Click here.</small>
    </form>
  )
}

export default Register