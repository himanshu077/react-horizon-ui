import Dashboard from "./pages/Dashboard"
import Kanban from "./pages/Kanban"
import MarketPlace from "./pages/MarketPlace"
import Header from "./ui/Header/Header"
import Sidebar from "./ui/Sidebar/Sidebar"

function App() {
  return (
    <div className="flex min-h-screen bg-blue-50">
      <Sidebar />
      <main className="flex-1">
        {/* <Dashboard /> */}
        {/* <MarketPlace/> */}
        <Kanban/>
      </main>
    </div>
  )
}

export default App
