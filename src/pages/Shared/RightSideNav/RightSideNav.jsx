import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";
const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-4">
        <div>
          <h2 className="text-2xl font-bold mb-4">Login With</h2>
          <button className="btn w-full">
            <FaGoogle />
            Login With Google
          </button>
        </div>
        <div>
          <button className="btn w-full">
            <FaGithub />
            Login With GitHub
          </button>
        </div>
      </div>

      <div className="p-4 ">
        <h2 className="text-2xl font-bold mb-4">Find Us On</h2>
        <a className="flex items-center border p-4 rounded-t-lg" href="">
          <FaFacebook className="mr-2" />
          FaceBook
        </a>
        <a className="flex items-center border p-4 " href="">
          <FaTwitter className="mr-2" />
          Twitter
        </a>
        <a className="flex items-center border p-4 rounded-b-lg" href="">
          <FaInstagram className="mr-2" />
          Instagram
        </a>
      </div>
      {/* Q-Zone */}
      <div className="p-2 space-y-4 bg-slate-200">
        <h2 className="text-2xl font-bold ">Q-Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
