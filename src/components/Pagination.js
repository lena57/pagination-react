import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbersArr = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbersArr.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbersArr.map((page) => (
          <li className="page-item" key={page}>
            <a onClick={() => paginate(page)} className="page-link" href="#">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
