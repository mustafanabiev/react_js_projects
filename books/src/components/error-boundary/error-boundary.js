import React, {Component} from "react";

class ErrorBoundary extends Component {

    state = {
        error: false,
        hasError: false

    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: true
        })
    }


    render() {
        if (this.state.error) {
            return <h1>Has error sorry</h1>
        }
       return this.props.children
    }
}
export default ErrorBoundary;