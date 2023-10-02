import React from "react";

import "./ChartBar.css";

//the height of the chart-bar__fill needs to be dynamically set in order to display the fill
// we want to use Chart.value to determine the 'fill' amount
const ChartBar = (props) => {
	let barFillHeight = "0%"; // set as a text because it will be a css parameter

	if (props.maxValue > 0) {
		barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%"; //determine percentage of fill
	}

	//style acts differently in react, it needs {} for dynamic output
	//THEN it needs a JS object to define the CSS code that will be used
	//hyphenated properties (like background-color) either need quotes on it, or the camelCase equivalent: backgroundColor

	return (
		<div className="chart-bar">
			<div className="chart-bar__inner">
				<div
					className="chart-bar__fill"
					style={ {height: barFillHeight} }
				></div>
			</div>
			<div className="chart-bar__label">{props.label}</div>
		</div>
	);
};

export default ChartBar;
