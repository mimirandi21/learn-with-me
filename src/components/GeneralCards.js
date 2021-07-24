import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

export default class SportsCards extends React.Component {
  // formatting for order and size (st, nd, rd) / formatting for date
  formatDate(string) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(string).toLocaleDateString([], options);
  }

  ordinal_suffix_of(i) {
    const j = i % 10;
    const k = i % 100;
    if (j == 1 && k != 11) {
      return `${i}st`;
    }
    if (j == 2 && k != 12) {
      return `${i}nd`;
    }
    if (j == 3 && k != 13) {
      return `${i}rd`;
    }
    return `${i}th`;
  }

  render() {
    //* render no card if no usstate chosen
    if (!this.props.chosenOption) {
      return null;
      //* render card when state chosen
    }
    // use of formatting for order and size (st, nd, rd) / formatting for date
    const formattedOrder = this.props.chosenOption.abbr !== 'DC'
      ? this.ordinal_suffix_of(this.props.chosenOption.order)
      : null;
    const formattedDate = this.props.chosenOption.abbr !== 'DC'
      ? this.formatDate(this.props.chosenOption.year)
      : null;
    const formattedRank = this.props.chosenOption.abbr !== 'DC'
      ? this.ordinal_suffix_of(this.props.chosenOption.poprank)
      : null;
    const formattedSize = this.props.chosenOption.abbr !== 'DC'
      ? this.ordinal_suffix_of(this.props.chosenOption.sizerank)
      : null;
    //! different info when DC chosen
    return (
      <div className="card">
        <Flippy
          className="flippyContainer"
          flipOnClick
          flipOnHover={false}
          flipDirection="horizontal"
          ref={(r) => (this.flippy = r)}
        >
          <FrontSide className="frontSide">
            <span>
              <h1>
                <b>
                  {this.props.chosenOption.abbr !== 'DC'
                    ? this.props.chosenTitle
                    : 'Washington D.C'}
                </b>
                {' '}
                {this.props.chosenOption.abbr !== 'DC'
                  ? `became the ${formattedOrder} state on ${formattedDate}.`
                  : null}
              </h1>
              <h2>
                {this.props.chosenOption.abbr !== 'DC'
                  ? `It is the ${formattedRank} most populated state with ${this.props.chosenOption.population.toLocaleString()} people.`
                  : `${this.props.chosenOption.population} people live in Washington D.C.`}
              </h2>
              <h2>
                {this.props.chosenOption.abbr !== 'DC'
                  ? `Its area is ${this.props.chosenOption.size.toLocaleString()} sq mi, making it the ${formattedSize} largest state.`
                  : `It is ${this.props.chosenOption.size} sq mi in area.`}
              </h2>
              <br />
              <h3>Nickname(s):</h3>
              <ul>
                {this.props.chosenOption.nickname.length > 1 ? (
                  this.props.chosenOption.nickname.map((nickname) => (
                    <li>{nickname}</li>
                  ))
                ) : (
                  <li>{this.props.chosenOption.nickname}</li>
                )}
              </ul>
              <br />
              <h3>Motto:</h3>
              <h5>{this.props.chosenOption.motto}</h5>
              <br />
              <h3>
                {this.props.chosenOption.abbr !== 'DC' ? 'Largest City' : null}
              </h3>
              <h5>{this.props.chosenOption.largestcity}</h5>
              <br />
              <div className="generalImg">
                <figure className="generalFigure">
                  <h3>State Flower:</h3>
                  <img
                    src={this.props.chosenOption.flowerimg}
                    height="300px"
                    alt={this.props.chosenOption.flower}
                  />
                  <figcaption>{this.props.chosenOption.flower}</figcaption>
                </figure>
                <figure className="generalFigure">
                  <h3>State Bird:</h3>
                  <img
                    src={this.props.chosenOption.birdimg}
                    height="300px"
                    alt={this.props.chosenOption.bird}
                  />
                  <figcaption>{this.props.chosenOption.bird}</figcaption>
                </figure>
                <figure className="generalFigure">
                  <h3>State Tree:</h3>
                  <img
                    src={this.props.chosenOption.treeimg}
                    height="300px"
                    alt={this.props.chosenOption.tree}
                  />
                  <figcaption>{this.props.chosenOption.tree}</figcaption>
                </figure>
              </div>
            </span>
          </FrontSide>
          <BackSide className="backSide" />
        </Flippy>
      </div>
    );
  }
}
