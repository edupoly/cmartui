import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { logout } from '../user/loginSlice'

function Home() {
    var {isLoggedIn} = useSelector(state=>state.auth)
    var navigate=useNavigate()
    var dispatch = useDispatch()
  return (
    <div className=" container ">
        <h1></h1>
        <nav class="navbar navbar-expand-lg navbar-light bg-lightp-3">
            <Link class="navbar-brand" to="/">ConSmart</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Aboutus</a>
                    </li>
                    <li class="nav-item">
                        {isLoggedIn && (<button className="btn btn-info" onClick={()=>{dispatch(logout());navigate("/")}}>Logout</button>)}
                        {!isLoggedIn && (<Link to="/login" className="btn btn-success" href="#">Login</Link>)}
                        
                        
                        
                    </li>
                </ul>
            </div>

            </nav>
            
            <Outlet></Outlet>
    </div>
  )
}

export default Home