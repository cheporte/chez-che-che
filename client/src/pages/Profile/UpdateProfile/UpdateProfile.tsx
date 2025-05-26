import React, { useState, useEffect } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebase";
import { getAuth } from "firebase/auth";

import RestaurantButton from "@components/RestaurantButton";

import "@styles/pages/updateProfile.sass";
import { useNavigate } from "react-router-dom";

const UpdateProfile: React.FC = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  const navigate = useNavigate();


  const [form, setForm] = useState({
    displayName: "",
    bio: "",
    location: "",
    favoriteCuisine: "",
    allergies: "",
    isVIP: false,
  });

  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");

  useEffect(() => {
    const fetchProfile = async () => {
      if (!user) return;

      const docRef = doc(db, "users", user.uid);
      const snapshot = await getDoc(docRef);

      if (snapshot.exists()) {
        const data = snapshot.data();
        setForm({
          displayName: data.displayName || "",
          bio: data.bio || "",
          location: data.location || "",
          favoriteCuisine: data.favoriteCuisine || "",
          allergies: (data.allergies || []).join(", "),
          isVIP: data.isVIP || false,
        });
      }
      setLoading(false);
    };

    fetchProfile();
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const redirectToProfile = () => {
    navigate(`/profile/${user?.uid}`)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("saving");

    try {
      const docRef = doc(db, "users", user!.uid);
      await updateDoc(docRef, {
        ...form,
        allergies: form.allergies.split(",").map((a) => a.trim()),
      });
      setStatus("saved");
    } catch (err) {
      console.error("Error updating profile:", err);
      setStatus("error");
    }
  };

  if (loading) return <p>Loading profile data...</p>;

  return (
    <div className="update-profile-page">
      <h1>Edit Your Culinary Identity 🍽️</h1>
      <form onSubmit={handleSubmit} className="profile-form">
        <label>
          Display Name
          <input name="displayName" value={form.displayName} onChange={handleChange} />
        </label>

        <label>
          Bio
          <textarea name="bio" value={form.bio} onChange={handleChange} />
        </label>

        <label>
          Location
          <input name="location" value={form.location} onChange={handleChange} />
        </label>

        <label>
          Favorite Cuisine
          <input name="favoriteCuisine" value={form.favoriteCuisine} onChange={handleChange} />
        </label>

        <label>
          Allergies (comma separated)
          <input name="allergies" value={form.allergies} onChange={handleChange} />
        </label>

        <label>
          <input type="checkbox" name="isVIP" checked={form.isVIP} onChange={handleChange} />
          VIP Member? 🌟
        </label>

        <RestaurantButton variant="primary" size="lg" type="submit">
          Save Changes
        </RestaurantButton>

        <RestaurantButton variant="primary" size="lg" onclick={redirectToProfile}>
          Back to Profile
        </RestaurantButton>

        {status === "saved" && <p className="success">Profile updated successfully! 🎉</p>}
        {status === "error" && <p className="error">Oops! Something went wrong 😢</p>}
      </form>
    </div>
  );
};

export default UpdateProfile;
