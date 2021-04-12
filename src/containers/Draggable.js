// import React, { Component } from 'react';

// class Draggable extends Component {

//     constructor(props) {
//         super(props);
//         this.myRef = React.createRef();
//         this.state = {
//             counter: this.props.counter,
//             pos: this.props.initialPos,
//             dragging: false,
//             rel: null // position relative to the cursor
//         };
//     }

//     /*  we could get away with not having this (and just having the listeners on
//      our div), but then the experience would be possibly be janky. If there's
//      anything w/ a higher z-index that gets in the way, then you're toast,
//      etc.*/
//     componentDidUpdate(props, state) {
//         if (this.state.dragging && !state.dragging) {
//             document.addEventListener('mousemove', this.onMouseMove);
//             document.addEventListener('mouseup', this.onMouseUp);
//         } else if (!this.state.dragging && state.dragging) {
//             document.removeEventListener('mousemove', this.onMouseMove);
//             document.removeEventListener('mouseup', this.onMouseUp);
//         }
//     }

//     // calculate relative position to the mouse and set dragging=true
//     onMouseDown = (e) => {
//         if (e.button !== 0) return;
//         let pos = { left: this.myRef.current.offsetLeft, top: this.myRef.current.offsetTop }
//         this.setState({
//             dragging: true,
//             rel: {
//                 x: e.pageX - pos.left,
//                 y: e.pageY - pos.top
//             }
//         });
//         e.stopPropagation();
//         e.preventDefault();
//     }

//     onMouseUp = (e) => {
//         this.setState({ dragging: false });
//         e.stopPropagation();
//         e.preventDefault();
//     }

//     onMouseMove = (e) => {
//         if (!this.state.dragging) return;

//         this.setState({
//             pos: {
//                 x: e.pageX - this.state.rel.x,
//                 y: e.pageY - this.state.rel.y
//             }
//         });
//         e.stopPropagation();
//         e.preventDefault();
//     }

//     render() {
//         return (
//             <span ref={this.myRef} onMouseDown={this.onMouseDown} style={{ position: 'absolute', left: this.state.pos.x + 'px', top: this.state.pos.y + 'px' }}>
//                 {this.props.children}
//             </span>
//         )
//     }
// }

// export default Draggable;
