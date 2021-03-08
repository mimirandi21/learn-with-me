import React from 'react'
import Flippy, {FrontSide, BackSide} from 'react-flippy'

export default class CapitalCards extends React.Component {

    render() {
        //*render no card if no usstate chosen
        if (this.props.chosenOption.length === 0){
            return null
        //*render card when state chosen
        }else {  
            return(
                //font import
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
