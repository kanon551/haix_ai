import React, { useEffect, useState } from 'react';
import { getMapsData, unpack } from '../globalfiles/GlobalAPI';
import CommonPlot from '../globalfiles/CommonPlot';

  
const BubbleMap = () => {

    const [data, setData] = useState<any>([]);
  const [layout, setLayout] = useState<any>({});

  useEffect(() => {

    getMapsData('2014_us_cities').then(rows => {
      var cityName = unpack(rows, 'name'),
          cityPop = unpack(rows, 'pop'),
          cityLat = unpack(rows, 'lat'),
          cityLon = unpack(rows, 'lon'),
          color = [, 'rgb(255,65,54)', 'rgb(133,20,75)', 'rgb(255,133,27)', 'lightgrey'],
          citySize = [],
          hoverText = [],
          scale = 50000;

        for (var i = 0; i < cityPop.length; i++) {
          var currentSize = cityPop[i] / scale;
          var currentText = cityName[i] + ' pop: ' + cityPop[i];
          citySize.push(currentSize);
          hoverText.push(currentText);
        }

        var data = [
          {
            type: 'scattergeo',
            locationmode: 'USA-states',
            lat: cityLat,
            lon: cityLon,
            hoverinfo: 'text',
            text: hoverText,
            marker: {
              size: citySize,
              line: {
                color: 'black',
                width: 2,
              },
            },
          },
        ];

        var layout = {
          title: '2014 US City Populations',
          showlegend: false,
          geo: {
            scope: 'usa',
            projection: {
              type: 'albers usa',
            },
            showland: true,
            landcolor: 'rgb(217, 217, 217)',
            subunitwidth: 1,
            countrywidth: 1,
            subunitcolor: 'rgb(255,255,255)',
            countrycolor: 'rgb(255,255,255)',
          },
          width: 300,
          height: 300,
        };

        setData(data);
        setLayout(layout);
    }) .catch(error => console.error('Error loading CSV:', error));
  }, []);

      
  return (
    <div>
      <CommonPlot data={data} layout={layout}/>
    </div>
  )
}

export default BubbleMap
