'use client';

import Navbar from "@/components/Navbar";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const UpdateWeight = () => {
  const params = useParams();
  const [weight, setWeight] = useState({});


  useEffect(() => {
    const fetchWeight = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_ORIGIN}/api/v1/weights/getSpecificWeight/${params.weightId}`
        );
        const data = response.data.data.weight;
        setWeight(data)
        // console.log(data);
      } catch (error) {
        alert("Error fetching data:");
        // console.error("Error fetching data:", error);
      }
    };
    fetchWeight();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
      setWeight((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const { Date, Weight, leg_tag } = weight;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();

    form.append('leg_tag', leg_tag);
    form.append('Weight', parseFloat(Weight));
    form.append('Date', Date);

    console.log('Weight Form: ', ...form);

    try {
      const request = await axios.patch(`${process.env.NEXT_PUBLIC_ORIGIN}/api/v1/weights/${params.weightId}`, form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });


      // console.log('Success');
      alert(`Weight with 'Leg Tag: ${leg_tag}' was updated!`)
    } catch (error) {
      // console.error('Error creating weight:', error);
      alert(error.response.data.error);
    }
  }

    return (
        <div className="body">
        <Navbar />
        <h1>Wright</h1>
        <form onSubmit={handleSubmit}>
          <label>Leg Tag:</label>
          <input
            type="text"
            name="leg_tag"
            value={weight?.leg_tag}
            onChange={handleInputChange}
          />
          <label>Date:</label>
          <input
            type="Date"
            name="Date"
            value={(weight?.Date && weight?.Date.split('T')[0]) || ''}
            onChange={handleInputChange}
          />

          <label>Weight:</label>
          <input
            type="number"
            name="Weight"
            value={weight?.Weight}
            onChange={handleInputChange}
          />
          <button className="Submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
}
 
export default UpdateWeight;