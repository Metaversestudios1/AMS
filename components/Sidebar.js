"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
import { PiBookOpenText } from "react-icons/pi";
import { LiaEditSolid } from "react-icons/lia";
// <button type="button" className="text-gray-500 hover:text-gray-600" data-hs-overlay="#docs-sidebar" aria-controls="docs-sidebar" aria-label="Toggle navigation">
//   <span className="sr-only">Toggle Navigation</span>
//   <svg className="flex-shrink-0 size-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
//     <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
//   </svg>
// </button>

const Sidebar = () => {
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const [leaveSubMenu, setLeaveSubMenu] = useState(false);
  const [payrollSubMenu, setPayrollSubMenu] = useState(false);
  const [attendanceSubMenu, setAttendanceSubMenu] = useState(false);

  return (
    <>
      <div className="min-h-full bg-neutral-800 ">
        <div
          id="docs-sidebar"
          className="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden start-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-800 dark:border-neutral-700"
        >
          <div className="px-6">
            <a
              className="flex-none text-xl font-semibold dark:text-white"
              href="#"
              aria-label="Brand"
            >
              AMS
            </a>
          </div>
          <nav
            className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
            data-hs-accordion-always-open
          >
            <ul className="space-y-1.5">
              <li>
                <Link
                  href="/dashboard"
                  className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-400  rounded-lg   text-gray-00 hover:text-neutral-300 hover:bg-neutral-700"
                >
                  <svg
                    className="size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                  Dashboard
                </Link>
              </li>
              <li className="hs-accordion" id="users-accordion">
                
                  <button
                    onClick={()=>{setOpenSubMenu(!openSubMenu)}}
                    type="button"
                    className=" justify-between active:bg-gray-100 hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300 "
                  >
                  <div className="flex items-center">
                    <svg
                      className="size-4 mr-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    Users
                    </div>
                    {openSubMenu ? <FaAngleDown className="text-end"/> : <FaAngleRight  className="text-end"/>}
                  </button>
                {openSubMenu && <div
                  id="users-accordion"
                  className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 "
                >
                  <ul
                    className="hs-accordion-group ps-3 pt-2"
                    data-hs-accordion-always-open
                  >
                    <li className="hs-accordion" id="users-accordion-sub-1">
                    <Link href = "/dashboard/teamleaders">
                    <button
                    type="button"
                    className="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300 dark:hs-accordion-active:text-white"
                    >
                    Team Leaders
                    </button>
                    </Link>

                    </li>
                    <li className="hs-accordion" id="users-accordion-sub-2">
                    <Link href="/dashboard/users">
                      <button
                        type="button"
                        className="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300 dark:hs-accordion-active:text-white"
                      >
                        Users List
                      </button>
                      </Link>
                    </li>
                  </ul>
                </div>}
              </li>
              <li className="hs-accordion" id="projects-accordion">
                  {" "}
                  <button
                    type="button"
                    onClick={()=>{setLeaveSubMenu(!leaveSubMenu)}}
                    className="justify-between hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300 dark:hs-accordion-active:text-white"
                  >
                  <div className="flex items-center">
                    <svg
                      className="size-4 mr-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z" />
                      <path d="M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8" />
                      <path d="M15 2v5h5" />
                    </svg>
                    Leave Management
                    </div>
                    {leaveSubMenu ? <FaAngleDown className="text-end"/> : <FaAngleRight  className="text-end"/>}
                  </button>
                {leaveSubMenu && <div
                  id="users-accordion"
                  className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 "
                >
                  <ul
                    className="hs-accordion-group ps-3 pt-2"
                    data-hs-accordion-always-open
                  >
                    <li className="hs-accordion" id="users-accordion-sub-1">
                    <Link href="/dashboard/leavehistory">
                      <button
                        type="button"
                        className="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300 dark:hs-accordion-active:text-white"
                      >
                        Leaves history
                      </button>
                      </Link>
                    </li>
                    <li className="hs-accordion" id="users-accordion-sub-2">
                    <Link href="/dashboard/leaverequests">
                      <button
                        type="button"
                        className="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300 dark:hs-accordion-active:text-white"
                      >
                        Leave requests
                      </button>
                      </Link>
                    </li>
                  </ul>
                </div>}
              </li>
              
              <li className="hs-accordion" id="projects-accordion">
                  {" "}
                  <button
                    type="button"
                    onClick={()=>{setAttendanceSubMenu(!attendanceSubMenu)}}
                    className="justify-between hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300 dark:hs-accordion-active:text-white"
                  >
                  <div className="flex items-center">
                    
                    <LiaEditSolid className="mr-4 text-lg"/>Attendance
                    </div>
                    {payrollSubMenu ? <FaAngleDown /> : <FaAngleRight/>}
                  </button>
                {attendanceSubMenu && <div
                  id="users-accordion"
                  className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 "
                >
                  <ul
                    className="hs-accordion-group ps-3 pt-2"
                    data-hs-accordion-always-open
                  >
                    {/*<li className="hs-accordion" id="users-accordion-sub-1">
                    <Link href="/dashboard/payroll/employeesalary">
                    <button
                    type="button"
                    className="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300 dark:hs-accordion-active:text-white"
                    >
                    Today&apos;s Attendance
                    </button>
                    </Link>

                    </li>*/}
                    <li className="hs-accordion" id="users-accordion-sub-1">
                    <Link href="/dashboard/attendance/attendancesheet">
                    <button
                    type="button"
                    className="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300 dark:hs-accordion-active:text-white"
                    >
                    Attendance sheet
                    </button>
                    </Link>

                    </li>
                    
                  </ul>
                </div>}
              </li> 
              <li className="hs-accordion" id="projects-accordion">
                  {" "}
                  <button
                    type="button"
                    onClick={()=>{setPayrollSubMenu(!payrollSubMenu)}}
                    className="justify-between hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300 dark:hs-accordion-active:text-white"
                  >
                  <div className="flex items-center">
                    
                    <PiBookOpenText className="mr-4 text-lg"/>Payroll
                    </div>
                    {payrollSubMenu ? <FaAngleDown /> : <FaAngleRight/>}
                  </button>
                {payrollSubMenu && <div
                  id="users-accordion"
                  className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 "
                >
                  <ul
                    className="hs-accordion-group ps-3 pt-2"
                    data-hs-accordion-always-open
                  >
                    <li className="hs-accordion" id="users-accordion-sub-1">
                    <Link href="/dashboard/payroll/employeesalary">
                    <button
                    type="button"
                    className="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300 dark:hs-accordion-active:text-white"
                    >
                    Employee salary
                    </button>
                    </Link>

                    </li>
                    
                  </ul>
                </div>}
              </li> 
              <li>
                <Link
                  href="/dashboard/alerts"
                  className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300"
                >
                  <svg
                    className="size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                    <line x1="16" x2="16" y1="2" y2="6" />
                    <line x1="8" x2="8" y1="2" y2="6" />
                    <line x1="3" x2="21" y1="10" y2="10" />
                    <path d="M8 14h.01" />
                    <path d="M12 14h.01" />
                    <path d="M16 14h.01" />
                    <path d="M8 18h.01" />
                    <path d="M12 18h.01" />
                    <path d="M16 18h.01" />
                  </svg>
                  Alerts
                </Link>
              </li>
              <li className="hs-accordion" id="account-accordion">
                <Link href="#">
                  <button
                    type="button"
                    className="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300 dark:hs-accordion-active:text-white"
                  >
                    <svg
                      className="size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="18" cy="15" r="3" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M10 15H6a4 4 0 0 0-4 4v2" />
                      <path d="m21.7 16.4-.9-.3" />
                      <path d="m15.2 13.9-.9-.3" />
                      <path d="m16.6 18.7.3-.9" />
                      <path d="m19.1 12.2.3-.9" />
                      <path d="m19.6 18.7-.4-1" />
                      <path d="m16.8 12.3-.4-1" />
                      <path d="m14.3 16.6 1-.4" />
                      <path d="m20.7 13.8 1-.4" />
                    </svg>
                    LogOut
                    <svg
                      className="hs-accordion-active:block ms-auto hidden size-4 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m18 15-6-6-6 6" />
                    </svg>
                  </button>
                </Link>
              </li>
              
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
