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
    <>
      <div className="flex flex-col items-center h-full w-full p-4 m-4">
          <div className="flex justify-between w-full p-2">
            <Button variant="secondary" className="flex" onClick={() => handleNavigationClick("/projects")}>
              Projects
            </Button>
            <Button variant="secondary" className="flex" onClick={() => handleNavigationClick("/tickets")}>
              Tickets
            </Button>
            <Button variant="secondary" className="flex" onClick={() => handleNavigationClick("/deployments")}>
              Deployments
            </Button>
            <Button variant="secondary" className="flex" onClick={() => setShowSettingsModal(true)}>
              <img src="/src/assets/cogwheel.svg" className="w-6 h-6"/>
            </Button>
          </div>
          {
            showSettingsModal && (<SettingsModal onHide={() => setShowSettingsModal(false)} />)
          }
          <h1 className="pt-2">Welcome to Forge 🔥</h1>
      </div>
    </>
  )
}

export default Home