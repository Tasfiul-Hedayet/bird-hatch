"use client";
import Navbar from "@/components/Navbar";
import WeightList from "@/components/weight-list";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

function Page() {
  
  const initialState = {
    leg_tag: '',
    Date: '',
    Weight: ''
  }
  
  const [weight, setWeight] = useState(initialState);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
      setWeight((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const { Date, Weight, leg_tag } = weight;


  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();

    form.append('leg_tag', leg_tag);
    form.append('Weight', Weight);
    form.append('Date', Date);

    // console.log('Weight Form: ', ...form);

    try {
      const request = await axios.post(`${process.env.NEXT_PUBLIC_ORIGIN}/api/v1/weights/createWeight`, form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });


      // console.log('Success');
      alert(`Weight with 'Leg Tag: ${leg_tag}' was created!`)
    } catch (error) {
      // console.error('Error creating weight:', error);
      alert(error.response.data.error);
    }

  }

  return (
    <>
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
            value={weight?.Date}
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
        <WeightList />
      </div>
    </>
  );
}

export default Page;
