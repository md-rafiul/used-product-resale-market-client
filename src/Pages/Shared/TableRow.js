import React from "react";

const TableRow = ({ user, i }) => {
  const handleDelete = () => {};
  const handleVarify = () => {};
  return (
    <tr className="hover">
      <th>{i + 1}</th>
      <td>{user.displayName}</td>
      <td>{user.email}</td>
      <td>{user.status}</td>
      <td>
        <button className="btn btn-primary" onClick={handleVarify}>
          Varify
        </button>
      </td>
      <td>
        <button className="btn btn-error" onClick={handleDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
