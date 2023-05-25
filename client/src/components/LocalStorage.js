import "./LocalStorage.css";
import { useState } from "react";

function LocalStorage() {
    const [firstName, setFirstName] = useState(localStorage.getItem("firstName"));
    const [favouriteAnimal, setFavouriteAnimal] = useState(localStorage.getItem("favouriteAnimal"));

    const handleFirstNameChange = (event) => {
        const newFirstName = event.target.value;
        setFirstName(newFirstName);
        localStorage.setItem("firstName", newFirstName);
    }

    const handleFavouriteAnimalChange = (event) => {
        const newFavouriteAnimal = event.target.value;
        setFavouriteAnimal(newFavouriteAnimal);
        localStorage.setItem("favouriteAnimal", newFavouriteAnimal);
    }

    const handleSave = (event) => {
        event.preventDefault();
        setFirstName("");
        setFavouriteAnimal("");

        localStorage.removeItem("firstName");
        localStorage.removeItem("favouriteAnimal");

        alert("Your information has been saved to our API");        
    }

    return (
        <section>
            <h2>Local Storage</h2>
            <form onSubmit={handleSave} className="form">
                <label>First Name:
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        onChange={handleFirstNameChange}
                        value={firstName}
                    />
                </label>
                <label>Favourite Animal:
                    <input
                        type="text"
                        name="favouriteAnimal"
                        placeholder="Favourite animal"
                        onChange={handleFavouriteAnimalChange}
                        value={favouriteAnimal}
                    />
                </label>
                <button className="form__submit">Save</button>
            </form>
        </section>
    );
}

export default LocalStorage;
