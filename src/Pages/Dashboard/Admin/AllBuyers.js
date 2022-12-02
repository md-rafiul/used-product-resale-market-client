import React from "react";
import { useLoaderData } from "react-router-dom";
import TableRow from "../../Shared/TableRow";

const AllBuyers = () => {
  const allBuyerData = useLoaderData();
  console.log(allBuyerData);
  return (
    <div className=" p-6">
      <h2 className="text-4xl font-bold text-center mb-6">All Buyers List</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Varify User</th>
              <th>Delete User</th>
            </tr>
          </thead>
          <tbody>
            {allBuyerData.map((user, i) => (
              <TableRow key={i} i={i} user={user}></TableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBuyers;
