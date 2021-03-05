import React from 'react'
import Flippy, {FrontSide, BackSide} from 'react-flippy'

export default class SportsCards extends React.Component {

    render() {
          
            return(
            <div className="card">
                {console.log(this.props)}
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
                        <span>
                            <h1><b><u>{this.props.chosenTitle}</u></b></h1>
                            <br/>
                              
                        </span>
                    </FrontSide>
                    <BackSide className="backSide">
                        
                    </BackSide>
                </Flippy>
            </div>
        )
        }
}
