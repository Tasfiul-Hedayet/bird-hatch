"use client";

import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";

function Page() {
  const [hatchNumber, setHatchNumber] = useState(1); // Hatch Number (should increment)
  const [identification, setIdentification] = useState(""); // Identification
  const [speciesHatch, setSpeciesHatch] = useState(""); // Species
  const [breedHatch, setBreedHatch] = useState(""); // Breed
  const [cockIdentifier, setCockIdentifier] = useState(""); // Cock Identifier (cross reference to Bird Tracker Database)
  const [henIdentifier, setHenIdentifier] = useState(""); // Hen Identifier (cross reference to Bird Tracker Database)
  const [setDate, setSetDate] = useState(""); // Set (Date)
  const [lockdownDate, setLockdownDate] = useState(""); // Lockdown (date)
  const [hatchDate, setHatchDate] = useState(""); // Hatch (date)
  const [numberSet, setNumberSet] = useState(""); // # Set
  const [numberFertile, setNumberFertile] = useState(""); // # Fertile
  const [numberHatch, setNumberHatch] = useState(""); // # Hatch
  const [fertilityRate, setFertilityRate] = useState(0); // Fertility Rate (calculated field)
  const [hatchRate, setHatchRate] = useState(0); // Hatch Rate (calculated field)
  const [hatchabilityRate, setHatchabilityRate] = useState(0); // Hatchability Rate (calculated field)
  const [location, setLocation] = useState(""); // Location (free text)
  const [notes, setNotes] = useState(""); // Notes (free text)

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can use the form values as needed, e.g., send them to a server or perform calculations.
    // For simplicity, let's just log the values to the console for now.
    console.log({
      hatchNumber,
      identification,
      speciesHatch,
      breedHatch,
      cockIdentifier,
      henIdentifier,
      setDate,
      lockdownDate,
      hatchDate,
      numberSet,
      numberFertile,
      numberHatch,
      fertilityRate,
      hatchRate,
      hatchabilityRate,
      location,
      notes,
    });
  };

  return (
    <>
      <div className="body">
        <Navbar />
        <h1>Hatch</h1>

        <form onSubmit={handleSubmit}>
          <label>Hatch Number:</label>
          <input
            type="number"
            value={hatchNumber}
            onChange={(e) => setHatchNumber(e.target.value)}
          />

          <label>Identification:</label>
          <input
            type="text"
            value={identification}
            onChange={(e) => setIdentification(e.target.value)}
          />

          <label>Species:</label>
          <input
            type="text"
            value={speciesHatch}
            onChange={(e) => setSpeciesHatch(e.target.value)}
          />

          <label>Breed:</label>
          <input
            type="text"
            value={breedHatch}
            onChange={(e) => setBreedHatch(e.target.value)}
          />

          <label>Cock Identifier:</label>
          <input
            type="text"
            value={cockIdentifier}
            onChange={(e) => setCockIdentifier(e.target.value)}
          />

          <label>Hen Identifier:</label>
          <input
            type="text"
            value={henIdentifier}
            onChange={(e) => setHenIdentifier(e.target.value)}
          />

          <label>Set (Date):</label>
          <input
            type="date"
            value={setDate}
            onChange={(e) => setSetDate(e.target.value)}
          />

          <label>Lockdown (Date):</label>
          <input
            type="date"
            value={lockdownDate}
            onChange={(e) => setLockdownDate(e.target.value)}
          />

          <label>Hatch (Date):</label>
          <input
            type="date"
            value={hatchDate}
            onChange={(e) => setHatchDate(e.target.value)}
          />

          <label># Set:</label>
          <input
            type="number"
            value={numberSet}
            onChange={(e) => setNumberSet(e.target.value)}
          />

          <label># Fertile:</label>
          <input
            type="number"
            value={numberFertile}
            onChange={(e) => setNumberFertile(e.target.value)}
          />

          <label># Hatch:</label>
          <input
            type="number"
            value={numberHatch}
            onChange={(e) => setNumberHatch(e.target.value)}
          />

          <label>Fertility Rate:</label>
          <input
            type="number"
            value={fertilityRate}
            onChange={(e) => setFertilityRate(e.target.value)}
          />

          <label>Hatch Rate:</label>
          <input
            type="number"
            value={hatchRate}
            onChange={(e) => setHatchRate(e.target.value)}
          />

          <label>Hatchability Rate:</label>
          <input
            type="number"
            value={hatchabilityRate}
            onChange={(e) => setHatchabilityRate(e.target.value)}
          />

          <label>Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          <label>Notes:</label>
          <textarea value={notes} onChange={(e) => setNotes(e.target.value)} />
          <button className="Submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Page;
