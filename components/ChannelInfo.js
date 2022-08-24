import React from "react";
import Image from "next/image";
import { CameraIcon } from "@heroicons/react/solid";

export default function ChannelInfo({ youtuber }) {
  function numFormatter(num) {
    if (num > 999 && num < 1000000) {
      return (num / 1000).toFixed(1) + "K"; // convert to K for number from > 1000 < 1 million
    } else if (num > 1000000) {
      return (num / 1000000).toFixed(1) + "M"; // convert to M for number from > 1 million
    } else if (num > 1000000000) {
      return (num / 1000000000).toFixed(1) + "B"; // convert to B for number from > 1 billion
    } else if (num < 900) {
      return num; // if value < 1000, nothing to do
    }
  }
  return (
    <div className="mt-5 animate-fade-out-down">
      <div className=" p-4 bg-slay-100 rounded-lg md:p-4 dark:bg-gray-800">
        <div className="flex justify-center  items-center space-x-2">
          <div className="flex flex-col  items-center pt-5 pb-10">
            <Image
              width={150}
              height={150}
              className="mb-3 w-24 h-24 rounded-full shadow-lg"
              src={youtuber.snippet.thumbnails.medium.url}
              alt="youtuber image"
            />
            <h5 className="mb-1 mt-1 text-xl font-bold text-gray-900 dark:text-white">
              {youtuber.snippet.title}
            </h5>
          </div>
          <div className="sm:w-sm max-w-[300px]  text-center">
            <p className="line-clamp-4">{youtuber.snippet.description}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 p-4 shadow shadow-sky-200 rounded-md mx-auto max-w-screen-md text-gray-900 sm:grid-cols-3 dark:text-white sm:p-8">
          <div className="flex flex-col justify-center items-center">
            <dt className="mb-2 text-3xl font-extrabold">
              {" "}
              {`${numFormatter(youtuber.statistics.subscriberCount)} `}
            </dt>
            <dd className=" text-gray-500 dark:text-gray-400">Subscribers</dd>
          </div>

          <div className="flex flex-col justify-center items-center">
            <dt className="mb-2 text-3xl font-extrabold">
              {numFormatter(youtuber.statistics.viewCount)}
            </dt>
            <dd className=" text-gray-500 dark:text-gray-400">Total Views</dd>
          </div>
          <div className="flex flex-col justify-center items-center">
            <dt className="mb-2 text-3xl font-extrabold">
              {numFormatter(youtuber.statistics.videoCount)}
            </dt>
            <dd className=" text-gray-500 dark:text-gray-400">Total Videos</dd>
          </div>
        </div>
      </div>

      {/* <div className="w-full sm:w-sm  max-w-2xl bg-sky-500 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className=" grid grid-cols-1 gap-6 md:grid-cols-3 mx-2 mt-3 items-center pb-10">
        
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
              Total Views
            </h4>

            <div className="mt-1">{youtuber.statistics.viewCount}</div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
              Total Videos <CameraIcon className="h-6 w-7 " />
            </h4>

            <div className="mt-1">{youtuber.statistics.videoCount}</div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate"></h4>

            <div className="mt-1">
              $1800
              <span className="text-gray-600 text-sm"> /wk</span>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
