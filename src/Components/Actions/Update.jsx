import React, { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom';
import { mycrud } from '../../App';
import axios from 'axios';

function Update() {
    const navigate = useNavigate();
    const [data, setData] = useContext(mycrud);
    const { user, } = useParams();
    console.log(data);


    const toedit = data[user] || {};
    const initialInput = {
        Name: toedit?.Name || "",
        Email: toedit?.Email || "",
        Mobile: toedit?.Mobile || "",
        Hobby: toedit?.Hobby || ""
    };

    const [input, setInput] = useState(initialInput);

    async function UpdateItem(event,_id) {
        event.preventDefault();
        try {
            const response = await axios.put(`http://localhost:4000/updatecrud/${_id}`, input);
    
            setData(prevData => {
                const newData = [...prevData];
                newData[user] = { ...input }; 
                return newData;
            });
            navigate("/");
        } catch (error) {
            console.error("not updated:", error);
        }
    }
    
    function handleUpdate(event) {
        setInput({ ...input, [event.target.name]: event.target.value });
    }

    return (
        <div>
            <Form onSubmit={UpdateItem}>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Control
                        type="text"
                        placeholder="Name"
                        name="Name"
                        value={input.Name}
                        onChange={handleUpdate}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                        type="email"
                        placeholder="Email"
                        name="Email"
                        value={input.Email}
                        onChange={handleUpdate}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control
                        type="number"
                        placeholder="Mobile"
                        name="Mobile"
                        value={input.Mobile}
                        onChange={handleUpdate}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                        type="text"
                        placeholder="Hobby"
                        name="Hobby"
                        value={input.Hobby}
                        onChange={handleUpdate}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Update Item
                </Button>
            </Form>
        </div>
    )
}

export default Update
