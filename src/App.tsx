import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Banner from "./components/Banner"

const App = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <Outlet/>
    </div>
  )
}

export default App
