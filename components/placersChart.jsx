import React, { useState } from "react";
import dynamic from 'next/dynamic';

function PlacersChart() {
  const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

  const [chartData, setChartData] = useState({
    options: {
      chart: {
        id: "line-chart",
        events: {
          dataPointMouseEnter: (event, chartContext, config) => {
            // Show the tooltip and marker when hovering over a data point
            chartContext.getW().showTooltip(config.dataPointIndex, config.seriesIndex);
          },
          dataPointMouseLeave: (event, chartContext, config) => {
            // Hide the tooltip and marker when leaving a data point
            chartContext.getW().hideTooltip();
          },
        },
      },
      xaxis: {
        categories: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
      },
      stroke: {
        curve: 'smooth',
        width: 5,
      },
      markers: {
        size: 0,
        colors: '#fff',
        strokeColors: '#546FFF',
        strokeWidth: 4,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 1,
        shape: "circle",
        radius: 2,
        
      },
      colors: ['#00B068'],
      tooltip: {
        followCursor: true,
        enabled: true, // Disable the default tooltip
      
      }

    },
    series: [
      {
        name: "No of Ads",
        data: [3, 1, 2, 2.5, 5, 6, 0],
      },
    ],
  });

  return (
    <>
      <style jsx>{`
        .custom-tooltip {
          background-color: #691d1d;
          padding: 8px;
          border: 1px solid #ddd;
          border-radius: 4px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
      `}</style>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="line"
        width="100%"
        height="100%"
      />    
    </>
  );
}

export default dynamic(() => Promise.resolve(PlacersChart), { ssr: false });
