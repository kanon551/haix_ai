import React, { useEffect, useState } from 'react';
import { getMapsData, unpack } from '../globalfiles/GlobalAPI';
import CommonPlot from '../globalfiles/CommonPlot';


interface ScatterData {
    x: number[];
    y: number[];
    z: number[];
    mode: string;
    marker: {
      size: number;
      line: {
        color: string;
        width: number;
      };
      opacity: number;
      color?: string;
      symbol?: string;
    };
    type: string;
  }


const ThreeDScatter = () => {

    const [data, setData] = useState<any>([]);
  const [layout, setLayout] = useState<object>({});

  useEffect(()=> {
    getMapsData('3d-scatter').then(rows => {

      var trace1: ScatterData = {
        x: unpack(rows, 'x1'),
        y: unpack(rows, 'y1'),
        z: unpack(rows, 'z1'),
        mode: 'markers',
        marker: {
          size: 12,
          line: {
            color: 'rgba(217, 217, 217, 0.14)',
            width: 0.5,
          },
          opacity: 0.8,
        },
        type: 'scatter3d',
      };

      var trace2: ScatterData = {
        x: unpack(rows, 'x2'),
        y: unpack(rows, 'y2'),
        z: unpack(rows, 'z2'),
        mode: 'markers',
        marker: {
          color: 'rgb(127, 127, 127)',
          size: 12,
          symbol: 'circle',
          line: {
            color: 'rgb(204, 204, 204)',
            width: 1,
          },
          opacity: 0.8,
        },
        type: 'scatter3d',
      };

      var data: ScatterData[] = [trace1, trace2];

      var layout = {
        title: '3D Scatter Plot',
        margin: {
          l: 0,
          r: 0,
          b: 0,
          t: 0,
        },
        width: 300,
          height: 300,
      };

      setData(data);
      setLayout(layout);
    }).catch(error => console.error('Error loading CSV:', error));
  },[])

  return (
    <div>
      <CommonPlot data={data} layout={layout}/>
    </div>
  )
}

export default ThreeDScatter
