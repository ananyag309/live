import "./dashboard.css"
import DashboardWrapper from "./components/DashboardWrapper"
import Summaries from "./components/Summaries"
import Revenue from "./components/Revenue"
import BestCrops from "./components/BestCrops"
import Farmers from "./components/Farmers"
import PSS from "./components/PSS"
// import { Route, Routes } from 'react-router-dom'

function Dashboard() {
  
  return (
      <DashboardWrapper contentClassName={`dashboard__content`}>
        <div className="components__row r-1">
        <Summaries/>
        <Revenue/>
        </div>

        

        <div className="components__row r-2">
        <BestCrops/>
        <Farmers/>
        </div>


        <div className="components_row-3">
          <PSS/>        
      </div>


      </DashboardWrapper>

  )
}

export default Dashboard