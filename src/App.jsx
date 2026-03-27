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

const LandingPage = () => (
  <div className="bg-surface font-body text-on-surface min-h-screen">
    <Navbar />
    <main>
      <Hero />
      <PreviewSection />
      <ValueProp />
    </main>
    <Footer />
  </div>
);

function App() {
  return (
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
  );
}

export default App;
