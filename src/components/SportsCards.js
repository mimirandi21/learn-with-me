import React from 'react'
import Flippy, {FrontSide, BackSide} from 'react-flippy'

export default class SportsCards extends React.Component {

    render() {
        
        if (this.props.chosenOption.length === 0){
            return <div>This state has no teams :(</div>
        } else {
            console.log(this.props)
              const listTeam = this.props.chosenOption.map(team => {
                  <div>
                    <img height="30px" src={team.logo} />
                    <h4>{team.teamname}</h4>
                    <a href={team.website}/>
                  </div>
              })    
            return(
            <div className="card">
                {console.log(this.props.chosenOption)}
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
                            <h3>Baseball:</h3>
                            {this.props.chosenOption.map(team => {
                                if (team.league === "MLB") {
                                    return (<div>
                                        <img height="30px" src={team.logo} />
                                        <h5>{team.teamname}</h5>
                                        <a href={team.website}/>
                                    </div>)
                                }
                            })}
                            <br />
                            <h3>Basketball:</h3>
                            {this.props.chosenOption.map(team => {
                                if (team.league === "NBA" || team.league === "WNBA") {
                                    return (<div>
                                        <img height="30px" src={team.logo} />
                                        <h5>{team.teamname}</h5>
                                        <a href={team.website}/>
                                    </div>)
                                }
                            })}
                            <br />
                            <h3>Football:</h3>
                            {this.props.chosenOption.map(team => {
                                if (team.league === "NFL") {
                                    return (<div>
                                        <img height="30px" src={team.logo} />
                                        <h5>{team.teamname}</h5>
                                        <a href={team.website}/>
                                    </div>)
                                }
                            })}
                            <br />
                            
                            <h3>Hockey:</h3>
                            {this.props.chosenOption.map(team => {
                                if (team.league === "NHL") {
                                    return (<div>
                                        <img height="30px" src={team.logo} />
                                        <h5>{team.teamname}</h5>
                                        <a href={team.website}/>
                                    </div>)
                                }
                            })}
                        
                            <br />
                            <h3>Soccer:</h3>
                            {this.props.chosenOption.map(team => {
                                if (team.league === "MLS") {
                                    return (<div>
                                        <img height="30px" src={team.logo} />
                                        <h5>{team.teamname}</h5>
                                        <a href={team.website}/>
                                    </div>)
                                }
                            })}
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