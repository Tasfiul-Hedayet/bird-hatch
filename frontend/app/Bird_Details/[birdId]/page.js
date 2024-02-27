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
        <form>
          <label>Name:</label>
          <p>{valForm?.name}</p>

          <label>Species:</label>
          <p>{valForm?.species}</p>

          <label>Breed:</label>
          <p>{valForm?.breed}</p>

          {/* <label>Status:</label>
          <p>{valForm?.status}</p> */}

          <label>Sex:</label>
          <p>{valForm?.sex}</p>

          <label>Breeder:</label>
          <p>{valForm?.breeder}</p>

          <label>Owner:</label>
          <p>{valForm?.owner}</p>

          <label>Cock Parent:</label>
          <p>{valForm?.cockParent}</p>

          <label>Hen Parent:</label>
          <p>{valForm?.henParent}</p>

          <label>Hatch Batch:</label>
          <p>{valForm?.hatchBatch}</p>

          <label>Sold Date:</label>
          <p>{valForm?.sold}</p>


          <label>Deceased Date:</label>
          <p>{valForm?.deceased}</p>

          <label>HatchDate</label>
          <p>{valForm?.hatch_date}</p>

          <label>Location</label>
          <p>{valForm?.location}</p>


          <label>Color</label>
          <p>{valForm?.color}</p>

          <label>Health Event Input:</label>
          <p>{valForm?.healthEventInput}</p>

          <div>
            {healthEventsArr.map((event, index) => (
              <div key={index}>{event}</div>
            ))}
          </div>

          <label>Show Placing</label>
          <p></p>
          <input
            type="text"
            name="showPlacing"
            // value={bird?.showPlacing}
            // onChange={handleInputChange}
          />



          <label>Leg Tag</label>
          <p></p>


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
