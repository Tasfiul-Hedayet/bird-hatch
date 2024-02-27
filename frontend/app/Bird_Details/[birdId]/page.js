"use client"
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
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
      } catch (error) {
        alert(error)
        // console.log(error);
      }
    }
    fetchData();
  }, []);


    
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

          <label>Weight</label>
          <p>{valForm?.leg_tag?.Weight}</p>

          <label>Health Event Input:</label>
          <p>{valForm?.healthEventInput}</p>

          <div>
            {healthEventsArr.map((event, index) => (
              <p className="events" key={index}>{event}</p>
            ))}
          </div>

          <label>Show Placing</label>
          <p>{valForm?.showPlacing}</p>
          
          <label>Leg Tag</label>
          <p>{valForm?.leg_tag?.leg_tag}</p>
          

        </form>
      </div>
    </>
  );
}

export default Page;
