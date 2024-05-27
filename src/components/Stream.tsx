import React, { useEffect, useState } from "react";
import { Chart } from 'react-chartjs-2';
import { ChartData, Chart as ChartJS, ChartOptions} from "chart.js/auto";
import "chartjs-adapter-luxon";
import StreamingPlugin from "chartjs-plugin-streaming";
import { Line } from "react-chartjs-2";


ChartJS.register(StreamingPlugin);

export default function Stream() {
  const [stDate,setStDate]=useState(0)
  useEffect(()=>{
    setStDate(Date.now())
    console.log("date",Date.now())
  },[])

  const _data={
    datasets: [
      {
        label: "Dataset 1",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgb(255, 99, 132)",
        borderDash: [8, 4],
        fill: true,
        data: []
      },
      {
        label: "Dataset 2",
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgb(54, 162, 235)",
        cubicInterpolationMode: "monotone",
        fill: true,
        data: []
      }
    ]
  }

  const _options={
    scales: {
      x: {
        type: "realtime",
        realtime: {
          delay: 2000,
          onRefresh: (chart: { data: { datasets: any[]; }; }) => {
            chart.data.datasets.forEach((dataset) => {
              dataset.data.push({
                x: Date.now(),
                y: Math.random()
              });
            });
          }
        }
      }
    }
  }
  return (
    <Line
      data={_data as ChartData<'line'>}
      options={_options as ChartOptions<'line'>}
    />
  );
}