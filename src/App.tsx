import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import AdminPage from "./pages/AdminPage";

// Dashboard Layout & Pages
import DashboardLayout from "./layouts/DashboardLayout";
import OverviewPage from "./pages/OverviewPage";
import GeneratorPage from "./pages/GeneratorPage";
import SettingsPage from "./pages/SettingsPage";
import DocsPage from "./pages/DocsPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Admin Route (Standalone for now) */}
        <Route path="/admin" element={<AdminPage />} />

        {/* Dashboard Routes (Protected) */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<OverviewPage />} />
          <Route path="generate" element={<GeneratorPage />} /> {/* Was /app */}
          <Route path="settings" element={<SettingsPage />} />
          <Route path="docs" element={<DocsPage />} />
          <Route path="support" element={<ContactPage />} />{" "}
          {/* Reusing ContactPage for Support */}
        </Route>

        {/* Redirects for backward compatibility */}
        <Route
          path="/app"
          element={<Navigate to="/dashboard/generate" replace />}
        />
        <Route
          path="/settings"
          element={<Navigate to="/dashboard/settings" replace />}
        />
        <Route
          path="/docs"
          element={<Navigate to="/dashboard/docs" replace />}
        />
      </Routes>
    </Router>
  );
}

export default App;
