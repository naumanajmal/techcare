import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import PatientList from "./components/PatientList";
import DiagnosisHistory from "./components/DiagnosisHistory";
import ProfileCard from "./components/ProfileCard";
import LabReports from "./components/LabReports";
import DiagnosticList from "./components/DiagnosticList";

export default function App() {
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const username = "coalition";
        const password = "skills-test";
        const authKey = btoa(`${username}:${password}`); // Base64 encoding

        const response = await fetch(
          "https://fedskillstest.coalitiontechnologies.workers.dev",
          {
            method: "GET",
            headers: {
              Authorization: `Basic ${authKey}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();

        // Filter to get only Jessica Taylor's data
        const jessicaData = data.find((patient) => patient.name === "Jessica Taylor");
 console.log(jessicaData)
        setPatient(jessicaData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Error: {error}</p>
      </div>
    );
  }

  if (!patient) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>No data available for Jessica Taylor.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-lightGray h-full min-h-screen items-center">
    <div className="sticky top-0 z-10 w-full">
      <Header />
    </div>
    <div className="flex w-full flex-col lg:flex-row space-x-0 lg:space-x-2 max-w-7xl">
      {/* ProfileCard and LabReports on top for mobile screens */}
      <div className="space-y-3 order-1 lg:order-3 px-3 items-center">
        <ProfileCard patient={patient} />
        <LabReports labResults={patient.lab_results} />
      </div>
      {/* PatientList visible only for large screens */}
      <div className="hidden lg:block order-2">
        <PatientList />
      </div>
      {/* DiagnosisHistory and DiagnosticList */}
      <div className="space-y-3 flex-1 order-3 lg:order-2 px-3 mt-4 lg:mt-0">
        <DiagnosisHistory diagnosisHistory={patient.diagnosis_history} />
        <DiagnosticList diagnosticList={patient.diagnostic_list} />
      </div>
    </div>
  </div>
  
  );
}
