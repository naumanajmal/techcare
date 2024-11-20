import React from 'react';
import { Calendar, Phone, Heart, Building } from 'lucide-react';

const ProfileCard = () => {
  const patientInfo = {
    name: "Jessica Taylor",
    image: "/api/placeholder/200/200",
    birthDate: "August 23, 1996",
    gender: "Female",
    contact: "(415) 555-1234",
    emergency: "(415) 555-5678",
    insurance: "Sunrise Health Assurance"
  };

  return (
    <div className=" p-4 bg-white rounded-xl">
      <div className="flex flex-col items-center ">
        <img 
          src='/healthcare/Layer_22.png'
          alt={patientInfo.name}
          className="w-[200px] h-[200px] rounded-full mb-4 object-cover"
        />
        
        <h2 className="text-[24px] font-extrabold mb-6 text-darkGray">{patientInfo.name}</h2>
        
        <div className="w-full space-y-5">
          <div className="flex items-center gap-3">
            <img src='/healthcare/BirthIcon.svg'></img>
            <div>
              <p className=" text-darkGray font-medium text-sm">Date Of Birth</p>
              <p className="text-sm font-bold text-darkGray">{patientInfo.birthDate}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
          <img src='/healthcare/FemaleIcon.svg'></img>
            <div>
              <p className=" text-darkGray font-medium text-sm">Gender</p>
              <p className="text-sm font-bold text-darkGray">{patientInfo.gender}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
          <img src='/healthcare/PhoneIcon.svg'></img>
            <div>
              <p className="text-darkGray font-medium text-sm">Contact Info</p>
              <p className="text-sm font-bold text-darkGray">{patientInfo.contact}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
          <img src='/healthcare/PhoneIcon.svg'  ></img>
            <div>
              <p className="text-darkGray font-medium text-sm">Emergency Contacts</p>
              <p className="text-sm font-bold text-darkGray">{patientInfo.emergency}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
          <img src='/healthcare/InsuranceIcon.svg'></img>
            <div>
              <p className="text-darkGray font-medium text-sm">Insurance Provider</p>
              <p className="text-sm font-bold text-darkGray">{patientInfo.insurance}</p>
            </div>
          </div>
        </div>

        <button className="w-3/4 mt-10 bg-lightGreen text-darkGray py-2 rounded-full  font-bold">
          Show All Information
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;