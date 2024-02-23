import React, { useContext, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { mycrud } from "../App";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Crud1() {
  const [data, setData] = useContext(mycrud);

  useEffect(() => {
    let isMounted = true; // Flag to track component mount status

    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/viewitems');
        if (isMounted) {
          setData(response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Fetch data when component mounts

    return () => {
      isMounted = false; // Set flag to false when component unmounts
    };
  }, []); // 

  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>serial no</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Hobby</th>
            <th>Action</th>
          </tr>
        </thead>

        {data.map((display, _id) => 
          <>
            <tbody>
              <tr key={_id}>
                <td>{_id+1}</td>
                <td>
                  <h6>{display.Name}</h6>
                </td>
                <td>
                  <h6>{display.Email}</h6>
                </td>
                <td>
                  <h6>{display.Mobile}</h6>
                </td>
                <td>
                  <h6>{display._id}</h6>

              
                </td>
                <td>
                  <div>
                    <Link to={`/update/${_id}`}> 
                        <Button variant="success" style={{ marginLeft: "10px" }}  >
                          Update
                        </Button>
                    </Link>
                    
                    <Link to={`/viewpage/${_id}`}>
                      <Button variant="warning" style={{ marginLeft: "10px" }}>
                          {" "}
                          View
                        </Button>
                    </Link>
                    
                    <Link to={`/Delete/${_id}`}>
                      <Button variant="danger" style={{ marginLeft: "10px" }}>
                        Delete
                      </Button>
                    </Link>
                  </div>
                </td>
              </tr>
            </tbody>
          </>
        )}
        <Link to={"/create"}>
          <Button variant="primary"> Add item</Button>
        </Link>
      </Table>
    </div>
  );
}

export default Crud1;
