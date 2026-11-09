

function App() {

  return (
    <>
      <div className="glass flex flex-col items-center h-full w-full p-4 m-4">
          <h1>Welcome to Forge 🔥</h1>
          <div className="flex justify-between w-full">
            <button className="flex">Projects</button>
            <button className="flex">Tickets</button>
            <button className="flex">Deployments</button>
            <button className="flex"><img src="/src/assets/cogwheel.svg" className="w-6 h-6"/></button>
          </div>
      </div>
    </>
  )
}

export default App
