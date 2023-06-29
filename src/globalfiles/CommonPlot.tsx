import React from 'react'
import Plot from 'react-plotly.js';



interface CommonPlotProps {
    data: any;
    layout: any;
}

const CommonPlot = ({data, layout}: CommonPlotProps) => {
  return (
      <Plot
      data={data}
      layout={layout}
      style={{ display:'flex', alignItems:'center', justifyContent:'center' }}
      />
  )
}

export default CommonPlot
