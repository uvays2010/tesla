import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import AdminLayout from './layouts/AdminLayout'
import HomePage from './pages/home/HomePage'
import VehiclesPage from './pages/vehicles/VehiclesPage'
import VehicleDetailPage from './pages/vehicles/VehicleDetailPage'
import ConfiguratorPage from './pages/vehicles/ConfiguratorPage'
import LoginPage from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'
import OwnersPage from './pages/owners/OwnersPage'
import StorePage from './pages/store/StorePage'
import CartPage from './pages/store/CartPage'
import ProductDetailPage from './pages/store/ProductDetailPage'
import EnergyPage from './pages/energy/EnergyPage'
import TechnologyPage from './pages/technology/TechnologyPage'
import RoboticsPage from './pages/robotics/RoboticsPage'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminUsers from './pages/admin/AdminUsers'
import AdminVehicles from './pages/admin/AdminVehicles'
import AdminPlaceholder from './pages/admin/AdminPlaceholder'

function Placeholder({ title }) {
  return (
    <div style={{ 
      minHeight: '60vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      flexDirection: 'column',
      gap: '1rem',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '2rem' }}>{title}</h1>
      <p style={{ color: 'var(--text-secondary)' }}>
        This section will be expanded in upcoming stages of TESLA WORLD.
      </p>
      <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
        Demo · Frontend Only · LocalStorage
      </p>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="vehicles" element={<VehiclesPage />} />
        <Route path="vehicles/:id" element={<VehicleDetailPage />} />
        <Route path="configurator" element={<ConfiguratorPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="owners" element={<OwnersPage />} />
        <Route path="owners/*" element={<OwnersPage />} />

        {/* Store */}
        <Route path="store" element={<StorePage />} />
        <Route path="store/cart" element={<CartPage />} />
        <Route path="store/:id" element={<ProductDetailPage />} />

        {/* Energy / Tech / Robotics */}
        <Route path="energy" element={<EnergyPage />} />
        <Route path="energy/*" element={<EnergyPage />} />
        <Route path="technology" element={<TechnologyPage />} />
        <Route path="technology/*" element={<TechnologyPage />} />
        <Route path="robotics" element={<RoboticsPage />} />
        <Route path="robotics/*" element={<RoboticsPage />} />

        <Route path="charging/*" element={<Placeholder title="Charging Network" />} />
        <Route path="news/*" element={<Placeholder title="News" />} />
        <Route path="community/*" element={<Placeholder title="Community" />} />
        <Route path="support/*" element={<Placeholder title="Support" />} />
        <Route path="careers/*" element={<Placeholder title="Careers" />} />
        <Route path="education/*" element={<Placeholder title="Education" />} />
        <Route path="discover" element={<Placeholder title="Discover Tesla" />} />
        <Route path="about" element={<Placeholder title="About Tesla" />} />
        <Route path="mission" element={<Placeholder title="Our Mission" />} />
        <Route path="timeline" element={<Placeholder title="Timeline" />} />
        <Route path="leadership" element={<Placeholder title="Leadership" />} />
        <Route path="global/*" element={<Placeholder title="Global Presence" />} />
        <Route path="account" element={<Placeholder title="Account Settings" />} />
        <Route path="search" element={<Placeholder title="Search" />} />
        <Route path="*" element={<Placeholder title="404 — Page Not Found" />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="users" element={<AdminUsers />} />
        <Route path="vehicles" element={<AdminVehicles />} />
        <Route path="products" element={<AdminPlaceholder title="Products" />} />
        <Route path="orders" element={<AdminPlaceholder title="Orders" />} />
        <Route path="content" element={<AdminPlaceholder title="Content" />} />
        <Route path="analytics" element={<AdminPlaceholder title="Analytics" />} />
        <Route path="settings" element={<AdminPlaceholder title="Settings" />} />
      </Route>
    </Routes>
  )
}
