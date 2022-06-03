import axios from "axios";
import { Component } from "react";
import Cookies from "js-cookie";

class CookieDemo extends Component {
    // initialize state
    state = {
        desserts: [],
        preference: Cookies.get("personalPreference") || ""
    }

    // componentDidMount
    componentDidMount() {
        this.fetchDesserts();
    }

    fetchDesserts = () => {
        //once it mounts we want to trigger our API request
        axios
            .get("http://localhost:3003/desserts", { withCredentials: true })
            .then(response => {
                // setState with our desserts
                this.setState({
                    desserts: response.data
                })
            })
    }

    handlePreference = (event) => {
        this.setState({
            preference: event.target.value
        }, () => {
            if (this.state.preference) {
                const TEN_SECONDS = 1 / 24 / 60 / 6;
                Cookies.set("personalPreference", this.state.preference, { expires: TEN_SECONDS });
            } else {
                Cookies.remove("personalPreference");
            } 
    
            this.fetchDesserts();
        })
    }

    render() {
        return (
            <>
                <h2>Cookie Demo</h2>
                {!this.state.desserts.length && <p>Desserts being baked...</p>}

                <select value={this.state.preference} onChange={this.handlePreference}>
                    <option value="">No Preference</option>
                    <option value="cookie">Cookie</option>
                    <option value="cupcake">Cupcake</option>
                    <option value="cheesecake">Cheesecake</option>    
                </select>

                <ul>
                {this.state.desserts.map((dessert) => {
                    return (
                        <li key={dessert.id}>
                            <strong>{dessert.name}</strong>
                            <p>{dessert.ingredients}</p>
                            <p>{dessert.type}</p>
                        </li>
                    );
                })}
                </ul>
            </>
        )
    }
}

export default CookieDemo;