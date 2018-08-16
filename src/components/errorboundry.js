import  React  from "react";

export class ErrorBoundry extends React.Component {

    constructor(){
        super();
        this.state = {
            hasError : false
        }
    }

    componentDidCatch(err , info ) {
        this.setState({
            hasError : true
        })
    }

    render () {
        return this.state.hasError ? <h1> Opps !!! .... </h1> : this.props.children;
    }


}