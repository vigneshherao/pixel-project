import React from "react";
import { Table_Heading } from "../utils/constants";
import FilterBtns from "./FilterBtns";

//heading with Employees and filter btn

const TableHeader = () => {
  return (
    <div className="sm:mt-24 flex justify-between">
      <div>
        <h2 className="text-3xl font-bold">{Table_Heading}</h2>
      </div>
      <div>
        <FilterBtns />
      </div>
    </div>
  );
};

export default TableHeader;
