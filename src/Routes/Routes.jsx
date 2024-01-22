import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import PublicRoutes from "./Public/PublicRoutes";
import ProtectedRoutes from "./Protected/ProtectedRoutes";

import Profile from "../pages/appStack/profile";
import Register from "../pages/authStack/Register/Register";
import Dashboard from "../pages/appStack/dashboard/dashboard";
import SidebarNavbarWrapper from "../components/Layouts/SidebarNavbarWrapper";

import Login from "../pages/authStack/Auth/Login";
import Denied from "../pages/errorStack";
import Pointage from "../pages/appStack/Gestion RH/Pointage/Pointage";
import Employes from "../pages/appStack/Gestion RH/Employés/Employes";
import Project from "../pages/appStack/Fichier/Project/Project";
import Lot from "../pages/appStack/Fichier/Lot/Lot";
import TypeLot from "../pages/appStack/Fichier/TypeLot/TypeLot";
import Utilisateur from "../pages/appStack/Utilisateur/Utilisateur";
import Acquereur from "../pages/appStack/Fichier/Acquereur/Acquereur";


const MainRoutes = () => (
  <Routes>
    {/** Protected Routes */}
    <Route path="/" element={<ProtectedRoutes roleRequired={1 || 2} />}>
        <Route element={<SidebarNavbarWrapper />}>
          <Route path="/" element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="projets" element={<Project />} />
          <Route path="lots" element={<Lot />} />
          <Route path="Type de Lot" element={<TypeLot/>} />
          <Route path="profile" element={<Profile />} />
          <Route path="utilisateur" element={<Utilisateur />} />
          <Route path="acquereur" element={<Acquereur />} />
          <Route path="pointage" element={<Pointage />} />
          <Route path="employés" element={<Employes />} />

          
        </Route>
    </Route>

    {/** Public Routes */}
    <Route path="login" element={<PublicRoutes />}>
      <Route path="/login" element={<Login />} />
    </Route>
    <Route path="register" element={<PublicRoutes />}>
      <Route path="/register" element={<Register />} />
    </Route>
    <Route path="denied" element={<PublicRoutes />}>
      <Route path="/denied" element={<Denied />} />
    </Route>
    {/** Permission denied route */}
  </Routes>
);

export default MainRoutes;
