import React from "react";
import USAMap from "react-usa-map";

export default class Map extends React.Component {
	mapHandler = (e) => {
		alert(e.target.dataset.name);
	};

	statesCustomConfig = () => {
		return {
			NJ: {
				fill: "navy",
				clickHandler: (e) =>
					console.log("Custom handler for NJ", e.target.dataset),
			},
			NY: {
				fill: "#CC0000",
			},
		};
	};
	render() {
		return (
			<div className="Map">
				<USAMap
					customize={this.statesCustomConfig()}
					onClick={this.mapHandler}
				/>
			</div>
		);
	}
}
