import React, {useRef} from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";

export const PoliticsCards = ({chosenOption, chosenTitle}) => { 
	const ref = useRef();
		if (!chosenOption) {
			return null;
		} else {
			const listCongress = chosenOption.congressmen.map((person) => (
				<li>{person}</li>
			));
			return (
				<div className="card">
					<Flippy
						className="flippyContainer"
						flipOnClick={true}
						flipOnHover={false}
						flipDirection="horizontal"
						ref={ref}
					>
						<FrontSide className="frontSide">
							<img
								alt="State Flag"
								className="flagImg"
								height="180px"
								src={chosenOption.flag}
							/>
							<br />
							<br />

							<span>
								<h1>
									<b>
										<u>
											{chosenOption.abbr !== "DC"
												? chosenTitle
												: "Washington D.C"}
										</u>
									</b>
								</h1>
								<br />
								<h3>Number of Electoral College Votes:</h3>
								<h5>{chosenOption.electoral}</h5>
								<br />
								<h3>
									{chosenOption.abbr !== "DC"
										? "Governor:"
										: "Mayor:"}
								</h3>
								<h5>{chosenOption.governor}</h5>
								<br />
								<h3>
									{chosenOption.abbr !== "DC" ? "Senators:" : null}
								</h3>
								<h5>
									{chosenOption.abbr !== "DC"
										? `${chosenOption.senator[0]}  &  ${chosenOption.senator[1]}`
										: null}
								</h5>
								<br />
								<h3>Congressmen/Congresswomen:</h3>
								<ul className="congress">{listCongress}</ul>
								<h3>
									<a href={chosenOption.website}>Learn more here!</a>
								</h3>
							</span>
						</FrontSide>

						<BackSide className="backSide"></BackSide>
					</Flippy>
				</div>
			);
		}
	};

export default PoliticsCards;
