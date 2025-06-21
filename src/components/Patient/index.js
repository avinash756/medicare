import { Component } from "react";
import { FiUser } from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa6";
import { LuImage } from "react-icons/lu";
import { MdOutlineCameraAlt } from "react-icons/md";
import { MdOutlineCheck } from "react-icons/md";
import Navheader from "../NavHeader";
import "./index.css";
import MedicationCalendar from "../Calendar";

class Patient extends Component {
  state = { isMedicationTaken: false };

  handleMarkAsTaken = () => {
    this.setState({
      isMedicationTaken: true,
    });
  };

  renderSubmitView = () => (
    <>
      <div className="tick-container">
        <MdOutlineCheck size={32} color="#ffffff" className="tick-icon" />
        <h3 className="tick-heading">Medication Completed!</h3>
        <p className="tick-para">
          Great Jo! You've taken your medication for June 20, 2025.
        </p>
      </div>
      <div className="tick-timer-container">
        <MdOutlineCheck className="tick-mini-icon" color="#ffffff" size={22} />

        <div className="">
          <h4
            className="tick-heading"
            style={{ textAlign: "left", marginBottom: "0px" }}
          >
            Daily Medication Set
          </h4>
          <p
            className="tick-para"
            style={{ textAlign: "left", marginTop: "5px", fontSize: "14px" }}
          >
            Complete set of daily tablets
          </p>
        </div>
        <div className="clock-container">
          <FaRegClock size={14} color="#087033" />
          <p>8:00 AM</p>
        </div>
      </div>
    </>
  );

  renderMedicationView = () => (
    <>
      <div className="time-remaindar">
        <div className="counter-number">1</div>
        <div className="heading3-container">
          <h3 className="timer-remaindar-heading">Daily Medication Set</h3>
          <p className="timer-remaindar-para">Complete set of daily tablets</p>
        </div>
        <div className="time">
          <FaRegClock />
          <p>8:00 AM</p>
        </div>
      </div>
      <div className="attendance-mark-container">
        <LuImage className="photo-icon" />
        <h4>Add Proof Photo (Optional)</h4>
        <p className="attendance-mark-para">
          Take a photo of your medication or pill organizer as confirmation
        </p>
        <label htmlFor="upload" className="upload-label">
          <MdOutlineCameraAlt /> Take Photo
        </label>
        <input id="upload" type="file" accept="image/*" placeholder="Take" />
      </div>
      <button className="mark-taken-button" onClick={this.handleMarkAsTaken}>
        <MdOutlineCheck /> Mark as Taken
      </button>
    </>
  );

  render() {
    const { isMedicationTaken } = this.state;

    return (
      <div className="patient-container">
        <Navheader />
        <div className="main-container">
          <div className="progress-container">
            <div className="greeting-container">
              <div>
                <FiUser className="profile-icon" />
              </div>
              <div>
                <h1 className="greeting-heading">Good Evening!</h1>
                <p className="greeting-description">
                  Ready to stay on track with your medication?
                </p>
              </div>
            </div>
            <div className="streak-display-container">
              <div className="streak-container">
                <p className="bold-text">0</p>
                <p>Day Streak</p>
              </div>
              <div className="streak-container">
                <p className="bold-text">0</p>
                <p>Today's Status</p>
              </div>
              <div className="streak-container">
                <p className="bold-text">0%</p>
                <p>Monthly Rate</p>
              </div>
            </div>
          </div>
          <div className="large-display-container">
            <div className="medication-container">
              <div className="calendar-icon-container">
                <FiCalendar className="calendar-icon" />
                <h2>Today's Medication</h2>
              </div>
              <div></div>
              {isMedicationTaken
                ? this.renderSubmitView()
                : this.renderMedicationView()}
            </div>
            <div className="calendar-container">
              <h1 style={{fontFamily:"Inter",fontSize:"18px"}}>Medication Calendar</h1>
              <MedicationCalendar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Patient;
