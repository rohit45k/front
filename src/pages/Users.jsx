import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import User from '../components/User';

const USERS_DATA = [
    {
        id: 1,
        name: 'Mark Woods',
        dob: '23/08/2023',
        email: 'admin@abcd.com',
        password: 'Active123',
    },
    {
        id: 2,
        name: 'Mark Woods',
        dob: '23/08/2023',
        email: 'admin@abcd.com',
        password: 'Active123',
    },
    {
        id: 3,
        name: 'Mark Woods',
        dob: '23/08/2023',
        email: 'admin@abcd.com',
        password: 'Active123',
    },
    {
        id: 4,
        name: 'Mark Woods',
        dob: '23/08/2023',
        email: 'admin@abcd.com',
        password: 'Active123',
    },
]

const Users = () => {

  const navigate = useNavigate()

    useEffect(() => {
        const user = localStorage.getItem('user')
        if(!user) {
          navigate('/')
        }
      }, [navigate])

    return (
        <div>
            <h1 className="text-center py-4">List of Users</h1>
            <Table hover className='container'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Date of Birth</th>
                        <th>Password</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        USERS_DATA.map((user, index) => <User key={user.id} user={user} index={index} />)
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Users