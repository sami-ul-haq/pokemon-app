import React from "react";
import { useGlobalContext } from "../context/GlobalContext";

const Pagination = () => {
  const { goNextPage, goPreviousPage } = useGlobalContext();

  const goToNextPage = () => {
    goNextPage();
  };

  const goToPreviousPage = () => {
    goPreviousPage();
  };

  return (
    <div className="paginatio">
      {goToPreviousPage && <button onClick={goPreviousPage}>Previous</button>}
      <button onClick={goToNextPage}>Next</button>
    </div>
  );
};

export default Pagination;
