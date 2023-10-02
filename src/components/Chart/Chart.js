import React from "react";

import ChartBar from "./ChartBar.js";
import "./Chart.css";

//going to use props as the dynamic determiner of how many chart bars to display
//expecting the props.dataPoints to hold an array of values that coorrespond to the added expenses
const Chart = (props) => {
    const dataPointValues= props.dataPoints.map(dataPoint => dataPoint.value); // transform the dataPoint object to just numbers for use in totalMax mapping function
    const totalMax = Math.max(...dataPointValues); //using ... (spread operator to turn the array of dataPointValues to a single list of comma separated numbers)

	return (
		<div className="chart">
			{props.dataPoints.map((dataPoint) => (
				<ChartBar
					key={dataPoint.label}
					value={dataPoint.value}
					maxValue={totalMax}
					label={dataPoint.label}
				/>
			))}
		</div>
	);
};

export default Chart;
