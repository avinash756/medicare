import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import AdherenceDisplay from "../AdherenceDisplay";

function CaretakerDashboard() {
  const [medications, setMedications] = useState([]);
  const [form, setForm] = useState({ name: "", dosage: "", frequency: "" });

  const fetchMedications = async () => {
    try {
      const res = await axios.get("http://localhost:5000/medications");
      setMedications(res.data);
    } catch (err) {
      console.error("Failed to fetch medications:", err);
    }
  };

  const handleAdd = async () => {
    const { name, dosage, frequency } = form;
    if (!name || !dosage || !frequency) return alert("Please fill all fields");

    try {
      await axios.post("http://localhost:5000/medications", form);
      setForm({ name: "", dosage: "", frequency: "" });
      fetchMedications();
    } catch (err) {
      console.error("Add failed:", err);
    }
  };

  const handleMarkTaken = async (id) => {
    try {
      await axios.put(`http://localhost:5000/medications/${id}/taken`);
      fetchMedications();
    } catch (err) {
      console.error("Mark taken failed:", err);
    }
  };

  useEffect(() => {
    fetchMedications();
  }, []);

  return (
    <div className="caretaker-container">
      <h2>Add Medication</h2>
      <div className="form-section">
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Dosage"
          value={form.dosage}
          onChange={(e) => setForm({ ...form, dosage: e.target.value })}
        />
        <input
          type="text"
          placeholder="Frequency"
          value={form.frequency}
          onChange={(e) => setForm({ ...form, frequency: e.target.value })}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <h3>Medication List</h3>
      <ul className="medication-list">
        {medications.map((med) => (
          <li key={med.id}>
            <strong>{med.name}</strong> - {med.dosage} - {med.frequency} -&nbsp;
            {med.taken ? (
              <span className="taken">Taken ✅</span>
            ) : (
              <button onClick={() => handleMarkTaken(med.id)}>
                Mark as Taken
              </button>
            )}
          </li>
        ))}
      </ul>
      <AdherenceDisplay />
    </div>
  );
}

export default CaretakerDashboard;
