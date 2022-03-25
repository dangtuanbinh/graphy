import React from "react";

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
        className="button"
        disabled={page <= 1}
        onClick={() => handlePageChange(page - 1)}
      >
        Prev
      </button>

      <button
        className="button"
        disabled={page >= totalPages}
        onClick={() => handlePageChange(page + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
