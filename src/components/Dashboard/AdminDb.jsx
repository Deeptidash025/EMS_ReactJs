import React from 'react'
import Header from '../other/Header.jsx'
import CreateTask from '../other/Createtask.jsx'
import AllTask from '../other/Alltask.jsx'

const AdminDashboard = (props) => {
    return (
        <div className='h-screen w-full p-7'>
            <Header changeUser={props.changeUser} />
            <CreateTask />
            <AllTask />
        </div>
    )
}

export default AdminDashboard