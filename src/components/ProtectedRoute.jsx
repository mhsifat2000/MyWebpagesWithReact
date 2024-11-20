import React from "react";
import { Navigate, Outlet} from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function ProtectedRoute() {
     const {currentUser}= useAuth();
  return (
       currentUser? <Outlet/> : <Navigate to="logIn"/>
  );
}