import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { Link } from "react-router-dom";

import RestaurantButton from "@components/RestaurantButton";

import TestPFP from "@assets/cherry-logo.png";

import LoadingPage from "@pages/LoadingPage";

import "@styles/pages/profile.sass";

type VisitorProfile = {
  uid: string;
  email: string;
  createdAt: any; // Firestore Timestamp
  displayName: string;
  photoURL?: string;
  role?: string;

  bio?: string;
  favoriteCuisine?: string;
  allergies?: string[];
  visitedRestaurants?: string[];
  wishlist?: string[];
  location?: string;
  isVIP?: boolean;
};

const Profile: React.FC<VisitorProfile> = () => {
  const { id } = useParams<{ id: string }>();
  const [profile, setProfile] = useState<VisitorProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!id) return;

      try {
        const docRef = doc(db, 'users', id);
        const snapshot = await getDoc(docRef);

        if (snapshot.exists()) {
          setProfile(snapshot.data() as VisitorProfile);
        }
      } catch (err) {
        console.error("Error fetching profile: ", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [id]);

  if (loading) return <LoadingPage />;
  if (!profile) return <p>Restaurant visitor not found 🫤</p>;

  const {
    displayName,
    email,
    photoURL,
    createdAt,
    bio,
    favoriteCuisine,
    allergies,
    wishlist,
    location,
    isVIP,
  } = profile;

  return (
    <div className="profile-page">
      <div className="profile-page__container">
        <img
          src={TestPFP}
          alt="avatar"
          className="avatar"
        />
        <h1>{displayName || "Mystery Diner"}</h1>
        {isVIP && <span className="badge">🌟 VIP Member</span>}
        <p className="bio">{bio || "This visitor hasn’t shared their story yet..."}</p>

        <div className="info">
          <div>
            <h4>📧 Email</h4>
            <p>{email}</p>
          </div>
          <div>
            <h4>📍 Location</h4>
            <p>{location || "Unknown"}</p>
          </div>
          <div>
            <h4>🍝 Favorite Cuisine</h4>
            <p>{favoriteCuisine || "Open to everything 😋"}</p>
          </div>
          <div>
            <h4>🚫 Allergies</h4>
            <p>{allergies?.length ? allergies.join(", ") : "None"}</p>
          </div>
          <div>
            <h4>💌 Wishlist</h4>
            <p>{wishlist?.length || 0} restaurants</p>
          </div>
          <div>
            <h4>🕰️ Joined</h4>
            <p>{createdAt?.toDate?.().toLocaleDateString() || "???"}</p>
          </div>
        </div>
        <Link to={`/profile/${id}/update`}>
          <RestaurantButton variant='primary' size='md'>Update Profile</RestaurantButton>
        </Link>
        <Link to="/">
          <RestaurantButton variant='primary' size='md'>Back to Main</RestaurantButton>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
