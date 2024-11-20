import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import "../firebase.jsx";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  async function signup(email, password, username) {
    try {
      setLoading(true);
      setError(null);
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName: username });
      setCurrentUser(auth.currentUser);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function login(email, password) {
    try {
      setLoading(true);
      setError(null);
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      setCurrentUser(auth.currentUser);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  function logout() {
    signOut(getAuth())
      .then(() => {
        setCurrentUser(null);
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  const value = {
    currentUser,
    loading,
    error,
    signup,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
