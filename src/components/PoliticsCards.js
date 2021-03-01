import React from 'react'
import Flippy, {FrontSide, BackSide} from 'react-flippy'

export default class PoliticsCards extends React.Component {

    render() {
        
        if (!this.props.chosenOption){
            return null
        } else {
            const listCongress = this.props.chosenOption.congressmen.map(person => 
                <li>{person}</li>
            );
        
        return(
            <div className="card">
                {console.log(this.props.chosenOption.congressmen)}
                <Flippy
                    className="flippyContainer"
                    flipOnClick={true}
                    flipOnHover={false}
                    flipDirection="horizontal"
                    ref={(r) => this.flippy = r}
                >
                    <FrontSide
                        className="frontSide"
                    >
                        <img 
                            alt="State Flag"
                            className="flagImg"
                            height="180px"
                            src={this.props.chosenOption.flag} 
                        />
                        <span>
                            <h3>Number of Electoral College Votes:</h3>
                            <h5>{this.props.chosenOption.electoral}</h5>
                            <h3>Governor:</h3>
                            <h5>{this.props.chosenOption.governor}</h5>
                            <h3>Senators:</h3>
                            <h5>{this.props.chosenOption.senator[0]}, {this.props.chosenOption.senator[1]}</h5>
                            <h3>Congressmen/Congresswomen:</h3>
                            <ul>{listCongress}
                            </ul>
                        </span>
                    </FrontSide>
                    <BackSide className="backSide">
                        
                    </BackSide>
                </Flippy>
            </div>
        )
    }
}
}