import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./signup.css";

const Signup = () => {
  const user = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tel, setTel] = useState();
  const [entreprise, setEntreprise] = useState("");
  const [error, setError] = useState(null);

  const RegisterHundler = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post("/auth/SignUp", {
        lastname,
        firstname,
        tel,
        password,
        email,
        entreprise,
      });
      console.log(data);
      navigate("/login");
    } catch (error) {
      setError("Register failed");
    }
  };

  useEffect(() => {
    user && navigate("/");
  }, [navigate, user]);

  return (
    <div className="register-form">
      <div className="form-box-register">
        <div className="form-value">
          <form action="">
            <h2 className="h-login">Register</h2>
            <div className="inputbox">
              <i className="ri-user-line"></i>
              <input
                onChange={(e) => setFirstname(e.target.value)}
                type="text"
                required
              />
              <label htmlFor="">FirstName</label>
            </div>
            <div className="inputbox">
              <i className="ri-user-line"></i>
              <input
                onChange={(e) => setLastname(e.target.value)}
                type="text"
                required
              />
              <label htmlFor="">LastName</label>
            </div>
            <div className="inputbox">
              <i className="ri-mail-line"></i>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
              />
              <label htmlFor="">Email</label>
            </div>
            <div className="inputbox">
              <i className="bx bxs-phone"></i>
              <input
                onChange={(e) => setTel(e.target.value)}
                type="text"
                required
              />
              <label htmlFor="">Tel</label>
            </div>
            <div className="inputbox">
              <i className="bx bxs-briefcase"></i>{" "}
              <input
                onChange={(e) => setEntreprise(e.target.value)}
                type="text"
                required
              />
              <label htmlFor="">entreprise</label>
            </div>
            <div className="inputbox">
              <i className="ri-lock-fill"></i>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                required
              />
              <label htmlFor="">Password</label>
            </div>

            <button className="log-in" onClick={RegisterHundler}>
              Register
            </button>
            {error && <span className="error">{error}</span>}

            <div className="register-button">
              <br />
              <p>
                You have an Account <Link to="/login">Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
