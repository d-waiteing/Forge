import { Route, Routes } from "react-router/internal/react-server-client"
import Home from "./Home"
import Projects from "./Projects/Projects"
import Tickets from "./Tickets/Tickets"
import Deployments from "./Deployments/Deployments"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/tickets" element={<Tickets />} />
      <Route path="/deployments" element={<Deployments />} />
    </Routes>
  )
}

export default App
