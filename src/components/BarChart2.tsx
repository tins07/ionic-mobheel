import { barChart } from 'ionicons/icons';
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartData,
  } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

const BarChart2: React.FC = () => {
    
  const [data, setData] = useState<any>({
    labels: Array.from({ length: 0 }, (_, i) => (i + 1).toString()),
    datasets: [{
      label: 'Nombre de fois tiré',
      data: Array(0).fill(0),
      backgroundColor: [] as string[],
      hoverOffset: 4,
    }],
  });
  const [size, setSize] =useState(8)
  const [gate,setGate] =useState(false)
 
  // simule le tirage d'un numéro aléatoire
  const tirageNumero = (size:number) => Math.floor(Math.random() * size) + 1;

  // hsl rgb
  // input: h in [0,360] and s,v in [0,1] - output: r,g,b in [0,1]
  function hsl2rgb(h:number,s:number,l:number) 
  {
    let a= s*Math.min(l,1-l);
    let f= (n:number,k=(n+h/30)%12) => (l - a*Math.max(Math.min(k-3,9-k,1),-1))*255;
    return 'rgb('+f(0)+','+f(8)+','+f(4);
  }   
  // initialise data
  const initData=(data: ChartData<"bar", any[], string>,size:number)=>{
    const _data={
      ...data
    }
    _data.labels=Array.from({ length: size }, (_, i) => (i + 1).toString())
    _data.datasets[0].data=Array(size).fill(0)

    const bcolor: string[]=[]
    for(let i=0;i<size;i++){
      const _n=(360/size)*i
      bcolor.push(hsl2rgb(_n,1,0.5))
    }
    _data.datasets[0].backgroundColor=bcolor
    setData(_data)
    console.log("data",data)
  }
 
  useEffect(() => {
    if(gate){
    // update les données du graph
    const interval = setInterval(() => {
      const newData = { ...data };
      const numeroTire = tirageNumero(size);
      newData.datasets[0].data[numeroTire - 1]++;
      setData(newData);
      
    }, 10);
 
    return () => clearInterval(interval);
    }else{
      // initialise
      initData(data,8)
      setGate(true)
    }
  }, [data]);
 
  const totalTirages = data.datasets[0].data.reduce((acc: any, curr: any) => acc + curr, 0);
 
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: `Nombre total de tirages: ${totalTirages}`,
        font: {
          size: 18
        }
      },
    },
  };
 
  return <Bar data={data} options={options} />;
  
};

export default BarChart2
 