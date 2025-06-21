import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./index.css";

function MedicationCalendar() {
  const [data] = useState({
    "2025-08-01": "missed",
    "2025-08-02": "taken",
    "2025-08-06": "missed",
    "2025-08-07": "taken",
    "2025-08-20": "missed",
    "2025-08-21": "taken",
  });

  const formatKey = (date) => date.toISOString().split("T")[0];

  const tileContent = ({ date, view }) => {
    if (view !== "month") return null;
    const key = formatKey(date);
    const status = data[key];

    if (status === "taken") return <div className="dot green" />;
    if (status === "missed") return <div className="dot red" />;
    return null;
  };

  const tileClassName = ({ date, view }) => {
    const isToday = date.toDateString() === new Date().toDateString();
    return view === "month" && isToday ? "today-cell" : null;
  };

  return (
    <div className="med-calendar-container">
      <Calendar
        view="month"
        tileContent={tileContent}
        prev2Label={null}
        next2Label={null}
        tileClassName={tileClassName}
        calendarType="hebrew"
        className="calendar"
        formatShortWeekday={(locale, date) =>
          date.toLocaleDateString(locale, { weekday: "short" }).slice(0, 2)
        }
      />
      <div className="legend">
        <p className="details">
          <span className="dot green"></span>Medication taken
        </p>
        <p className="details">
          <span className="dot red"></span>Missed medication
        </p>
        <p className="details">
          <span className="dot blue"></span>Today
        </p>
      </div>
    </div>
  );
}

export default MedicationCalendar;
