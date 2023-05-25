import { useState, useEffect } from "react";
import axios from "axios";
import JSCookies from "js-cookie";

function Cookies() {
  const [desserts, setDesserts] = useState([]);

  const fetchDesserts = () => {
    axios
      .get("http://localhost:5050/desserts", { withCredentials: true })
      .then((response) => {
        setDesserts(response.data);
      })
  }

  useEffect(() => {
    fetchDesserts();
  }, [])

  const handlePreference = (event) => {
    const personalPreference = event.target.value;

    JSCookies.set(
      "personalPreference", 
      personalPreference, 
      // { expires: 1 / 24 / 60 / 30 }
    );
    fetchDesserts();
  }

  return (
    <section>
      <h2>🍪 Cookies 🍪</h2>
      <p>Please select your personal preference:</p>
      <select onChange={handlePreference}>
        <option value="">Please select</option>
        <option value="biscuits">Biscuits</option>
        <option value="cakes">Cakes</option>
      </select>

      {desserts.map((dessert) => (
        <article key={dessert.id}>
          <h3>{dessert.name}</h3>
          <p>Ingredients: {dessert.ingredients}</p>
          <p>Category: {dessert.category}</p>
        </article>
      ))}
    </section>
  );
}

export default Cookies;
