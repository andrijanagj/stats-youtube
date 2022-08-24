import Image from "next/image";
import React from "react";

export default function VideoCard({ video }) {
  return (
    <>
      <div className="col-span-12 sm:col-span-6 md:col-span-3">
        <card className="w-full shadow-xl bg-white-500 items-center rounded-md py-4 px-3 flex flex-col">
          <div className="relative">
            <a href="#">
              <Image
                width={200}
                height={190}
                className="w-64 object-cover rounded-md "
                layout="intrinsic"
                src={video.snippet.thumbnails.medium.url}
                alt=""
              />
            </a>
          </div>

          <div className="flex flex-row mt-2 gap-2">
            <div clas="flex flex-col">
              <a href="#">
                <p className="text-gray-800 text-sm font-semibold line-clamp-1">
                  {video.snippet.title}
                </p>
              </a>
              <p className="text-gray-400 text-xs mt-2 hover:text-gray-100 line-clamp-2">
                {video.snippet.description}
              </p>
              <p className="text-gray-400 text-lg mt-1">
                241K views . 3 years ago
              </p>
            </div>
          </div>
        </card>
      </div>
    </>
  );
}
