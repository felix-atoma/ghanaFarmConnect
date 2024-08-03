import React from 'react';
import ProfileForm from '../components/forms/ProfileForm';
import { useAuth } from '../context/Authcontext';

const Profile = () => {
  const { userProfile, updateProfile } = useAuth();

  return (
    <div className="container mx-auto p-4">
      <ProfileForm userProfile={userProfile} updateProfile={updateProfile} />
    </div>
  );
};

export default Profile;
