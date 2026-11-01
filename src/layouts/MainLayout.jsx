import { Outlet } from 'react-router-dom'
import Header from '../components/navigation/Header'
import Footer from '../components/navigation/Footer'

export default function MainLayout() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: 'var(--header-height)', flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
