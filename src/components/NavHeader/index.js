import { FiUsers, FiUser } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const Navheader = () => {
  const location = useLocation();
  const isPatientView = location.pathname === "/patient";

  const viewLabel = isPatientView ? "Patient View" : "Caretaker View";
  const nextRoute = isPatientView ? "/caretaker" : "/patient";
  const icon = isPatientView ? <FiUsers /> : <FiUser />;
  const buttonLabel = isPatientView ? "Switch to Caretaker" : "Switch to Patient";

  return (
    <nav className="nav-header">
      <div className="nav-flex">
        <div className="patient-icon">M</div>
        <div className="heading-container">
          <h1 className="nav-heading">MediCare Companion</h1>
          <p className="nav-viewname">{viewLabel}</p>
        </div>
      </div>

      <Link to={nextRoute} className="switch-tab-container">
        {icon}
        <p className="switch-heading">{buttonLabel}</p>
      </Link>
    </nav>
  );
};

export default Navheader;
