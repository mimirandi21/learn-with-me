import React from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";

export default class CapitalCards extends React.Component {
	getdata = async (data) => {
		return await data;
	};
	getprops = async (data) => {
		if (await this.getdata(data)) {
			this.setState({ loading: false });
		}
	};

	render() {
		//*render no card if no usstate chosen
		if (this.props.chosenOption.length === 0) {
			return null;
			//*render card when state chosen
		} else if (this.props.requesting === true) {
			this.getprops(this.props.capitals);
		} else {
			return (
				//font import
				<div className="card">
					<style>
						@import
						url('https://fonts.googleapis.com/css2?family=Ruslan+Display&family=Seymour+One&display=swap');
					</style>

					<Flippy
						className="flippyContainer"
						flipOnClick={true}
						flipOnHover={false}
						flipDirection="horizontal"
						ref={(r) => (this.flippy = r)}
					>
						<FrontSide className="frontSide">
							<span className="capitalCard">
								<header className="capitalHeader">(flip to see capital)</header>
								<h1 className="capitalText">
									{this.props.chosenOption.usstate}
								</h1>
							</span>
						</FrontSide>
						<BackSide className="capitalBackSide">
							<span className="capitalCard">
								<header className="capitalHeader">
									(flip to see state name)
								</header>
								<h1 className="capitalText">
									{this.props.chosenOption.capital}
								</h1>
							</span>
						</BackSide>
					</Flippy>
				</div>
			);
		}
	}
}
