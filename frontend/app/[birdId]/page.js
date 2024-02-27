"use client"
import Navbar from "@/components/Navbar";
import React from "react";
function Page() {

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
        healthEventsArray.forEach((event, index) => {
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
          const request = await axios.post(`${process.env.NEXT_PUBLIC_ORIGIN}/api/v1/birds/createBird`, form, {
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
        <h1>Bird Edit</h1>
        <form onSubmit={handleSubmitForm}>
          <label>Name:</label>
          <input
            className="pr-500"
            type="text"
            name="name"
            // value={bird?.name}
            // onChange={handleInputChange}
          />

          <label>Species:</label>
          <input
            type="text"
            name="species"
            // value={bird?.species}
            // onChange={handleInputChange}
          />

          <label>Breed:</label>
          <input
            type="text"
            name="breed"
            // value={bird?.breed}
            // onChange={handleInputChange}
          />

          {/* <label>Status:</label>
          <input
            type="text"
            value={bird?.status}
            onChange={(e) => setStatus(e.target.value)}
          /> */}

          <label>Sex:</label>
          <input
            type="text"
            name="sex"
            // value={bird?.sex}
            // onChange={handleInputChange}
          />

          <label>Breeder:</label>
          <input
            type="text"
            name="breeder"
            // value={bird?.breeder}
            // onChange={handleInputChange}
          />

          <label>Owner:</label>
          <input
            type="text"
            name="owner"
            // value={bird?.owner}
            // onChange={handleInputChange}
          />

          <label>Cock Parent:</label>
          <input
            type="text"
            name="cockParent"
            // value={bird?.cockParent}
            // onChange={handleInputChange}
          />

          <label>Hen Parent:</label>
          <input
            type="text"
            name="henParent"
            // value={bird?.henParent}
            // onChange={handleInputChange}
          />

          <label>Hatch Batch:</label>
          <input
            type="text"
            name="hatchBatch"
            // value={bird?.hatchBatch}
            // onChange={handleInputChange}
          />

          <label>Sold:</label>
          <input
            type="date"
            name="sold"
            // value={bird?.sold}
            // onChange={handleInputChange}
          />

          <label>Deceased:</label>
          <input
            type="date"
            name="deceased"
            // value={bird?.deceased}
            // onChange={handleInputChange}
          />

          <label>HatchDate</label>
          <input
            type="date"
            name="hatch_date"
            // value={bird?.hatch_date}
            // onChange={handleInputChange}
          />

          <label>Location</label>
          <input
            type="text"
            name="location"
            // value={bird?.location}
            // onChange={handleInputChange}
          />

          <label>Color</label>
          <input
            type="text"
            name="color"
            // value={bird?.color}
            // onChange={handleInputChange}
          />

          <label>Health Event Input:</label>
          <input
            type="text"
            name="healthEventInput"
            // value={bird?.healthEventInput}
            // onChange={handleInputChange}
          />
          <button
            className="health-add-button"
            type="button"
            // onClick={addHealthEvent}
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

          {/* <div>
            {bird.healthEventsArray.map((event, index) => (
              <div key={index}>{event}</div>
            ))}
          </div> */}

          <label>Show Placing</label>
          <input
            type="text"
            name="showPlacing"
            // value={bird?.showPlacing}
            // onChange={handleInputChange}
          />

          {/* <label>Health Events:</label>
          <input
            type="text"
            value={bird?.healthEvents}
            onChange={(e) => setHealthEvents(e.target.value)}
          /> */}

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
