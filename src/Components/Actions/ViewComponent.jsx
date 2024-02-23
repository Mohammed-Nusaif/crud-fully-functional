import React, { useContext, useEffect, useState } from "react";
import { mycrud } from "../../App";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function ViewComponent() {
  const [data, setData] = useContext(mycrud);
  const [loading, setLoading] = useState(true);
  const nav = useNavigate();
  const { _id } = useParams(); // Retrieve _id parameter from URL
  console.log(data);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/viewcrud/${_id}`); // Fetch specific item based on _id
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    return () => {
      // Cleanup function
    };
  }, [_id]); // Execute useEffect when _id changes

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data && (
        <div className="view">
          <div className="card">
            <h3>Name: {data.name}</h3>
            <h3>Email: {data.Email}</h3>
            <h3>Mobile: {data.Mobile}</h3>
            <h3>Hobby: {data.Hobby}</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default ViewComponent;
