import { useState } from "react";
import { Button } from "react-bootstrap"
import SettingsModal from "./Settings/SettingsModal";


function App() {
  const [showSettingsModal, setShowSettingsModal] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center h-full w-full p-4 m-4">
          <h1>Welcome to Forge 🔥</h1>
          <div className="flex justify-between w-full">
            <Button className="flex">Projects</Button>
            <Button className="flex">Tickets</Button>
            <Button className="flex">Deployments</Button>
            <Button className="flex" onClick={() => setShowSettingsModal(true)}>
              <img src="/src/assets/cogwheel.svg" className="w-6 h-6"/>
            </Button>
          </div>
          {
            showSettingsModal && (<SettingsModal onHide={() => setShowSettingsModal(false)} />)
          }
      </div>
    </>
  )
}

export default App
