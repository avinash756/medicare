import { Component } from "react";
import { FiUsers, FiCalendar, FiClock } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { LuBell } from "react-icons/lu";
import Navheader from "../NavHeader";
import MedicationCalendar from "../Calendar";
import Notifications from "../Notifications";
import "./index.css";
import RecentActivity from "../recentActivity";

const activeTabStatus = {
  overview: "OverView",
  recentActivity: "RecentActivity",
  calenderView: "CalenderView",
  notifications: "Notifications",
};

class Caretaker extends Component {
  state = { activeTab: activeTabStatus.overview };

  setActiveTab = (tab) => {
    this.setState({ activeTab: tab });
  };

  renderTabContent() {
    const { activeTab } = this.state;
    switch (activeTab) {
      case "OverView":
        return this.renderOverView();
      case "RecentActivity":
        return this.recentActivity();
      case "CalenderView":
        return this.renderCalenderView();
      case "Notifications":
        return this.notifications();
      default:
        return null;
    }
  }

  renderOverView = () => (
    <div className="overview-container">
      <div className="status-container">
        <div className="calendar-view">
          <FiCalendar className="calendar-icon" />
          <h2 className="status-heading">Todays's Status</h2>
        </div>
        <div className="time-status-container">
          <div className="time-status-para">
            <h3>Daily Medication Set</h3>
            <p>8:00 AM</p>
          </div>
          <p>Pending</p>
        </div>
      </div>
      <div className="actions-container">
        <h3>Quick Actions</h3>
        <button
          onClick={() => alert("Remainder email sent to Eleanor Thompson")}
        >
          <MdMailOutline className="switch-tab-icons" />
          Send Remainder Email
        </button>
        <button
          onClick={() => this.setActiveTab(activeTabStatus.notifications)}
        >
          <LuBell className="switch-tab-icons" />
          Configure Notifications
        </button>
        <button onClick={() => this.setActiveTab(activeTabStatus.calenderView)}>
          <FiCalendar className="switch-tab-icons" /> View Full Calendar
        </button>
      </div>
      <div className="over-all-progress">
        <h3>Monthly Adherence Progress</h3>
        <div>
          <div className="progress-percent">
            <p>Overall Progress</p>
            <p>85%</p>
          </div>
          <div className="progress-range">
            <div
              style={{
                width: `85%`,
                height: "100%",
                backgroundColor: "black",
                borderRadius: "20px",
              }}
            ></div>
          </div>
          <div className="progress-range-container">
            <div className="">
              <p className="days" style={{ color: "green" }}>
                22 days
              </p>
              <p className="days-para">Taken</p>
            </div>
            <div className="">
              <p className="days" style={{ color: "red" }}>
                3 days
              </p>
              <p className="days-para">Missed</p>
            </div>
            <div className="">
              <p className="days" style={{ color: "blue" }}>
                5 days
              </p>
              <p className="days-para">Remaining</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  renderCalenderView = () => (
    <div className="calendar-tab">
      <div>
        <h1 className="calendar-heading">Medication Calendar Overview</h1>
        <MedicationCalendar />
      </div>
      <div>
        <h5>Details for June 20, 2025</h5>
        <div className="calendar-note">
          <div className="timer-container">
            <FiClock className="switch-tab-icons" />
            <p>Today</p>
          </div>
          <p>Monitor Eleanor Thompson`s medication status for today</p>
        </div>
      </div>
    </div>
  );

  recentActivity = () => <RecentActivity />;

  notifications = () => <Notifications />;

  render() {
    const { activeTab } = this.state;
    return (
      <>
        <div className="caretaker-container">
          <Navheader />
          <div className="caretaker-main-container">
            <div className="progress-container">
              <div className="greeting-container">
                <div>
                  <FiUsers className="profile-icon" />
                </div>
                <div>
                  <h1 className="greeting-heading">Caretaker Dashboard</h1>
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
                <div className="streak-container">
                  <p className="bold-text">0%</p>
                  <p>Monthly Rate</p>
                </div>
              </div>
            </div>
            <div className="tab-container">
              <button
                className={`${
                  activeTab === activeTabStatus.overview
                    ? "active-button"
                    : "button"
                }`}
                onClick={() => this.setActiveTab(activeTabStatus.overview)}
              >
                Overview
              </button>
              <button
                className={`${
                  activeTab === activeTabStatus.recentActivity
                    ? "active-button"
                    : "button"
                }`}
                onClick={() =>
                  this.setActiveTab(activeTabStatus.recentActivity)
                }
              >
                {" "}
                Recent Activity
              </button>
              <button
                className={`${
                  activeTab === activeTabStatus.calenderView
                    ? "active-button"
                    : "button"
                }`}
                onClick={() => this.setActiveTab(activeTabStatus.calenderView)}
              >
                Calendar View
              </button>
              <button
                className={`${
                  activeTab === activeTabStatus.notifications
                    ? "active-button"
                    : "button"
                }`}
                onClick={() => this.setActiveTab(activeTabStatus.notifications)}
              >
                Notification
              </button>
            </div>
            <div>{this.renderTabContent()}</div>
          </div>
        </div>
      </>
    );
  }
}

export default Caretaker;
