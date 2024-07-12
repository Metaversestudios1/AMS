"use client"
import React , {useState} from 'react'
import { IoReload } from "react-icons/io5";
import Link from "next/link";
import { MdDelete, MdOutlineFileDownload } from "react-icons/md";
import { GrFormView } from "react-icons/gr";
import { CiEdit } from "react-icons/ci";
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
    <div className="text-xl font-bold mx-2 my-8">Employee Salary</div>
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
    <div className="relative overflow-x-auto m-5 mb-0">
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
            Email
          </th>
          <th scope="col" className="px-6 py-3">
            Designation
          </th>
          <th scope="col" className="px-6 py-3">
            Salary
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
          <td className="px-6 py-4">john@gmail.com</td>
          <td className="px-6 py-4">Frontend Developer</td>
          <td className="px-6 py-4">$2999</td>
          <td className="flex p-3  items-center gap-1">
            <Link
              href={{
                pathname: `/dashboard/users/edit/[id]`,
                query: {
                  id: 2131532,
                },
              }}
              as={`/dashboard/users/edit/${2131532}`}
            >
              <CiEdit className="text-2xl cursor-pointer" />
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
          <td className="px-6 py-4">john@gmail.com</td>
          <td className="px-6 py-4">Frontend Developer</td>
          <td className="px-6 py-4">$2999</td>
          <td className="flex p-3 items-center gap-1">
            <Link
              href={{
                pathname: `/dashboard/users/edit/[id]`,
                query: {
                  id: 2131532,
                },
              }}
              as={`/dashboard/users/edit/${2131532}`}
            >
              <CiEdit className="text-2xl cursor-pointer" />
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
          <td className="px-6 py-4">john@gmail.com</td>
          <td className="px-6 py-4">Frontend Developer</td>
          <td className="px-6 py-4">$2999</td>
          <td className="flex p-3 items-center gap-1">
            <Link
              href={{
                pathname: `/dashboard/users/edit/[id]`,
                query: {
                  id: 2131532,
                },
              }}
              as={`/dashboard/users/edit/${2131532}`}
            >
              <CiEdit className="text-2xl cursor-pointer" />
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
  )
}

export default Page
