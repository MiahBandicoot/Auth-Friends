import React, {useState, useEffect} from 'react'
import {axiosWithAuth} from './utils/axiosWithAuth'

const initial = {
    name:'',
    age:'',
    email:'',
}

const Friends = () =>{
    const [data, setData] = useState(initial)
    const [friend, setFriend] = useState([])

    const post = (friend) => {
        axiosWithAuth()
        .post('/api/friends', friend)
        .then(res => {
            console.log(res)
        })
        .catch(error => {
           console.log(error) 
        })
        
    }

    const handleC = (event) =>{
        event.preventDefault();
        setData({
            ...data,
            [event.target.name]:event.target.value
        })
    }

    const Submit = (event) => {
        event.preventDefault()
        const newfriend = {
            name: data.name.trim(),
            age: data.age.trim(),
            email: data.email.trim(),
        }
        post(newfriend)
        setData(initial)
    }

    useEffect(()=>{
        axiosWithAuth()
        .get('/api/friends')
        .then(res =>{
            console.log(res)
            setFriend(res.data)
        })
        .catch(error =>{
            console.log(error)
        })
    },[data===initial])
    return (
        <div>
        <form onSubmit = {Submit}>
            <input
            name = 'name'
            type = 'text'
            value = {data.name}
            onChange = {handleC}
            />
            <input
            name = 'age'
            type = 'text'
            value = {data.age}
            onChange = {handleC}
            />
            <input
            name = 'email'
            type = 'email'
            value = {data.email}
            onChange = {handleC}
            />
            <button onClick = {Submit}>Submit</button>
        </form>

            <div>
                {friend.map((item) => {
                    return (
                    <h2>{item.name}</h2>
                    )
                })}
            </div>
        </div>
    )

}

export default Friends