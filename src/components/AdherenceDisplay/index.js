import { useEffect, useState } from "react";
import axios from "axios";

const AdherenceDisplay = () => {
  const [adherence, setAdherence] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/medications/adherence")
      .then((res) => {
        setAdherence(res.data.adherence);
      })
      .catch((err) => {
        console.error("Error fetching adherence:", err);
      });
  }, []);

  return (
    <div style={{ padding: "10px", fontSize: "18px", fontWeight: "bold" }}>
      Adherence: {adherence !== null ? `${adherence}%` : "Loading..."}
    </div>
  );
};

export default AdherenceDisplay;
