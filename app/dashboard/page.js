import React from 'react'
import { FaUsers } from "react-icons/fa";
import { TbUserShare } from "react-icons/tb";
import { FaUserCheck, FaUserMinus} from "react-icons/fa";
const Page = () => {
  return (
    <div>
    <div class="w-full px-6 py-6 mx-auto my-5">
    <div class="flex flex-wrap -mx-3">
      <div class="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4 shadow-2xl">
        <div class="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
          <div class="flex-auto p-4">
            <div class="flex flex-row -mx-3">
              <div class="flex-none w-2/3 max-w-full px-3">
                <div>
                  <p class="mb-0 font-sans font-semibold leading-normal text-sm">Total employee&apos;s</p>
                  <h5 class="mb-0 font-bold">
                    15
                    <span class="leading-normal text-sm font-weight-bolder text-lime-500">+100%</span>
                  </h5>
                </div>
              </div>
              <div class="px-3 text-right basis-1/3">
                <div class="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500">
                  <i class="flex justify-center ni leading-none ni-money-coins text-lg relative top-3.5 text-white"><FaUsers className='text-2xl'/></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4 shadow-2xl">
        <div class="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
          <div class="flex-auto p-4">
            <div class="flex flex-row -mx-3">
              <div class="flex-none w-2/3 max-w-full px-3">
                <div>
                  <p class="mb-0 font-sans font-semibold leading-normal text-sm">New Employee&apos;s</p>
                  <h5 class="mb-0 font-bold">
                    3
                    <span class="leading-normal text-sm font-weight-bolder text-lime-500">+30%</span>
                  </h5>
                </div>
              </div>
              <div class="px-3 text-right basis-1/3">
                <div class="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500">
                  <i class="flex justify-center ni leading-none ni-world text-lg relative top-3.5 text-white"><TbUserShare className='text-2xl'/></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4 shadow-2xl">
        <div class="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
          <div class="flex-auto p-4">
            <div class="flex flex-row -mx-3">
              <div class="flex-none w-2/3 max-w-full px-3">
                <div>
                  <p class="mb-0 font-sans font-semibold leading-normal text-sm">Total today Present</p>
                  <h5 class="mb-0 font-bold">
                    13
                  </h5>
                </div>
              </div>
              <div class="px-3 text-right basis-1/3">
                <div class="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500">
                  <i class="flex justify-center ni leading-none ni-paper-diploma text-lg relative top-3.5 text-white"><FaUserCheck className='text-2xl'/></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full max-w-full px-3 sm:w-1/2 sm:flex-none xl:w-1/4 shadow-2xl">
        <div class="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
          <div class="flex-auto p-4">
            <div class="flex flex-row -mx-3">
              <div class="flex-none w-2/3 max-w-full px-3">
                <div>
                  <p class="mb-0 font-sans font-semibold leading-normal text-sm">Total Absent</p>
                  <h5 class="mb-0 font-bold">
                   2
                  </h5>
                </div>
              </div>
              <div class="px-3 text-right basis-1/3">
                <div class="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500">
                  <i class="flex justify-center ni leading-none ni-cart text-lg relative top-3.5 text-white"><FaUserMinus className='text-2xl'/></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    </div>
    </div>

  )
}

export default Page
