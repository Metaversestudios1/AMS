"use client"
import React, {useState} from 'react'
import { IoReload } from "react-icons/io5";
import Link from "next/link";

const Page = () => {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name == "search") {
      setSearch(value);
    }
  };

  return (
    <div>
    <div className="flex items-center">
        <div className="bg-yellow-500 rounded-[5px] ml-5 h-[30px] w-[10px]"></div>
        <div className="text-xl font-bold mx-2 my-8">Attendance Sheet</div>
      </div>
      <div className="flex justify-between">
        <div className={` flex items-center`}>
          <input
            placeholder="Search "
            type="text"
            name="search"
            value={search}
            onChange={handleChange}
            className={`text-white rounded-lg bg-black p-2 m-5`}
          />
          <div className={` flex items-center`}>
            <button className="bg-blue-800 text-white p-2 my-5 text-sm rounded-lg ">
              Search
            </button>
            <IoReload className="cursor-pointer text-xl mx-5" />
          </div>
        </div>
        <Link href="/dashboard/users/add">
          <button className="bg-blue-800 text-white p-3 m-5 text-sm rounded-lg">
            Add New
          </button>
        </Link>
      </div>
    <div className="relative overflow-x-auto m-5 mb-0 ">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500  ">
      <thead className="text-xs text-gray-700 uppercase bg-gray-200">
        <tr>
          <th scope="col" className="px-6 py-3">
            Sr no.
          </th>
          <th scope="col" className="px-6 py-3">
            Full name
          </th>
          <th scope="col" className="px-6 py-3">
            Check In
          </th>
          <th scope="col" className="px-6 py-3">
          Check Out
          </th>
          <th scope="col" className="px-6 py-3">
          Working Hours
          </th>
          <th scope="col" className="px-6 py-3">
            Status
          </th>
          <th scope="col" className="px-6 py-3">
            Action
          </th>
          
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white border-b ">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
          >
            1.
          </th>
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
          >
            John doe
          </th>
          <td className="px-6 py-4">10:00</td>
          <td className="px-6 py-4">6:00</td>
          <td className="px-6 py-4">8 Hrs</td>
          <td className="px-6 py-4">Present</td>
          
          <td>
                <button
                  type="button"
                  className="focus:outline-none text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mr-2"
                >
                  Present
                </button>
                <button
                  type="button"
                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-3 py-1.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  Absent
                </button>
              </td>
          
        </tr>
        <tr className="bg-white border-b ">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
          >
            1.
          </th>
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
          >
            John doe
          </th>
          <td className="px-6 py-4">10:00</td>
          <td className="px-6 py-4">6:00</td>
          <td className="px-6 py-4">8 Hrs</td>
          <td className="px-6 py-4">Present</td>
          
          <td>
                <button
                  type="button"
                  className="focus:outline-none text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mr-2"
                >
                  Present
                </button>
                <button
                  type="button"
                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-3 py-1.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  Absent
                </button>
              </td>
          
        </tr>
        </tbody>
        </table>
    </div>
    <div className="flex flex-col items-center my-10">
    <span className="text-sm text-black ">
      Showing <span className="font-semibold text-black ">1</span> to{" "}
      <span className="font-semibold text-black ">10</span> of{" "}
      <span className="font-semibold text-black ">100</span> Entries
    </span>
    <div className="inline-flex mt-2 xs:mt-0">
      <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 ">
        Prev
      </button>
      <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 ">
        Next
      </button>
    </div>
  </div>
    </div>
  )
}

export default Page
