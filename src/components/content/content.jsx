import "./content.css";
import ContentImage from './Content.png';

const Content = () => {
  return (
    <div className="content1">
      <div className="image-container">
        <img src={ContentImage} alt="ImageContent" /> 
        <div className="text-overlay">
          <h1>Welcome to Your <br /> Freelancing Hub!</h1>
          <p>
          We’re thrilled to have you here! Whether you're a client searching for skilled freelancers to bring your projects to life or a freelancer eager to find exciting opportunities, this is the place where connections are made, and ideas come to reality. Let's start building something amazing together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
