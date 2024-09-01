import { Link } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import { useContext} from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const handelLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <NavBar></NavBar>
      <div className="hero bg-base-300 min-h-screen">
        <div className="card bg-base-200 w-full max-w-lg shrink-0 shadow-2xl">
          <form onSubmit={handelLogin} className="card-body">
            <h2 className="text-3xl font-bold text-center pb-4">
              Login your account
            </h2>
            <hr className="pb-4 " />
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <p className="text-center pt-4">
              Dont’t Have An Account ?{" "}
              <Link to="/registration" className="text-orange-500">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
