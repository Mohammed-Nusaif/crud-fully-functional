import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { mycrud } from '../../App'
import axios from 'axios'

function Delete() {
    const [data,setdata] = useContext(mycrud)
    const nav =  useNavigate()

    const {user} = useParams()
    async function deletedata(){
        const response = await axios.get(`http://localhost:4000/deletecrud/${user}`);
        const deleted = data.filter((del,i)=>i != user)
        setdata(deleted)
        nav("/")
    }
  return (
    <div>
         <h1>Are you sure you want to delete?</h1>
            <Button onClick={()=> nav(-1)}> Cancel</Button>
            <Button onClick={deletedata}> Delete</Button>
    </div>
  )
}

export default Delete