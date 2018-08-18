 import React  from "react";

 export class Header extends React.Component {

    shouldComponentUpdate(nextProps ,  nextState) {
        return false
    }
    render(){
        return <h1 className='f2'>Robo Friends</h1>
    }
}
