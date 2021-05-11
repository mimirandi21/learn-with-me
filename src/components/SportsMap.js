import React from "react";
import { connect } from "react-redux";
import USAMap from "react-usa-map";
import SportsCards from "./SportsCards";
import { getSportsTeams } from "../redux/actions/SportsTeamsActions";

class SportsMap extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			teams: [],
			chosenOption: [],
			chosenTitle: [],
		};

		//set state to clicked option
		this.showSportsCard = (chosen, title) => {
			this.setState({
				chosenTitle: title,
				chosenOption: chosen,
				showSportsCard: !this.state.showSportsCard,
			});
		};
	}

	//fetch teams if not done previously
	componentDidMount(prevProps) {
		if (this.props !== prevProps) {
			this.props.getSportsTeams();
		}
	}

	//use click event to get usstate data, send to state
	mapHandler = (e) => {
		let title = e.target.textContent;
		let thisone = e.target.dataset.name;
		let chosen = this.props.teams.teams.data.filter((option) => {
			return option.abbr === thisone;
		});
		if (chosen[0] && chosen[0].abbr === "DC") {
			this.showSportsCard(chosen, "Washington D.C.");
		} else {
			this.showSportsCard(chosen, title);
		}
	};

	//set usstate color, keep dark when selected
	statesCustomConfig = () => {
		return {
			AL: {
				fill: this.state.chosenTitle === "Alabama" ? "#10375c" : "#83b9a0",
			},
			AK: {
				fill: this.state.chosenTitle === "Alaska" ? "#10375c" : "#B7B983",
			},
			AZ: {
				fill: this.state.chosenTitle === "Arizona" ? "#10375c" : "#83B9A0",
			},
			AR: {
				fill: this.state.chosenTitle === "Arkansas" ? "#10375c" : "#B983AE",
			},
			CA: {
				fill: this.state.chosenTitle === "California" ? "#10375c" : "#B983AE",
			},
			CO: {
				fill: this.state.chosenTitle === "Colorado" ? "#10375c" : "#B9A083",
			},
			CT: {
				fill: this.state.chosenTitle === "Connecticut" ? "#10375c" : "#8583B9",
			},
			DE: {
				fill: this.state.chosenTitle === "Delaware" ? "#10375c" : "#B983AE",
			},
			FL: {
				fill: this.state.chosenTitle === "Florida" ? "#10375c" : "#B7B983",
			},
			GA: {
				fill: this.state.chosenTitle === "Georgia" ? "#10375c" : "#B9838A",
			},
			HI: {
				fill: this.state.chosenTitle === "Hawaii" ? "#10375c" : "#839cb9",
			},
			ID: {
				fill: this.state.chosenTitle === "Idaho" ? "#10375c" : "#B9838A",
			},
			IL: {
				fill: this.state.chosenTitle === "Illinois" ? "#10375c" : "#83B9A0",
			},
			IN: {
				fill: this.state.chosenTitle === "Indiana" ? "#10375c" : "#839CB9",
			},
			IA: {
				fill: this.state.chosenTitle === "Iowa" ? "#10375c" : "#B9838A",
			},
			KS: {
				fill: this.state.chosenTitle === "Kansas" ? "#10375c" : "#839cba",
			},
			KY: {
				fill: this.state.chosenTitle === "Kentucky" ? "#10375c" : "#8583B9",
			},
			LA: {
				fill: this.state.chosenTitle === "Louisiana" ? "#10375c" : "#8583B9",
			},
			ME: {
				fill: this.state.chosenTitle === "Maine" ? "#10375c" : "#B7B983",
			},
			MD: {
				fill: this.state.chosenTitle === "Maryland" ? "#10375c" : "#B9A083",
			},
			MA: {
				fill:
					this.state.chosenTitle === "Massachusetts" ? "#10375c" : "#83B9A0",
			},
			MI: {
				fill: this.state.chosenTitle === "Michigan" ? "#10375c" : "#83B9A0",
			},
			MN: {
				fill: this.state.chosenTitle === "Minnesota" ? "#10375c" : "#839CB9",
			},
			MS: {
				fill: this.state.chosenTitle === "Mississippi" ? "#10375c" : "#839CB9",
			},
			MO: {
				fill: this.state.chosenTitle === "Missouri" ? "#10375c" : "#B7B983",
			},
			MT: {
				fill: this.state.chosenTitle === "Montana" ? "#10375c" : "#83B9A0",
			},
			NE: {
				fill: this.state.chosenTitle === "Nebraska" ? "#10375c" : "#B983AE",
			},
			NV: {
				fill: this.state.chosenTitle === "Nevada" ? "#10375c" : "#8583B9",
			},
			NH: {
				fill:
					this.state.chosenTitle === "New Hampshire" ? "#10375c" : "#839CB9",
			},
			NJ: {
				fill: this.state.chosenTitle === "New Jersey" ? "#10375c" : "#B983AE",
			},
			NM: {
				fill: this.state.chosenTitle === "New Mexico" ? "#10375c" : "#B983AE",
			},
			NY: {
				fill: this.state.chosenTitle === "New York" ? "#10375c" : "#B9838A",
			},
			NC: {
				fill:
					this.state.chosenTitle === "North Carolina" ? "#10375c" : "#839CB9",
			},
			ND: {
				fill: this.state.chosenTitle === "North Dakota" ? "#10375c" : "#B9A083",
			},
			OH: {
				fill: this.state.chosenTitle === "Ohio" ? "#10375c" : "#B983AE",
			},
			OK: {
				fill: this.state.chosenTitle === "Oklahoma" ? "#10375c" : "#83B9A0",
			},
			OR: {
				fill: this.state.chosenTitle === "Oregon" ? "#10375c" : "#B9A083",
			},
			PA: {
				fill: this.state.chosenTitle === "Pennsylvania" ? "#10375c" : "#83B9A0",
			},
			RI: {
				fill: this.state.chosenTitle === "Rhode Island" ? "#10375c" : "#839CB9",
			},
			SC: {
				fill:
					this.state.chosenTitle === "South Carolina" ? "#10375c" : "#8583B9",
			},
			SD: {
				fill: this.state.chosenTitle === "South Dakota" ? "#10375c" : "#8583B9",
			},
			TN: {
				fill: this.state.chosenTitle === "Tennessee" ? "#10375c" : "#B9A083",
			},
			TX: {
				fill: this.state.chosenTitle === "Texas" ? "#10375c" : "#b9838a",
			},
			UT: {
				fill: this.state.chosenTitle === "Utah" ? "#10375c" : "#839CBA",
			},
			VT: {
				fill: this.state.chosenTitle === "Vermont" ? "#10375c" : "#B9A083",
			},
			VA: {
				fill: this.state.chosenTitle === "Virginia" ? "#10375c" : "#83B9A0",
			},
			WA: {
				fill: this.state.chosenTitle === "Washington" ? "#10375c" : "#839CB9",
			},
			WV: {
				fill:
					this.state.chosenTitle === "West Virginia" ? "#10375c" : "#B7B983",
			},
			WI: {
				fill: this.state.chosenTitle === "Wisconsin" ? "#10375c" : "#B983AE",
			},
			WY: {
				fill: this.state.chosenTitle === "Wyoming" ? "#10375c" : "#B7B983",
			},
			DC1: {
				fill: this.state.chosenOption.abbr === "DC" ? "#10375c" : "#b9838a",
			},
			DC2: {
				fill: this.state.chosenTitle.abbr === "DC" ? "#10375c" : "#b9838a",
			},
		};
	};
	render() {
		if (this.props.teams.requesting === true) {
			return <div>Loading, one second.</div>;
		} else {
			return (
				<div className="Map">
					<USAMap
						customize={this.statesCustomConfig()}
						onClick={this.mapHandler}
					/>
					<SportsCards
						show={this.state.showSportsCard}
						chosenOption={this.state.chosenOption}
						chosenTitle={this.state.chosenTitle}
					/>
				</div>
			);
		}
	}
}

const mSTP = (state) => {
	return {
		teams: state.sportsTeams,
	};
};

const mDTP = (dispatch) => {
	return {
		getSportsTeams: (info) => dispatch(getSportsTeams(info)),
	};
};

export default connect(mSTP, mDTP)(SportsMap);
