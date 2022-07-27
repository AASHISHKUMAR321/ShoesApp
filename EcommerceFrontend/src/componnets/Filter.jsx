import * as React from "react";

export default function MultipleSelectCheckmarks({ handleFilter }) {
  return (
    <div>
      <span>Filter Brand </span>

      <select name="" id="" onChange={handleFilter}>
        <option value="">----</option>
        <option value="puma">Puma</option>
        <option value="jack and jones">jack and jones</option>
      </select>
    </div>
  );
}
