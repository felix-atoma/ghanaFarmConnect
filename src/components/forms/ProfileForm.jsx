import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/Authcontext';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '../../services/firebase';

const UserProfile = () => {
  const { currentUser } = useAuth();
  const [profile, setProfile] = useState({
    name: '',
    location: '',
    contact: '',
  });

  useEffect(() => {
    const fetchProfile = async () => {
      const docRef = doc(db, 'users', currentUser.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProfile(docSnap.data());
      }
    };
    fetchProfile();
  }, [currentUser.uid]);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      await setDoc(doc(db, 'users', currentUser.uid), profile);
      alert('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <input
        type="text"
        name="name"
        value={profile.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="text"
        name="location"
        value={profile.location}
        onChange={handleChange}
        placeholder="Location"
      />
      <input
        type="text"
        name="contact"
        value={profile.contact}
        onChange={handleChange}
        placeholder="Contact"
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default UserProfile;
