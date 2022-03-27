import React from "react";
import {GrNext} from "react-icons/gr"
import {GrPrevious} from "react-icons/gr"

import "./index.scss";

const Pagination = (props) => {
  const { pagination, onPageChange } = props;
  const { page, per_page, total } = pagination;
  const totalPages = Math.ceil(total / per_page);

  const handlePageChange = (newPage) => {
    if (onPageChange) onPageChange(newPage);
  };

  return (
    <div className="paginationContainer">
      <button
        className="paginationButton"
        disabled={page <= 1}
        onClick={() => handlePageChange(page - 1)}
      >
        <GrPrevious size={30}/>
      </button>

      <button
        className="paginationButton"
        disabled={page >= totalPages}
        onClick={() => handlePageChange(page + 1)}
      >
        <GrNext size={30}/>
      </button>
    </div>
  );
};

export default Pagination;
