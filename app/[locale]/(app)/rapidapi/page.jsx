"use client";
import { useEffect, useState } from "react";
import useFetch from "@/hooks/useFetch";
export default function RapidApi() {
  const { data, isLoading, error } = useFetch("search", {
    query: "React developer",
    num_pages: "1",
  });

  useEffect(() => {
    console.log(isLoading);
  }, [isLoading]);

  const handleSearch = () => {};

  const handleGetEstimatedSalary = () => {};

  const handleGetJobDetails = () => {};

  return (
    <div className="bg-white container mx-auto p-5 m-5 rounded-lg shadow flex gap-5">
      <ul className="menu bg-base-200 w-56 rounded-box">
        <li onClick={handleSearch}>
          <a>Search</a>
        </li>
        <li onClick={handleGetEstimatedSalary}>
          <a>Job Details</a>
        </li>
        <li onClick={handleGetJobDetails}>
          <a>Estimated Salary</a>
        </li>
      </ul>
      <div className="bg-blue-100 flex-1">
        {isLoading && <span className="loading loading-ring loading-lg"></span>}
        {data &&
          data.map((item) => {
            return (
              <div key={item.job_id}>
                <h1>{item.job_id}</h1>
                <p>{item.employer_name}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
