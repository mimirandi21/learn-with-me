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
                            <h1><u><b>{this.props.chosenTitle}</b></u></h1>
                            <br/>
                            
                            <div className="sportArea">
                            <h3><b>Baseball:</b></h3>
                            {this.props.chosenOption.map(team => {
                                if (team.league === "MLB") {
                                    return (<div className="teamArea">
                                        <img height="50px" src={team.logo} />
                                        <h5>{team.teamname}</h5>
                                        <a href={team.website}>Team Site</a>
                                    </div>)
                                }
                            })}
                            </div>
                            <br />
                            <br/>
                            <div className="sportArea">
                            <h3><b>Basketball:</b></h3>
                            {this.props.chosenOption.map(team => {
                                if (team.league === "NBA" || team.league === "WNBA") {
                                    return (<div className="teamArea">
                                        <img height="50px" src={team.logo} />
                                        <h5>{team.teamname}</h5>
                                        <a href={team.website}>Team Site</a>
                                    </div>)
                                }
                            })}
                            </div>
                            <br />
                            <br/>
                            <div className="sportArea">
                            <h3><b>Football:</b></h3>
                            {this.props.chosenOption.map(team => {
                                if (team.league === "NFL") {
                                    return (<div className="teamArea">
                                        <img height="50px" src={team.logo} />
                                        <h5>{team.teamname}</h5>
                                        <a href={team.website}>Team Site</a>
                                    </div>)
                                }
                            })}
                            </div>
                            <br />
                            <br/>
                            <div className="sportArea">
                            <h3><b>Hockey:</b></h3>
                            {this.props.chosenOption.map(team => {
                                if (team.league === "NHL") {
                                    return (<div className="teamArea">
                                        <img height="50px" src={team.logo} />
                                        <h5>{team.teamname}</h5>
                                        <a href={team.website}>Team Site</a>
                                    </div>)
                                }
                            })}
                            </div>
                            <br/>
                            <br />
                            <div className="sportArea">
                            <h3><b>Soccer:</b></h3>
                            {this.props.chosenOption.map(team => {
                                if (team.league === "MLS") {
                                    return (<div className="teamArea">
                                        <img height="50px" src={team.logo} />
                                        <h5>{team.teamname}</h5>
                                        <a href={team.website}>Team Site</a>
                                    </div>)
                                }
                            })}
                            </div>
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