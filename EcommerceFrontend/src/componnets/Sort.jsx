import * as React from "react";

export default function BasicSelect({ handleChange }) {
  return (
    <div>
      <label htmlFor="">Sorting Price </label>
      <select id="" onChange={handleChange}>
        <option value="">----</option>
        <option value="">Price Low To High</option>
        <option value="">Price High To Low</option>
      </select>
    </div>
  );
}
