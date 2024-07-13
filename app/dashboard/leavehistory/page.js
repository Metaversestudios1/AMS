"use client";
import React, { useState } from "react";
import { IoReload } from "react-icons/io5";
import Link from "next/link";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
const Page = () => {
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
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
        <div className="text-xl font-bold mx-2 my-8">Leave History</div>
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
      <div className={` flex  mx-5`}>
        <div className="flex flex-col ">
          <label htmlFor="startdate" className="text-sm my-2">
            Start date:
          </label>
          <input
            type="date"
            placeholder="Start Date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="p-2 rounded mr-2 bg-gray-200"
            id="startdate"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="enddate" className="text-sm my-2">
            End date:
          </label>
          <input
            type="date"
            placeholder="End Date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="p-2 rounded bg-gray-200"
            id="enddate"
          />
        </div>
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
                Leave Type
              </th>
              <th scope="col" className="px-6 py-3">
                Leave From
              </th>
              <th scope="col" className="px-6 py-3">
                Leave To
              </th>
              <th scope="col" className="px-6 py-3">
                No. of Days
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Reason
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
              <td className="px-6 py-4">Medical leave</td>
              <td className="px-6 py-4">15/07/2024</td>
              <td className="px-6 py-4">17/07/2024</td>
              <td className="px-6 py-4">2 Days</td>
              <td className="px-6 py-4">Approved</td>
              <td className="px-6 py-4">Fever</td>
              <td className="flex relative py-4 px-5">
                <Link
                  href={{
                    pathname: `/dashboard/leaverequests/edit/[id]`,
                    query: {
                      id: 2131532,
                    },
                  }}
                  as={`/dashboard/leaverequests/edit/${2131532}`}
                >
                  <CiEdit className="text-2xl mr-2 cursor-pointer" /> 
                </Link>
                <MdDelete className="text-2xl cursor-pointer" />
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
              <td className="px-6 py-4">Medical leave</td>
              <td className="px-6 py-4">15/07/2024</td>
              <td className="px-6 py-4">17/07/2024</td>
              <td className="px-6 py-4">2 Days</td>
              <td className="px-6 py-4">Approved</td>
              <td className="px-6 py-4">Fever</td>
              <td className="flex relative py-4 px-5">
                <Link
                  href={{
                    pathname: `/dashboard/leaverequests/edit/[id]`,
                    query: {
                      id: 2131532,
                    },
                  }}
                  as={`/dashboard/leaverequests/edit/${2131532}`}
                >
                  <CiEdit className="text-2xl mr-2 cursor-pointer" />
                </Link>
                <MdDelete className="text-2xl cursor-pointer" />
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
              <td className="px-6 py-4">Medical leave</td>
              <td className="px-6 py-4">15/07/2024</td>
              <td className="px-6 py-4">17/07/2024</td>
              <td className="px-6 py-4">2 Days</td>
              <td className="px-6 py-4">Approved</td>
              <td className="px-6 py-4">Fever</td>
              <td className="flex relative py-4 px-5">
                <Link
                  href={{
                    pathname: `/dashboard/leaverequests/edit/[id]`,
                    query: {
                      id: 2131532,
                    },
                  }}
                  as={`/dashboard/leaverequests/edit/${2131532}`}
                >
                  <CiEdit className="text-2xl mr-2 cursor-pointer" />
                </Link>
                <MdDelete className="text-2xl cursor-pointer" />
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
  );
};

export default Page;
