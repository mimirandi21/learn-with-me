import React from "react";
import { connect } from "react-redux";
import USAMap from "react-usa-map";
import { getPolitics } from "../redux/actions/PoliticsActions";
import PoliticsCards from "./PoliticsCards.js";

class PoliticsMap extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			politics: [],
			chosenOption: "",
			chosenTitle: "",
		};

		//set state to clicked option
		this.showPoliticsCard = (chosen, title) => {
			this.setState({
				chosenTitle: title,
				chosenOption: chosen,
				showPoliticsCard: !this.state.showPoliticsCard,
			});
		};
	}

	//fetch politics if not done previously
	componentDidMount(prevProps) {
		if (this.props !== prevProps) {
			this.props.getPolitics();
		}
	}

	//use click event to get usstate data, send to state
	mapHandler = (e) => {
		if (this.props.politics.requesting === true) {
			this.sleep(2000);
			this.mapHandler(e);
		}
		let title = e.target.textContent;
		let thisone = e.target.dataset.name;
		let chosen = this.props.politics.politics.data.find((option) => {
			return option.abbr === thisone;
		});
		this.showPoliticsCard(chosen, title);
	};

	//set usstate color, keep dark when selected
	statesCustomConfig = () => {
		return {
			AL: {
				fill: this.state.chosenOption.abbr === "AL" ? "#10375c" : "#83b9a0",
			},
			AK: {
				fill: this.state.chosenOption.abbr === "AK" ? "#10375c" : "#B7B983",
			},
			AZ: {
				fill: this.state.chosenOption.abbr === "AZ" ? "#10375c" : "#83B9A0",
			},
			AR: {
				fill: this.state.chosenOption.abbr === "AR" ? "#10375c" : "#B983AE",
			},
			CA: {
				fill: this.state.chosenOption.abbr === "CA" ? "#10375c" : "#B983AE",
			},
			CO: {
				fill: this.state.chosenOption.abbr === "CO" ? "#10375c" : "#B9A083",
			},
			CT: {
				fill: this.state.chosenOption.abbr === "CT" ? "#10375c" : "#8583B9",
			},
			DE: {
				fill: this.state.chosenOption.abbr === "DE" ? "#10375c" : "#B983AE",
			},
			FL: {
				fill: this.state.chosenOption.abbr === "FL" ? "#10375c" : "#B7B983",
			},
			GA: {
				fill: this.state.chosenOption.abbr === "GA" ? "#10375c" : "#B9838A",
			},
			HI: {
				fill: this.state.chosenOption.abbr === "HI" ? "#10375c" : "#839cb9",
			},
			ID: {
				fill: this.state.chosenOption.abbr === "ID" ? "#10375c" : "#B9838A",
			},
			IL: {
				fill: this.state.chosenOption.abbr === "IL" ? "#10375c" : "#83B9A0",
			},
			IN: {
				fill: this.state.chosenOption.abbr === "IN" ? "#10375c" : "#839CB9",
			},
			IA: {
				fill: this.state.chosenOption.abbr === "IA" ? "#10375c" : "#B9838A",
			},
			KS: {
				fill: this.state.chosenOption.abbr === "KS" ? "#10375c" : "#839cba",
			},
			KY: {
				fill: this.state.chosenOption.abbr === "KY" ? "#10375c" : "#8583B9",
			},
			LA: {
				fill: this.state.chosenOption.abbr === "LA" ? "#10375c" : "#8583B9",
			},
			ME: {
				fill: this.state.chosenOption.abbr === "ME" ? "#10375c" : "#B7B983",
			},
			MD: {
				fill: this.state.chosenOption.abbr === "MD" ? "#10375c" : "#B9A083",
			},
			MA: {
				fill: this.state.chosenOption.abbr === "MA" ? "#10375c" : "#83B9A0",
			},
			MI: {
				fill: this.state.chosenOption.abbr === "MI" ? "#10375c" : "#83B9A0",
			},
			MN: {
				fill: this.state.chosenOption.abbr === "MN" ? "#10375c" : "#839CB9",
			},
			MS: {
				fill: this.state.chosenOption.abbr === "MS" ? "#10375c" : "#839CB9",
			},
			MO: {
				fill: this.state.chosenOption.abbr === "MO" ? "#10375c" : "#B7B983",
			},
			MT: {
				fill: this.state.chosenOption.abbr === "MT" ? "#10375c" : "#83B9A0",
			},
			NE: {
				fill: this.state.chosenOption.abbr === "NE" ? "#10375c" : "#B983AE",
			},
			NV: {
				fill: this.state.chosenOption.abbr === "NV" ? "#10375c" : "#8583B9",
			},
			NH: {
				fill: this.state.chosenOption.abbr === "NH" ? "#10375c" : "#839CB9",
			},
			NJ: {
				fill: this.state.chosenOption.abbr === "NJ" ? "#10375c" : "#B983AE",
			},
			NM: {
				fill: this.state.chosenOption.abbr === "NM" ? "#10375c" : "#B983AE",
			},
			NY: {
				fill: this.state.chosenOption.abbr === "NY" ? "#10375c" : "#B9838A",
			},
			NC: {
				fill: this.state.chosenOption.abbr === "NC" ? "#10375c" : "#839CB9",
			},
			ND: {
				fill: this.state.chosenOption.abbr === "ND" ? "#10375c" : "#B9A083",
			},
			OH: {
				fill: this.state.chosenOption.abbr === "OH" ? "#10375c" : "#B983AE",
			},
			OK: {
				fill: this.state.chosenOption.abbr === "OK" ? "#10375c" : "#83B9A0",
			},
			OR: {
				fill: this.state.chosenOption.abbr === "OR" ? "#10375c" : "#B9A083",
			},
			PA: {
				fill: this.state.chosenOption.abbr === "PA" ? "#10375c" : "#83B9A0",
			},
			RI: {
				fill: this.state.chosenOption.abbr === "RI" ? "#10375c" : "#839CB9",
			},
			SC: {
				fill: this.state.chosenOption.abbr === "SC" ? "#10375c" : "#8583B9",
			},
			SD: {
				fill: this.state.chosenOption.abbr === "SD" ? "#10375c" : "#8583B9",
			},
			TN: {
				fill: this.state.chosenOption.abbr === "TN" ? "#10375c" : "#B9A083",
			},
			TX: {
				fill: this.state.chosenOption.abbr === "TX" ? "#10375c" : "#b9838a",
			},
			UT: {
				fill: this.state.chosenOption.abbr === "UT" ? "#10375c" : "#839CBA",
			},
			VT: {
				fill: this.state.chosenOption.abbr === "VT" ? "#10375c" : "#B9A083",
			},
			VA: {
				fill: this.state.chosenOption.abbr === "VA" ? "#10375c" : "#83B9A0",
			},
			WA: {
				fill: this.state.chosenOption.abbr === "WA" ? "#10375c" : "#839CB9",
			},
			WV: {
				fill: this.state.chosenOption.abbr === "WV" ? "#10375c" : "#B7B983",
			},
			WI: {
				fill: this.state.chosenOption.abbr === "WI" ? "#10375c" : "#B983AE",
			},
			WY: {
				fill: this.state.chosenOption.abbr === "WY" ? "#10375c" : "#B7B983",
			},
			DC1: {
				fill: this.state.chosenOption.abbr === "DC" ? "#10375c" : "#b9838a",
			},
			DC2: {
				fill: this.state.chosenOption.abbr === "DC" ? "#10375c" : "#b9838a",
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
				<PoliticsCards
					show={this.state.showPoliticsCard}
					onClose={this.showPoliticsCard}
					chosenOption={this.state.chosenOption}
					chosenTitle={this.state.chosenTitle}
				/>
			</div>
		);
	}
}

const mSTP = (state) => {
	return {
		politics: state.politics,
	};
};

const mDTP = (dispatch) => {
	return {
		getPolitics: (info) => dispatch(getPolitics(info)),
	};
};

export default connect(mSTP, mDTP)(PoliticsMap);
