"use client";
import Navbar from "@/components/Navbar";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

function Page() {
  const [legTag, setLegTag] = useState(""); // legtag
  const [date, setDate] = useState(""); // date
  const [weight, setWeight] = useState(""); // weight
  //   const [weightcrd, setweightCRD] = useState(""); //Object

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can use the form values as needed, e.g., send them to a server or perform calculations.
    // For simplicity, let's just log the values to the console for now.
    console.log({
      legTag,
      date,
      weight,
    });
  };

  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {

    try {
      const response = await axios.get('http://localhost:8000/api/v1/weights/getAllWeights');
      const data =  await response.data.data;
      console.log(data);
      // response.status(200).json(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      // response.status(500).json({ error: 'Internal Server Error' });
    }
  };
    fetchData();
  }, []);

  return (
    <>
      <div className="body">
        <Navbar />
        <h1>Hatch</h1>
        <form onSubmit={handleSubmit}>
          <label>Leg Tag:</label>
          <input
            type="text"
            value={legTag}
            onChange={(e) => setLegTag(e.target.value)}
          />
          <label>Date:</label>
          <input
            type="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <label>Weight:</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <button className="Submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Page;
