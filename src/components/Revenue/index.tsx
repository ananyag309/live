import React from 'react'
import "./Revenue.css"
import Chart from "react-apexcharts"
import {useChartData} from "../../chart"  

const Revenue = () => {
  const {revenue, loading} = useChartData()
  return (
    <div className='revenue'>
    <Chart
    {...revenue}
    type="area"
    width={"100%"}
    height={"100%"}
    />
    </div>
  )
}

export default Revenue