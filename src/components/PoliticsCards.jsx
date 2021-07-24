import React, { useRef } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

const DC = 'DC';
const TITLE = 'title';
const GOVERNOR = 'governor';
const SENATOR = 'senator';
const SENATOR_LIST = 'senator list';

const TitleHeading = ({ heading }) => (
  <h1>
    <b>
      <u>{heading}</u>
    </b>
  </h1>
);

const ElectoralCollegeStats = ({ electoral }) => (
  <>
    <h3>Number of Electoral College Votes:</h3>
    <h5>{electoral}</h5>
  </>
);

export const PoliticsCards = ({ chosenOption, chosenTitle }) => {
  const { congressmen, flag, abbr, electoral, governor, senator, website } =
    chosenOption;
  const isDC = (str) => str === DC;
  const handleDC = (str, type) => {
    switch (type) {
      case TITLE:
        return isDC(str) ? chosenTitle : 'Washington D.C';
      case GOVERNOR:
        return isDC(str) ? 'Governor:' : 'Mayor:';
      case SENATOR:
        return isDC(str) ? 'Senators:' : null;
      case SENATOR_LIST:
        return isDC(str) ? `${senator[0]}  &  ${senator[1]}` : null;

      default:
        throw new Error('error: select a valid type for chosenOption');
    }
  };
  const ref = useRef();
  if (!chosenOption) {
    return null;
  } else {
    const listCongress = congressmen.map((person) => <li>{person}</li>);
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
              src={flag}
            />
            <br />
            <br />

            <span>
              <TitleHeading heading={handleDC(abbr, TITLE)} />
              <br />
              <ElectoralCollegeStats electoral={electoral} />
              <br />
              <h3>{abbr !== 'DC' ? 'Governor:' : 'Mayor:'}</h3>
              <h5>{governor}</h5>
              <br />
              <h3>{abbr !== 'DC' ? 'Senators:' : null}</h3>
              <h5>
                {abbr !== 'DC' ? `${senator[0]}  &  ${senator[1]}` : null}
              </h5>
              <br />
              <h3>Congressmen/Congresswomen:</h3>
              <ul className="congress">{listCongress}</ul>
              <h3>
                <a href={website}>Learn more here!</a>
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
