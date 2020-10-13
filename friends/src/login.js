import React, {useState} from 'react'
import {axiosWithAuth} from './utils/axiosWithAuth'
import {useHistory} from 'react-router-dom'

const initial = {
    username: '',
    password: '',
}

const Login = () => {
    const [data, setData] = useState(initial)

    const history = useHistory()

    const handleC = (event) =>{
        event.preventDefault();
        setData({
            ...data,
            [event.target.name]:event.target.value
        })
    }

    const Submit = (event) =>{
        event.preventDefault()
        axiosWithAuth()
        .post('/api/login', data)
        .then(res =>{
            localStorage.setItem('token',res.data.payload)
            console.log()
            history.push('/protected')
        })
        .catch(error => {
            console.log(error)
        })
            
    }
    
    return( 
        <form onSubmit = {Submit}>
            <input
            name = 'username'
            type = 'text'
            value = {data.username}
            onChange = {handleC}
            />
            <input
            name = 'password'
            type = 'password'
            value = {data.password}
            onChange = {handleC}
            />
            <button onClick = {Submit}>Submit</button>
        </form>
    )    
}

export default Login
