'use client';
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import Link from "next/link";
import BirdList from "@/components/BirdList";

function Page() {
  
  const [search, setSearch] = useState('');

  return (
    <>
      <div className="body">
        <Navbar />
        <h1>Bird Tracker</h1>
        <p><Link href="/bird">Create New</Link></p>
        <input placeholder="Find By Name" value={search} onChange={e => setSearch(e.target.value)}/>
        {/* <button className="s-btn">Search</button> */}
        <p><Link href="/bird">View List</Link></p>
        <BirdList searchTerm={search}/>
      </div>
    </>
  );
}

export default Page;
