import React from "react";
import { useGlobalContext } from "../context/GlobalContext";

const Pagination = () => {
  const { goNextPage, goPreviousPage } = useGlobalContext();


  return (
    <div className="paginatio">
      <button onClick={()=>goPreviousPage()}>Previous</button>
      <button onClick={()=>goNextPage()}>Next</button>
    </div>
  );
};

export default Pagination;
