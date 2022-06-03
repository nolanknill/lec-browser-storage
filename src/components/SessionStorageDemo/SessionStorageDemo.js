import { Component } from "react";

class SessionStorageDemo extends Component {
    state = {
        isLoggedIn: sessionStorage.getItem("isLoggedIn") || false
    };

    handleSubmit = (event) => {
        // user has submitted "login form"
        event.preventDefault();
        
        // update isLoggedIn state to true!
        this.setState({
            isLoggedIn: true
        }, () => {
            // this callback function gets called once the state is updated!
            sessionStorage.setItem("isLoggedIn", this.state.isLoggedIn);
        })
    }

    render() {
        return (<div>
            <h2>Session Storage Demo</h2>

            {this.state.isLoggedIn ? (
                <p>User is logged in</p>
            ) : (
                <form onSubmit={this.handleSubmit}>
                    <input type="submit" value="Log me in, plz"/>
                </form>
            )}
        </div>);
    }
}

export default SessionStorageDemo;