import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { logout } from '../user/loginSlice'
import { clearCart } from './cartSlice'

function Home() {
    var {isLoggedIn} = useSelector(state=>state.auth)
    var { cartItems } = useSelector(state=>state.cart)

    var navigate=useNavigate()
    var dispatch = useDispatch()
    function userLogout(){
        dispatch(clearCart())
        dispatch(logout());
        navigate("/")
    }
  return (
    <div  style={{background:'#E7F0DC', height:"100vh"}}>
        <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-light  p-3" style={{backgroundColor:'#FFA500 ',display:'flex', justifyContent:'center', alignItems:'center', height:'70px'}} >
                <img src='https://media.licdn.com/dms/image/C5103AQFHq9UJIzhVdQ/profile-displayphoto-shrink_200_200/0/1559132524083?e=2147483647&v=beta&t=fY8LdX89rLfEiH52sqJZTimfyifhsJ8gbve1POC2Or8'style={{width:'50px', height:'50px', padding:'5px'}}  />
                <Link class="navbar-brand" to="/">ConSmart</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/dashboard">Home</Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Aboutus</a>
                        </li>
                                
                </ul>
                </div>
                <div class="nav-item" style={{display:'flex', justifyContent:'flex-end', alignContent:'flex-end', }}>
                    <b class="nav-item" style={{padding:'5px', background:'whitesmoke', marginRight:'4px', borderRadius:'5px'}}>
                        <Link class="nav-link" to="/cart" >
                        <i class="bi bi-cart"></i>
                            Cart
                            <span class="badge text-bg-secondary" style={{margin:'5px'}}>{cartItems.length}</span>
                        </Link>
                    </b>
                    {isLoggedIn && (<button className="btn btn-info" onClick={()=>{userLogout()}}>
                                        <i class="bi bi-box-arrow-in-left"></i>
                                            Logout
                                    </button>
                                                
                    )}
                    {!isLoggedIn && (<Link to="/login" className="btn btn-success" href="#">
                                         <i class="bi bi-box-arrow-in-right"></i>
                                            Login
                                    </Link>
                    )}
                                
                </div>
            </nav>        
            <Outlet></Outlet>
         </div>
    </div>

  )
}

export default Home
