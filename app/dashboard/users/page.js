"use client";
import React, { useEffect, useState } from "react";
import { IoReload } from "react-icons/io5";
import Link from "next/link";
import { MdDelete } from "react-icons/md";
import { GrFormView } from "react-icons/gr";
import { CiEdit } from "react-icons/ci";
export const Page = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/getusers");
      const response = await res.json();
      setLoader(false);
      setUsers(response.data);
    };
    fetchData();
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name == "search") {
      setSearch(value);
    }
  };
  const handleDelete = async (e, id) => {
    e.preventDefault();
    const res = await fetch("/api/deleteuser", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const response = await res.json();
    if (response.success) {
      const updatedUsers = users.filter((item) => item.emp_id != id);
      setUsers(updatedUsers);
    }
  };
  return (
    <div className="">
      <div className="flex items-center">
        <div className="bg-yellow-500 rounded-[5px] ml-5 h-[30px] w-[10px]"></div>
        <div className="text-xl font-bold mx-2 my-8">Users</div>
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
      {loader ? (
        <div
          aria-label="Loading..."
          role="status"
          class="flex items-center justify-center space-x-2 mx-5"
        >
          <svg
            class="h-12 w-12 animate-spin stroke-gray-500"
            viewBox="0 0 256 256"
          >
            <line
              x1="128"
              y1="32"
              x2="128"
              y2="64"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
            <line
              x1="195.9"
              y1="60.1"
              x2="173.3"
              y2="82.7"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
            <line
              x1="224"
              y1="128"
              x2="192"
              y2="128"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
            <line
              x1="195.9"
              y1="195.9"
              x2="173.3"
              y2="173.3"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
            <line
              x1="128"
              y1="224"
              x2="128"
              y2="192"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
            <line
              x1="60.1"
              y1="195.9"
              x2="82.7"
              y2="173.3"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
            <line
              x1="32"
              y1="128"
              x2="64"
              y2="128"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
            <line
              x1="60.1"
              y1="60.1"
              x2="82.7"
              y2="82.7"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="24"
            ></line>
          </svg>
        </div>
      ) : (
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
                  Contact
                </th>
                <th scope="col" className="px-6 py-3">
                  email
                </th>
                <th scope="col" className="px-6 py-3">
                  designation
                </th>
                <th scope="col" className="px-6 py-3">
                  Joining Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((item, index) => {
                return (
                  <tr key={item._id} className="bg-white border-b ">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      {index + 1}
                    </th>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      {item?.name}
                    </th>
                    <td className="px-6 py-4">{item?.contact}</td>
                    <td className="px-6 py-4">{item?.email}</td>
                    <td className="px-6 py-4">{item?.designation}</td>
                    <td className="px-6 py-4">{item?.joining_date}</td>
                    <td className="flex py-2  items-center gap-1">
                      <Link
                        href={{
                          pathname: `/dashboard/users/view/[id]`,
                          query: { id: 12345 },
                        }}
                        as={`/dashboard/users/view/${12345}`}
                      >
                        <GrFormView className="text-3xl cursor-pointer" />
                      </Link>
                      <Link
                        href={{
                          pathname: `/dashboard/users/edit/[id]`,
                          query: {
                            id: item.emp_id,
                          },
                        }}
                        as={`/dashboard/users/edit/${item.emp_id}`}
                      >
                        <CiEdit className="text-2xl cursor-pointer" />
                      </Link>
                      <MdDelete
                        onClick={(e) => handleDelete(e, item.emp_id)}
                        className="text-2xl cursor-pointer"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
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
