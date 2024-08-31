
import logo from "../../../assets/logo.png"
import moment from 'moment';
const Header = () => {
    return (
        <div className="text-center mt-12">
          <img className="mx-auto mb-3" src={logo} alt="" />
          <p className="mb-3">Journalism Without Fear or Favour</p>    
          <p>
        {  moment().format("dddd, MMMM DD, YYYY")}
          </p>
        </div>
    );
};

export default Header;