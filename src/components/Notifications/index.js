import { Component } from "react";
import { LuBell } from "react-icons/lu";
import { MdMailOutline } from "react-icons/md";
import "./index.css";

class Notifications extends Component {
  state = { isOn: true, isAlertOn: true };

  

  render() {
    const { isOn, isAlertOn } = this.state;
    return (
      <>
        <div className="notification-container">
          <div className="notification-bell-heading">
            <LuBell size={22} style={{ color: "blue" }} />
            <h1 className="notification-heading"> Notification Preferences</h1>
          </div>
          <div className="toggle-container">
            <div>
              <h3 className="email-heading">Email Notifications</h3>
              <p className="email-para">Receive medication alerts via email</p>
            </div>
            <div
              role="switch"
              aria-checked={isOn}
              onClick={() =>
                this.setState((prevState) => ({ isOn: !prevState.isOn }))
              }
              style={{
                backgroundColor: isOn ? "#000000" : "#d1d5db",
                transition: "background-color 0.3s ease",
              }}
              className="toggle"
            >
              <div
                style={{
                  transform: isOn ? "translateX(28px)" : "translateX(0px)",
                  transition: "transform 0.3s ease",
                }}
                className="toggle-circle"
              />
            </div>
          </div>
          <div>
            {isOn && (
              <div className="email-input-container">
                <label className="email-input-label">Email Address</label>
                <input type="email" className="email-input" />
              </div>
            )}
          </div>
          <hr style={{ marginTop: "30px" }} />
          <div className="toggle-container">
            <div>
              <h3 className="email-heading">Missed Medication Alerts</h3>
              <p className="email-para">
                Get notified when medication is not taken on time
              </p>
            </div>

            {/* Toggle Button */}
            <div
              role="switch"
              aria-checked={isOn}
              onClick={() =>
                this.setState((prevState) => ({
                  isAlertOn: !prevState.isAlertOn,
                }))
              }
              style={{
                backgroundColor: isAlertOn ? "#000000" : "#d1d5db",
                transition: "background-color 0.3s ease",
              }}
              className="toggle"
            >
              <div
                style={{
                  transform: isAlertOn ? "translateX(28px)" : "translateX(0px)",
                  transition: "transform 0.3s ease",
                }}
                className="toggle-circle"
              />
            </div>
          </div>{" "}
          <div>
            {isAlertOn && (
              <>
                <div className="email-input-container">
                  <p className="email-input-label">
                    Alert me if medication isn't taken within
                  </p>
                  <select className="email-input">
                    <option>1 hours</option>
                    <option selected>2 hours</option> <option>3 hours</option>
                    <option>4 hours</option> <option>5 hours</option>
                  </select>
                </div>
                <div className="email-input-container">
                  <p className="email-input-label">Daily reminder time</p>
                  <input type="time" value="20:00" className="email-input" onChange={this.emailFunction}/>
                  <p className="email-input-para">
                    Time to check if today's medication was taken
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="email-preview-container">
          <div>
            <div className="email-heading-container">
              <MdMailOutline size={24} color="lightgreen" />
              <h1 className="notification-heading">Email Preview</h1>
            </div>

            <div className="email-container">
              <h3 className="email-subject">
                Subject: Medication Alert - Eleanor Thompson
              </h3>
              <p className="email-para2">
                Hello,
                <br />
                This is a remainder that Eleanor Thompson has not taken her
                medication today. Please check with her to ensure she takes her
                prescribed medication.
                <br />
                Current adherence rate: 85% (5-day streak)
              </p>
            </div>
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <button className="save-button">Save Notification Settings</button>
        </div>
      </>
    );
  }
}

export default Notifications;
