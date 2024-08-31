import { Link } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";

const Registration = () => {
  const handelRegistration = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <NavBar></NavBar>
      <div className="hero bg-base-300 min-h-screen">
        <div className="card bg-base-200 w-full max-w-lg shrink-0 shadow-2xl">
          <form onSubmit={handelRegistration} className="card-body">
            <h2 className="text-3xl font-bold text-center pb-4">
              Registration your account
            </h2>
            <hr className="pb-4 " />
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">URL</span>
              </label>
              <input
                type="email"
                name="url"
                placeholder="url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              {/* terms */}
          <div className="mt-4 ">
          <input className="mr-2" type="checkbox" name="terms" id="terms" />
          <label htmlFor="terms">Accept Our condition</label>
          </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Registration</button>
            </div>
            <p className="text-center pt-4">
              New This Website ?{" "}
              <Link to="/login" className="text-orange-500">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
