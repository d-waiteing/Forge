import { useState } from "react";
import { Button } from "react-bootstrap"
import SettingsModal from "./Settings/SettingsModal";
import { useNavigate } from "react-router";


function Home() {
  const [showSettingsModal, setShowSettingsModal] = useState(false);

  const navigate = useNavigate();
  const handleNavigationClick = (path: string) => {
    navigate(path);
  }

  return (
    <div className="flex h-full w-full p-4">
        <div className="glass flex flex-col gap-2 p-2">
          <Button variant="secondary" className="flex" onClick={() => handleNavigationClick("/projects")}>
            Projects
          </Button>
          <Button variant="secondary" className="flex" onClick={() => handleNavigationClick("/tickets")}>
            Tickets
          </Button>
          <Button variant="secondary" className="flex" onClick={() => handleNavigationClick("/deployments")}>
            Deployments
          </Button>
        </div>
        {
          showSettingsModal && (<SettingsModal onHide={() => setShowSettingsModal(false)} />)
        }
        <div className="flex w-full justify-center items-center">
          <h1>Welcome to Forge 🔥</h1>
        </div>
        <div className="flex flex-col">
          <Button variant="secondary" className="flex" onClick={() => setShowSettingsModal(true)}>
              <img src="/src/assets/cogwheel.svg" className="w-6 h-6"/>
          </Button>
        </div>
    </div>
  )
}

export default Home