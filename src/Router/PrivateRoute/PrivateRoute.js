import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Dna } from "react-loader-spinner";
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex justify-center text-center py-60">
        <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    );
  }
  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }}></Navigate>;
};

export default PrivateRoute;
