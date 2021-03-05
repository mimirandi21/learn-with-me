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
                {console.log(this.props.chosenOption.title)}
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
                        <br/>
                        <br/>
                        
                        <span>
                          
                            <h1><b><u>{this.props.chosenOption.abbr !== "DC" ? this.props.chosenTitle : 'Washington D.C'}</u></b></h1>
                            <br/>
                            <h3>Number of Electoral College Votes:</h3>
                            <h5>{this.props.chosenOption.electoral}</h5>
                            <br/>
                            <h3>{this.props.chosenOption.abbr !== "DC" ? 'Governor:' : 'Mayor:'}</h3>
                            <h5>{this.props.chosenOption.governor}</h5>
                            <br/>
                            <h3>{this.props.chosenOption.abbr !== "DC" ? 'Senators:' : null}</h3>
                            <h5>{this.props.chosenOption.abbr !== "DC" ? `${this.props.chosenOption.senator[0]}, ${this.props.chosenOption.senator[1]}` : null }</h5>
                            <br/>
                            <h3>Congressmen/Congresswomen:</h3>
                            <ul className="congress">{listCongress}
                            </ul>
                            <h3><a href={this.props.chosenOption.website}>Learn more here!</a></h3>
                            
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