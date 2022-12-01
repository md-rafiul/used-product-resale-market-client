import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const SignUp = () => {
  const { createUser, loading, setLoading, loginGoogle, updateUserProfile } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";
  if (loading) {
    return <div className="flex justify-center text-center py-60">loading</div>;
  }
  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        console.log(result);
        toast("User created successfully");
        const userInfo = {
          displayName: name,
        };
        updateUserProfile(userInfo)
          .then(() => {
            toast("User name updated successfully");

            setLoading(false);
            navigate(from, { replace: true });
          })
          .catch((error) => console.error(error));
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleGoogleIN = () => {
    loginGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoading(false);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className=" flex justify-center my-4">
      <div className="card bg-base-100 shadow-xl w-2/6 mb-1">
        <div className="card-body">
          <h2 className="  text-4xl font-bold pb-4 text-center">
            Please! Register
          </h2>
          <form onSubmit={handleSignup}>
            <div className="form-control mb-4">
              <label className="input-group input-group-vertical">
                <span className="py-1 font-bold">Name</span>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered"
                  name="name"
                />
              </label>
            </div>
            <div className="form-control mb-4">
              <label className="input-group input-group-vertical">
                <span className="py-1 font-bold">Email</span>
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </label>
            </div>
            <div className="form-control mb-4">
              <label className="input-group input-group-vertical">
                <span className="py-1 font-bold">Password</span>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="input input-bordered"
                  name="password"
                  required
                />
              </label>
            </div>

            <div className="card-actions justify-center">
              <button type="submit" className="btn btn-primary">
                Sign up
              </button>
            </div>
          </form>
          <div className="mt-2 border-t">
            <p className="mt-3">
              Already have an account? Please{" "}
              <Link to="/login" className=" text-blue-700">
                Log In
              </Link>
            </p>
            <button className="btn w-full mt-4" onClick={handleGoogleIN}>
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
