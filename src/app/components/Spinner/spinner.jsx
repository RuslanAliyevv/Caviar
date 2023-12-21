"use client";
import React from "react";
import { CircleLoader } from "react-spinners";
export default function Spinner() {
  return (
    <>
      <div className="spinner">
        <CircleLoader color="#FFD700" speedMultiplier={1}  size={100} />
      </div>
    </>
  );
}
