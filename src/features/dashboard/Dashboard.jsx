import React from 'react'
import { useSelector } from 'react-redux'
import AgentDashboard from './AgentDashboard'
import ManagerDashboard from './ManagerDashboard'

function Dashboard() {
    var {role}=useSelector(state=>state.auth)
    return (
        <div>
            {role==='agent' && <AgentDashboard></AgentDashboard>}
            {role==='manager' && <ManagerDashboard></ManagerDashboard>}
        </div>
    )
}

export default Dashboard