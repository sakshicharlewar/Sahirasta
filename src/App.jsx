import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PreviewSection from './components/PreviewSection';
import ValueProp from './components/ValueProp';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import PropertiesPage from './pages/PropertiesPage';
import CommuteSetupPage from './pages/CommuteSetupPage';
import MapViewPage from './pages/MapViewPage';
import SavedHomesPage from './pages/SavedHomesPage';
import CommuteInsightsPage from './pages/CommuteInsightsPage';
import AccountPage from './pages/AccountPage';
<<<<<<< HEAD
import ListPropertySection from './components/ListPropertySection';
import RegisterPropertyPage from './pages/RegisterPropertyPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
=======
>>>>>>> 90a57079e5fcd63a8eef1ea5655692b4b5b26858

const LandingPage = () => (
  <div className="bg-surface font-body text-on-surface min-h-screen">
    <Navbar />
    <main>
      <Hero />
      <PreviewSection />
      <ValueProp />
<<<<<<< HEAD
      <ListPropertySection />
=======
>>>>>>> 90a57079e5fcd63a8eef1ea5655692b4b5b26858
    </main>
    <Footer />
  </div>
);

function App() {
  return (
<<<<<<< HEAD
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
          <Route path="/properties" element={<PropertiesPage />} />
          <Route path="/commute-setup" element={<ProtectedRoute><CommuteSetupPage /></ProtectedRoute>} />
          <Route path="/map-view" element={<ProtectedRoute><MapViewPage /></ProtectedRoute>} />
          <Route path="/saved-homes" element={<ProtectedRoute><SavedHomesPage /></ProtectedRoute>} />
          <Route path="/commute-insights" element={<ProtectedRoute><CommuteInsightsPage /></ProtectedRoute>} />
          <Route path="/account" element={<ProtectedRoute><AccountPage /></ProtectedRoute>} />
          <Route path="/register-property" element={<RegisterPropertyPage />} />
          <Route path="/admin" element={<AdminDashboardPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
=======
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/properties" element={<PropertiesPage />} />
        <Route path="/commute-setup" element={<CommuteSetupPage />} />
        <Route path="/map-view" element={<MapViewPage />} />
        <Route path="/saved-homes" element={<SavedHomesPage />} />
        <Route path="/commute-insights" element={<CommuteInsightsPage />} />
        <Route path="/account" element={<AccountPage />} />
      </Routes>
    </BrowserRouter>
>>>>>>> 90a57079e5fcd63a8eef1ea5655692b4b5b26858
  );
}

export default App;
