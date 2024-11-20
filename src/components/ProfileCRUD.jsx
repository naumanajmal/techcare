import React, { useState, useEffect } from 'react';
import { PencilIcon, TrashIcon, PlusIcon, XIcon } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchProfiles,
  addProfile,
  updateProfile,
  deleteProfile,
} from '../redux/profileSlice';
import Button from './profileCrud/Button';
import FormInput from './profileCrud/FormInput';
import InfoRow from './profileCrud/InfoRow';
import Modal from './profileCrud/Modal';

const ProfileCRUD = () => {
  const dispatch = useDispatch();
  const [deleteFlag, setDeleteFlag] = useState(false);
  const { profiles, loading } = useSelector((state) => state.profiles);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProfile, setCurrentProfile] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const initialProfileState = {
    name: '',
    description: '',
    email: '',
    phoneNumber: '',
    website: '',
    gender: '',
    dateOfBirth: '',
    nationality: '',
    nationalIdNumber: '',
    country: '',
    province: '',
    city: '',
    postalCode: '',
    address: '',
  };
  const [formData, setFormData] = useState(initialProfileState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdd = () => {
    setIsEditing(false);
    setFormData(initialProfileState);
    setShowModal(true);
  };

  const handleEdit = (profile) => {
    setIsEditing(true);
    setFormData(profile);
    setCurrentProfile(profile);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    dispatch(deleteProfile(id));
    setDeleteFlag((prev) => !prev); // Trigger re-fetch
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      dispatch(updateProfile({ ...formData, id: currentProfile._id }));
    } else {
      dispatch(addProfile(formData));
    }
    setShowModal(false);
  };

  useEffect(() => {
    dispatch(fetchProfiles());
  }, [dispatch, deleteFlag]);

  return (
    <div className="p-6 space-y-6 rounded-lg shadow-lg  ">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">About Simon Junior</h1>
        <Button onClick={handleAdd} className="bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2">
          <PlusIcon size={16} /> Add Profile
        </Button>
      </div>
      <div className="w-full h-px bg-gray-200 my-4" />
      <p className="text-sm font-normal leading-5 text-customGray">
        Damac® Properties Dubai — Exciting Investment Opportunities With Guaranteed Returns Of Up To 8% On Selected Projects.
      </p>
      <div className="w-full h-px bg-gray-200 my-4" />
      <div className="w-full h-px my-4" />
      {loading && <p>Loading...</p>}
      {profiles.map((profile) => (
        <div key={profile._id} className=" p-6 rounded-lg mb-6 bg-lightGray">
          <div className="flex justify-end pb-4">
            <div className="flex gap-2">
              <Button onClick={() => handleEdit(profile)} className="border border-gray-300 hover:bg-gray-100">
                <PencilIcon size={16} />
              </Button>
              <Button onClick={() => handleDelete(profile._id)} className="bg-red-600 text-white hover:bg-red-700">
                <TrashIcon size={16} />
              </Button>
            </div>
          </div>
          <div className="space-y-1">
            {Object.keys(profile)
              .filter((key) => key !== "_id") // Exclude the '_id' key
              .slice(0, -1) // Exclude the last key-value pair
              .map((key) => (
                <InfoRow key={key} label={key} value={profile[key]} />
              ))}
          </div>

        </div>
      ))}
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <form onSubmit={handleSubmit}>
            <h2 className="text-xl font-semibold">{isEditing ? 'Edit Profile' : 'Add New Profile'}</h2>
            {Object.keys(initialProfileState).map((key) => (
              <FormInput key={key} label={key} name={key} value={formData[key]} onChange={handleInputChange} />
            ))}
            <div className="flex justify-end gap-3 mt-6">
              <Button onClick={() => setShowModal(false)} className="border border-gray-300 hover:bg-gray-100">
                Cancel
              </Button>
              <Button type="submit" className="bg-blue-600 text-white hover:bg-blue-700">
                {isEditing ? 'Update' : 'Add'} Profile
              </Button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default ProfileCRUD;
