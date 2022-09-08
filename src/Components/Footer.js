import React from "react";
import "../styles.css";

export default function Footer({ handleNext, handlePrevious }) {
  return (
    <div className="Footer">
      <div onClick={handlePrevious}>Previous</div>
      <div onClick={handleNext}>next</div>
    </div>
  );
}
