"use client";

import { createChart, ColorType } from "lightweight-charts";
import React, { useEffect, useRef } from "react";

export const ChartComponent = (props: any) => {
  const {
    data,
    colors: {
      backgroundColor = "black",
      upColor = "#26a69a",
      downColor = "#ef5350",
      wickUpColor = "#26a69a",
      wickDownColor = "#ef5350",
      textColor = "white",
    } = {},
  } = props;

  const chartContainerRef: any = useRef();

  useEffect(() => {
    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef?.current.clientWidth });
    };

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: backgroundColor },
        textColor,
      },
      width: chartContainerRef.current.clientWidth,
      height: 300,
    });
    chart.timeScale().fitContent();

    const candlestickSeries = chart.addCandlestickSeries({
      upColor,
      downColor,
      borderVisible: false,
      wickUpColor,
      wickDownColor,
    });

    candlestickSeries.setData(data);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.remove();
    };
  }, [
    data,
    backgroundColor,
    upColor,
    downColor,
    wickUpColor,
    wickDownColor,
    textColor,
  ]);

  return <div ref={chartContainerRef} />;
};

// Sample candlestick data
const candlestickData = [
  { open: 10, high: 10.63, low: 9.49, close: 9.55, time: 1642427876 },
  { open: 9.55, high: 10.3, low: 9.42, close: 9.94, time: 1642514276 },
  { open: 9.94, high: 10.17, low: 9.92, close: 9.78, time: 1642600676 },
  { open: 9.78, high: 10.59, low: 9.18, close: 9.51, time: 1642687076 },
  { open: 9.51, high: 10.46, low: 9.1, close: 10.17, time: 1642773476 },
  { open: 10.17, high: 10.96, low: 10.16, close: 10.47, time: 1642859876 },
  { open: 10.47, high: 11.39, low: 10.4, close: 10.81, time: 1642946276 },
  { open: 10.81, high: 11.6, low: 10.3, close: 10.75, time: 1643032676 },
  { open: 10.75, high: 11.6, low: 10.49, close: 10.93, time: 1643119076 },
  { open: 10.93, high: 11.53, low: 10.76, close: 10.96, time: 1643205476 },
];

export function StockScreening(props: any) {
  return <ChartComponent {...props} data={candlestickData} />;
}

// import React, { useState } from "react";
// import { TrendingUp } from "lucide-react";
// import { Bar, BarChart, CartesianGrid, Cell, LabelList } from "recharts";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// import {
//   ChartConfig,
//   ChartTooltipContent,
//   ChartContainer,
//   ChartTooltip,
// } from "./chart";
// import axios from "axios";

// const chartData = [
//   { month: "January", visitors: 186 },
//   { month: "February", visitors: 205 },
//   { month: "March", visitors: -207 },
//   { month: "April", visitors: 173 },
//   { month: "May", visitors: -209 },
//   { month: "June", visitors: 214 },
// ];

// const chartConfig = {
//   visitors: {
//     label: "Visitors",
//   },
// } satisfies ChartConfig;

// const StockScreening: React.FC = () => {
//   const [consolidationType, setConsolidationType] = useState<
//     "open-close" | "high-low"
//   >("open-close");
//   const [minBreakoutPercent, setMinBreakoutPercent] = useState<number>(0);
//   const [maxBreakoutPercent, setMaxBreakoutPercent] = useState<number>(0);
//   const [minCandleSize, setMinCandleSize] = useState<number>(0);
//   const [maxCandleSize, setMaxCandleSize] = useState<number>(0);
//   const [labels, setLabels] = useState<number>(0);
//   const [data, setData] = useState<number>(0);

//   // Dummy candlestick data
//   // e271a11a997a4c9b992135b3ee614c1e
//   // const data = {
//   //   labels: ["2024-08-01", "2024-08-02", "2024-08-03"],
//   //   datasets: [
//   //     {
//   //       label: "Candlestick Data",
//   //       data: [
//   //         { x: "2024-08-01", o: 100, h: 110, l: 95, c: 105 },
//   //         { x: "2024-08-02", o: 105, h: 115, l: 100, c: 110 },
//   //         { x: "2024-08-03", o: 110, h: 120, l: 105, c: 115 },
//   //       ],
//   //       borderColor: "#3b82f6",
//   //       backgroundColor: "#93c5fd",
//   //     },
//   //   ],
//   // };

//   React.useEffect(() => {
//     axios
//       .get(
//         "https://api.twelvedata.com/time_series?symbol=AAPL,EUR/USD,IXIC&interval=1min&apikey=demo"
//       )
//       .then((response) => {
//         console.log(response);

//       });
//   }, []);

//   // Placeholder for your logic to handle breakout detection
//   const handleBreakoutAnalysis = () => {
//     // Implement your logic here based on the consolidationType, breakout percentages, etc.
//     console.log({
//       consolidationType,
//       minBreakoutPercent,
//       maxBreakoutPercent,
//       minCandleSize,
//       maxCandleSize,
//     });
//   };

//   return (
//     <div className="p-4 bg-gray-100  text-black min-h-screen ">
//       <h1 className="text-2xl font-bold mb-6">
//         Stock Screening with Candlestick Visualization
//       </h1>

//       {/* Chart Section */}
//       <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-4 mb-8">
//         <Card>
//           <CardHeader>
//             <CardTitle>Bar Chart - Negative</CardTitle>
//             <CardDescription>January - June 2024</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <ChartContainer config={chartConfig}>
//               <BarChart accessibilityLayer data={chartData}>
//                 <CartesianGrid vertical={false} />
//                 <ChartTooltip
//                   cursor={false}
//                   content={<ChartTooltipContent hideLabel hideIndicator />}
//                 />
//                 <Bar dataKey="visitors">
//                   <LabelList position="top" dataKey="month" fillOpacity={1} />
//                   {chartData.map((item) => (
//                     <Cell
//                       key={item.month}
//                       fill={
//                         item.visitors > 0
//                           ? "hsl(var(--chart-1))"
//                           : "hsl(var(--chart-2))"
//                       }
//                     />
//                   ))}
//                 </Bar>
//               </BarChart>
//             </ChartContainer>
//           </CardContent>
//           <CardFooter className="flex-col items-start gap-2 text-sm">
//             <div className="flex gap-2 font-medium leading-none">
//               Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
//             </div>
//             <div className="leading-none text-muted-foreground">
//               Showing total visitors for the last 6 months
//             </div>
//           </CardFooter>
//         </Card>
//       </div>

//       {/* Consolidation Type */}
//       <div className="w-full max-w-lg mb-6">
//         <label className="font-semibold text-lg">
//           Select Consolidation Type:
//         </label>
//         <select
//           className="block w-full p-2 mt-2 border rounded-md focus:outline-none"
//           value={consolidationType}
//           onChange={(e) =>
//             setConsolidationType(e.target.value as "open-close" | "high-low")
//           }
//         >
//           <option value="open-close">Open/Close</option>
//           <option value="high-low">High/Low</option>
//         </select>
//       </div>

//       {/* Breakout Parameters */}
//       <div className="w-full max-w-lg mb-6 grid grid-cols-2 gap-4">
//         <div>
//           <label className="font-semibold text-lg">
//             Min Breakout Percentage:
//           </label>
//           <input
//             type="number"
//             className="block w-full p-2 mt-2 border rounded-md focus:outline-none"
//             value={minBreakoutPercent}
//             onChange={(e) => setMinBreakoutPercent(Number(e.target.value))}
//           />
//         </div>
//         <div>
//           <label className="font-semibold text-lg">
//             Max Breakout Percentage:
//           </label>
//           <input
//             type="number"
//             className="block w-full p-2 mt-2 border rounded-md focus:outline-none"
//             value={maxBreakoutPercent}
//             onChange={(e) => setMaxBreakoutPercent(Number(e.target.value))}
//           />
//         </div>
//         <div>
//           <label className="font-semibold text-lg">
//             Min Breakout Candle Size:
//           </label>
//           <input
//             type="number"
//             className="block w-full p-2 mt-2 border rounded-md focus:outline-none"
//             value={minCandleSize}
//             onChange={(e) => setMinCandleSize(Number(e.target.value))}
//           />
//         </div>
//         <div>
//           <label className="font-semibold text-lg">
//             Max Breakout Candle Size:
//           </label>
//           <input
//             type="number"
//             className="block w-full p-2 mt-2 border rounded-md focus:outline-none"
//             value={maxCandleSize}
//             onChange={(e) => setMaxCandleSize(Number(e.target.value))}
//           />
//         </div>
//       </div>

//       <button
//         className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
//         onClick={handleBreakoutAnalysis}
//       >
//         Analyze Breakout
//       </button>
//     </div>
//   );
// };

export default StockScreening;
