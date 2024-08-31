import Marquee from "react-fast-marquee";
const BreakingNews = () => {
  return (
    <div className="flex bg-slate-300 p-3 mt-9">
      <button className="btn btn-secondary btn-sm mr-4">Latest</button>
      <Marquee pauseOnHover={true}>
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>
    </div>
  );
};

export default BreakingNews;
