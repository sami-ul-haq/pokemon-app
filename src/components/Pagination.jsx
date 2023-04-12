import React from "react";

const Pagination = ({ goNextPage, goPreviousPage }) => {
  return (
    <div>
      {goPreviousPage && <button onClick={goNextPage}>Next</button>}
      <button onClick={goPreviousPage}>Previous</button>
    </div>
  );
};

export default Pagination;
