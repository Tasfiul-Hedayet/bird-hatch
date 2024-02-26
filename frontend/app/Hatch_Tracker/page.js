import Navbar from "@/components/Navbar";
import React from 'react'
import Link from "next/link";

function Page() {
  return (
    <>
      <div className="body">
      <Navbar />
      <h1>Hatch Tracker</h1>
      <p><Link href="/hatch">Create New</Link></p>
      <input placeholder="Find By Name"/>
      <button className="s-btn">Search</button>
      <p><Link href="/bird">View List</Link></p>
      </div>
    </>
  )
}

export default Page