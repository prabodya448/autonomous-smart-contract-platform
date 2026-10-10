import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import Dashboard from './pages/Dashboard/Dashboard';
import NewAudit from './pages/NewAudit/NewAudit';
import AuditProgress from './pages/AuditProgress/AuditProgress';
import ExploitVerification from './pages/ExploitVerification/ExploitVerification';
import SecurityReport from './pages/SecurityReport/SecurityReport';
import AuditHistory from './pages/AuditHistory/AuditHistory';
import Pricing from './pages/Pricing/Pricing';
import Billing from './pages/Billing/Billing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/new-audit" element={<NewAudit />} />
        <Route path="/audit-progress" element={<AuditProgress />} />
        <Route path="/exploit-verification" element={<ExploitVerification />} />
        <Route path="/security-report" element={<SecurityReport />} />
        <Route path="/audit-history" element={<AuditHistory />} />
        <Route path="/billing" element={<Billing />} />
      </Routes>
    </Router>
  );
}

export default App;