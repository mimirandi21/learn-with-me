import React from 'react'

export default class Click extends React.Component {
    constructor(){
        super()
        this.state = {
            number: 0
        }
    }

    increment = () => {
        console.log("a")
        fetch("http://localhost:3001/capitals").then(resp => {
            console.log("b", resp)
            return resp.json()
        }).then(data => console.log("c", data)
    )
    console.log("d")
    // a,d,b,c
        // this.setState(pS => {
        //     return {number: pS.number + 1}
        // })
    }

    render() {
        return(
            <div>
                <button onClick={this.increment}>Click me!</button>
                <h1>{this.state.number}</h1>
            </div>
        )
    }
}