import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { mycrud } from "../../App";
import axios from "axios";

function Create() {
  const navigate = useNavigate();
  const [data, setData] = useContext(mycrud);


  const [input, setInput] = useState({
    Name: "",
    Email: "",
    Mobile: "",
    Hobby: "",
  });

  async function createItem(event) {
    event.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:4000/createcrud', input);
      
      const newdata=response.data
      console.log(newdata);
      setData([...data, newdata]);
      navigate(-1);
    } catch (error) {
      console.error('Error creating item:', error);
    }
  }

  function handleChange(event) {
    setInput({ ...input, [event.target.name]: event.target.value });
  }

  return (
    <div>
      <Form onSubmit={createItem}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Control
            type="text"
            placeholder="Full Name"
            name="Name"
            value={input.Name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Email"
            name="Email"
            value={input.Email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="number"
            placeholder="Mobile"
            name="Mobile"
            value={input.Mobile}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="text"
            placeholder="Hobby"
            name="Hobby"
            value={input.Hobby}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add item
        </Button>
      </Form>
    </div>
  );
}

export default Create;
