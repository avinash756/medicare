import { Component } from "react";
import { IoWarningOutline } from "react-icons/io5";
import { MdOutlineCheck } from "react-icons/md";
import { MdOutlineCameraAlt } from "react-icons/md";

import "./index.css";

class RecentActivity extends Component {
  render() {
    return (
      <div className="recentActivityContainer">
        <h1 className="recent-heading">Recent Medication Activity</h1>
        <div className="details-container">
          <div className="details-correct-container">
            <MdOutlineCheck className="judge-icon" />
            <div className="date-container">
              <h2 className="date-heading">Monday, June 10</h2>
              <p className="date-time">Taken at 8:30 AM</p>
            </div>
          </div>
          <div className="details-correct-container">
            <div className="photo-status">
              <MdOutlineCameraAlt />
              <p>Photo</p>
            </div>
            <p className="completed-status"> Completed</p>
          </div>
        </div>
        <div className="details-container">
          <IoWarningOutline className="warning-icon" />
          <div className="date-container">
            <h2 className="date-heading">Monday, June 10</h2>
            <p className="date-time">Taken at 8:30 AM</p>
          </div>

          <p className="incomplete-status"> Missed</p>
        </div>
      </div>
    );
  }
}

export default RecentActivity;
