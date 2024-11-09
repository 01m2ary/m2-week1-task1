import Content from "../../components/content/content";
import "./selectAccountType.css";
import User03 from "./03_user.png";
import User07 from "./07_user-search-01.png";
import Vector from "./Vector.png";



const SelectAccountType = () => {
  return (
    <div className="contentSelectAccountType">
      <Content />
      <div className="Main-Continar">
        <div className="Header">
          <div className="Steps">
            <div className="line13"></div>
            <div className="line12"></div>
            <div className="line14"></div>
          </div>
          <div className="getStarted">
            <h1>Let’s Get started!</h1>
            <p>How do you plan to use this platform</p>
          </div>
          <div className="signUpFrom">
            <div className="SelectAccountType-F-C">
              <div className="accountTypeCardFreelancer">
                <img src={User03} alt="User03" />
                <h1>Freelancer</h1>
                <p>I’m a freelancer ready to work for projects</p>
              </div>
              <div className="accountTypeCardClient">
                <img src={User07} alt="User07" />
                <h1>Client</h1>
                <p>I’m a client searching for talented freelancers</p>
              </div>
            </div>
            <button className="primaryButton">
              Next <img src={Vector} alt="Vector" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default SelectAccountType;