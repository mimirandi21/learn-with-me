import React from 'react'
import Flippy, {FrontSide, BackSide} from 'react-flippy'

export default class CapitalCards extends React.Component {

    render() {
        if (this.props.chosenOption.length === 0){
            return null
        }else {  
            return(
            <div className="card">
                <style>
@import url('https://fonts.googleapis.com/css2?family=Ruslan+Display&family=Seymour+One&display=swap');
</style>
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
                        
                        <span className="capitalCard">
                            <header className="capitalHeader">(flip to see capital)</header>
                            <h1 className="capitalText">{this.props.chosenOption.usstate}</h1>
                        </span>
                    </FrontSide>
                    <BackSide className="capitalBackSide">
                        <span className="capitalCard">
                            <header className="capitalHeader">(flip to see state name)</header>
                            <h1 className="capitalText">{this.props.chosenOption.capital}</h1>
                        </span>
                    </BackSide>
                </Flippy>
            </div>
        )
        }
    }
}
