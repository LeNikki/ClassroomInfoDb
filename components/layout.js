import React from "react";
import Link from "next/link";
export const siteTitle = "Student Information";
export default function layout({ children }) {
  const navigations = [
    { id: 1, nav: "Home", directory: "/" },
    { id: 2, nav: "Add New", directory: "/AddNew" },
  ];
  return (
    <div>
      {/* //-------Navigation Bar--------- */}
      <div className="w-1/2 p-3 items-center flex flex-row justify-around">
        <h1 className=" font-semibold text-lg">Student Information Database</h1>
        <ul className="flex  w-1/4 justify-around">
          {navigations.map((item) => (
            <Link href={item.directory} key={item.id}>
              <li>{item.nav}</li>
            </Link>
          ))}
        </ul>
      </div>

      {/* Load the main component in pages/index */}
      <main className=" p-3 md:p-10">{children}</main>
    </div>
  );
}
