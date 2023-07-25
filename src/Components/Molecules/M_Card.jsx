import React from "react";
import { Bookmark } from "react-feather";
import { formatDate, generateSoftColorCode } from "../../Utils/helpers";

export default function M_Card(props) {
  const { company, created_date, hourly_rate, location, tags, title } = props;
  return (
    <div class="bg-white max-w-lg p-4   rounded-2xl overflow-hidden shadow-md">
      <div
        class="w-full   bg-red-200 p-4 rounded-2xl gap-1"
        style={{ backgroundColor: generateSoftColorCode() }}
      >
        <div className="flex justify-between items-center font-semibold">
          <div className="date bg-white p-2 rounded-full ">
            {formatDate(created_date)}
          </div>
          <div className="mark bg-white p-1 h-10 w-10 flex justify-center items-center rounded-full">
            <Bookmark size={"1rem"} />
          </div>
        </div>
        <div className="my-5">
          <div className="company font-semibold ">
            {(company && company.name) || ""}
          </div>
          <div className="flex justify-between items-center">
            <div className="font-semibold text-2xl">{title}</div>
            <img
              className="rounded-full h-10 w-10"
              src={company && company.logo_url}
              alt={(company && company.name) || ""}
            ></img>
          </div>
        </div>
        <div className="flex gap-1 flex-wrap">
          {tags.map((item) => (
            <span className="border-2 p-1 px-2 font-semibold text-sm  border-neutral-50 border-opacity-75 rounded-full">
              {item}
            </span>
          ))}
        </div>
      </div>

      <div class="p-4">
        <div className="flex justify-between">
          <div className="font-semibold">
            <div class="text-lg font-semibold ">${hourly_rate}/hr</div>
            <h2 class="text-sm  text-gray-600 ">location</h2>
          </div>
          <div className=" bg-black  text-sm  px-6 font-semibold rounded-full flex items-center text-gray-200">
            Details
          </div>
        </div>
      </div>
    </div>
  );
}
