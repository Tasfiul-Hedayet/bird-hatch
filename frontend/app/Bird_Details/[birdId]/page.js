"use client"
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { data } from "autoprefixer";
function Page() {
  const params = useParams();
  const [valForm, setValForm] = useState({});
  const [healthEventsArr, sethealtheventsArr] = useState([]);
  const [healtheventInput, setHealthEventInput] = useState('')

  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_ORIGIN}/api/v1/birds/getAbird/${params.birdId}`)
        const data = response.data.data.bird;
        setValForm(data);
        sethealtheventsArr(data.healthEvents)
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValForm({ ...valForm, [name]: value });
  };

  let healthEventInput = '';

  const addHealthEvent = () => {
   
  };
    const handleSubmitForm = async (e) => {
        e.preventDefault();
       
    
    
        const form = new FormData();
        form.append('name', name);
        form.append('breed', breed);
        form.append('breeder', breeder);
        form.append('cockParent', cockParent);
        form.append('color', color);
        form.append('deceased', deceased);
        form.append('hatchBatch', hatchBatch);
        form.append('hatch_date', hatch_date);
        healthEventsArr.forEach((event, index) => {
          form.append(`healthEvents[${index}]`, event);
        });
        form.append('henParent', henParent);
        form.append('location', location);
        form.append('owner', owner);
        form.append('sex', sex);
        form.append('showPlacing', showPlacing);
        form.append('sold', sold);
        form.append('species', species);
        form.append('weights_id', Number(selectedWeight));
    
        console.log('Bird object:', ...form);
        try {
          const request = await axios.patch(`${process.env.NEXT_PUBLIC_ORIGIN}/api/v1/birds/${params.birdId}`, form, {
            headers: {
              'Content-Type': 'multipart/form-data',
            }
          });
          console.log(request.data.data);  // Log the response data if needed
          } catch (error) {
            console.error('Error creating bird:', error);
          }
        }
  return (
    <>
      <div className="body">
        <Navbar />
        <h1>Bird Details</h1>
        <form onSubmit={handleSubmitForm}>
          <label>Name:</label>
          <input
            className="pr-500"
            type="text"
            name="name"
            value={valForm?.name}
            onChange={handleInputChange}
          />

          <label>Species:</label>
          <input
            type="text"
            name="species"
            value={valForm?.species}
            onChange={handleInputChange}
          />

          <label>Breed:</label>
          <input
            type="text"
            name="breed"
            value={valForm?.breed}
            onChange={handleInputChange}
          />

          {/* <label>Status:</label>
          <input
            type="text"
            value={valForm?.status}
            onChange={(e) => setStatus(e.target.value)}
          /> */}

          <label>Sex:</label>
          <input
            type="text"
            name="sex"
            value={valForm?.sex}
            onChange={handleInputChange}
          />

          <label>Breeder:</label>
          <input
            type="text"
            name="breeder"
            value={valForm?.breeder}
            onChange={handleInputChange}
          />

          <label>Owner:</label>
          <input
            type="text"
            name="owner"
            value={valForm?.owner}
            onChange={handleInputChange}
          />

          <label>Cock Parent:</label>
          <input
            type="text"
            name="cockParent"
            // value={valForm?.cockParent}
            // onChange={handleInputChange}
          />

          <label>Hen Parent:</label>
          <input
            type="text"
            name="henParent"
            value={valForm?.henParent}
            onChange={handleInputChange}
          />

          <label>Hatch Batch:</label>
          <input
            type="text"
            name="hatchBatch"
            value={valForm?.hatchBatch}
            onChange={handleInputChange}
          />

          <label>Sold:</label>
          <input
            type="date"
            name="sold"
            value={valForm?.sold}
            onChange={handleInputChange}
          />

          <label>Deceased:</label>
          <input
            type="date"
            name="deceased"
            value={valForm?.deceased}
            onChange={handleInputChange}
          />

          <label>HatchDate</label>
          <input
            type="date"
            name="hatch_date"
            value={valForm?.hatch_date}
            onChange={handleInputChange}
          />

          <label>Location</label>
          <input
            type="text"
            name="location"
            value={valForm?.location}
            onChange={handleInputChange}
          />

          <label>Color</label>
          <input
            type="text"
            name="color"
            value={valForm?.color}
            onChange={handleInputChange}
          />

          <label>Health Event Input:</label>
          <input
            type="text"
            name="healthEventInput"
            value={valForm?.healthEventInput}
            onChange={handleInputChange}
          />
          <button
            className="health-add-button"
            type="button"
            name="healthEventInput"
            onClick={addHealthEvent}
          >
            Add Event
          </button>
          <button
            className="health-add-button"
            type="button"
            // onClick={clearhealthInput}
          >
            Clear
          </button>

          <div>
            {healthEventsArr.map((event, index) => (
              <div key={index}>{event}</div>
            ))}
          </div>

          <label>Show Placing</label>
          <input
            type="text"
            name="showPlacing"
            // value={bird?.showPlacing}
            // onChange={handleInputChange}
          />



          <label>Leg Tag</label>
          <select
            id="weight"
            name="leg_tag"
            // value={bird?.leg_tag}
            // onChange={handleWeightChange}
            required
          >
            <option value="">Leg Tag</option>
            {/* {allWeights &&
              allWeights.map((weight, index) => {
                return (
                  <option key={weight?.weight_id} value={weight?.weight_id}>
                    {weight?.leg_tag}
                  </option>
                );
              })} */}
          </select>
          <button className="Submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Page;
