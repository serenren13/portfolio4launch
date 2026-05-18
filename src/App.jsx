import { NavLink, Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/projects">Projects</NavLink>
      </nav>

      {/* Child routes render here */}
      <Outlet />
    </div>
  )
}

export default App
