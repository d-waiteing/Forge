import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { AddTicket } from "./AddTicket";
import { TicketsProvider } from "./TicketsContext/TicketsContext";
import { TicketsDisplay } from "./TicketsDisplay/TicketsDisplay";


function Tickets() {

  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate("/");
  }
  
  return (
    <TicketsProvider>
      <div className="flex flex-col h-full w-full p-4">
        <div className="flex justify-between items-center p-2">
              <Button variant="outline-secondary" className="flex" onClick={handleHomeClick}>
                <img src="/src/assets/home.svg" className="w-6 h-6"/>
              </Button>
              <h1>Tickets</h1>
              <AddTicket />
        </div>
        <TicketsDisplay />
      </div>
    </TicketsProvider>
  )
}

export default Tickets;