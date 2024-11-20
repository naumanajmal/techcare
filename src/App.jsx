import Header from "./components/Header";
import PatientList from "./components/PatientList";
import DiagnosisHistory from "./components/DiagnosisHistory";
import ProfileCard from "./components/ProfileCard";
import LabReports from "./components/LabReports";
import DiagnosticList from "./components/DiagnosticList";

export default function App() {
  return (
    <div className="flex flex-col bg-lightGray h-full min-h-screen items-center">
 
        <Header />
        <div className="flex  w-full  flex-col lg:flex-row space-x-2     max-w-7xl ">
          <PatientList />
          <div className="space-y-3 flex-1 ">
            <DiagnosisHistory />
            <DiagnosticList />
          </div>
          <div className="space-y-3 px-3  ">
            <ProfileCard />
            <LabReports />
          </div>
        </div>
 
    </div>
  );
}
