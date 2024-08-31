import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import NavBar from "../Shared/NavBar/NavBar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <NavBar></NavBar>
      <h2 className="text-3xl font-poppins font-bold">This is home</h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div>
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="col-span-2">
          <h3>News Coming</h3>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
