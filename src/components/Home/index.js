import { FaRegHeart } from "react-icons/fa";
import { FiUser, FiUsers } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Component } from "react";
import "./index.css";

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <FaRegHeart className="icon-container" />
        <h1 className="home-heading">Welcome to MediCare Companion</h1>
        <p className="home-description">
          Your trusted partner in medication management. Choose your role to get
          started with personalized features.
        </p>
        <div className="responsive-container">
          <div className="profile-container">
            <FiUser className="icon" />
            <h2 className="container-heading">I'm a Patient</h2>
            <p className="container-description">
              Track your medication schedule and maintain your health records
            </p>
            <ul className="list-items">
              <li>Mark medications as taken</li>
              <li>Upload proof photos(optional)</li>
              <li>View your medication calender</li>
              <li>Large easy-to-use interface</li>
            </ul>
            <Link to="/patient">
              <button className="container-button">Continue as Patient</button>
            </Link>
          </div>
          <div className="profile-container profile-container2">
            <FiUsers className="icon users-icon" />
            <h2 className="container-heading">I'm a Caretaker</h2>
            <p className="container-description">
              Monitor and support your loved one's medication adherence
            </p>
            <ul className="list-items2">
              <li>Monitor medication compliance</li>
              <li>Set up notification Preferences</li>
              <li>View detailed reports</li>
              <li>Recieve email alerts</li>
            </ul>
            <Link to="/caretaker">
              <button className="container-button second">
                Continue as Caretaker
              </button>
            </Link>
          </div>
        </div>

        <p className="note-para">
          You can switch between roles anytime after setup
        </p>
      </div>
    );
  }
}

export default Home;
