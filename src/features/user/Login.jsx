import { useFormik } from 'formik'
import React from 'react'
import { useLazyLoginQuery, useLoginMutation } from '../../services/auth.service'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from './loginSlice';

function Login() {
    var [loginFn]=useLoginMutation();
    var navigate = useNavigate();
    var dispatch = useDispatch()
    var loginForm = useFormik({
        initialValues:{
            username:"",
            password:""
        },
        onSubmit:(values)=>{
            loginFn(values).then((res)=>{
                window.localStorage.setItem("token",res.data.token)
                window.localStorage.setItem("role",res.data.role)
                window.localStorage.setItem("username",res.data.username)
                window.localStorage.setItem("id",res.data.id)
                dispatch(setUser(res.data))
                navigate("/dashboard")
            })
        }
    })
  return (
    <div className='d-flex justify-content-center align-center' style={{maxHeight:'800px'}}  >
        <div style={{width:'30%', margin:'20px', alignItems:'center'}} >
            <form onSubmit={loginForm.handleSubmit} style={{border:'2px solid',borderRadius:'10px', margin:'10px', padding:'20px', backgroundColor:'#fff'}}>
                <div class="mb-3">
                    <label for="UserName" class="form-label">UserName</label>
                    <input type="text" class="form-control" id="UserName" {...loginForm.getFieldProps('username')}/>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" {...loginForm.getFieldProps('password')}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        
    </div>
  )
}

export default Login