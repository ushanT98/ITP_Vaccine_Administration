import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  return (
    <div style={{width:1000}}>
      <Bar
        data={{
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              label: "Vaccination 2021",
              data: [4000, 4500, 5500, 3000, 4000, 2000],

              backgroundColor: [
                "#ccd9ff",
                "#b3c6ff",
                "#99b3ff",
                "#809fff",
                "#668cff",
                "#4d79ff",
              ],

              borderColor: [
                "#ccd9ff",
                "#b3c6ff",
                "#99b3ff",
                "#809fff",
                "#668cff",
                "#4d79ff",
                
              ],

              borderWidth: 1,
            },

            

          ],
        }}
        height={400}
        width={100}
        options={{
          maintainAspectRatio: false,
          scales:{
            yAxes: [{
                ticks:{
                    beginAtZero: true,
                }
            }]
          }




        }}
      />
    </div>
  );
};

export default BarChart;
