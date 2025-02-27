import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleForm = () => {
    navigate("/form");
  };

  return (
    <div className="content-frame">
      <h3>Please click the button below to fill out the Employee Form.</h3>
      <button className="btn" onClick={handleForm}>
        EMPLOYEE FORM
      </button>
    </div>
  );
};

export default Home;
