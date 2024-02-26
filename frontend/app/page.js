import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="body">
        <Navbar />
        <div className="hero-section">
          <div className="container">
            <h1 className="heading">
              Bird <span className="text-orange-400">Breeding</span> &{" "}
            </h1>
            <h1 className="heading-2">Hatching tracking</h1>
            <h1 className="heading-3">application</h1>
            <button className="button-1">
              <Link href="/bird">Add Bird</Link>
            </button>
            <button className="button-2">
              <Link href="/hatch">Add Hatch</Link>
            </button>
          </div>
          <div className="bg-cover"></div>
        </div>
      </div>
    </>
  );
}
