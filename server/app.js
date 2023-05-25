const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const uuid = require("uuid");

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/desserts", (req, res) => {
  console.log("COOKIES", req.cookies);

  const data = [
    {
      id: uuid(),
      name: "Peanut Butter Cookie",
      ingredients: "Peanut Butter, Peanuts",
      category: "biscuits",
    },
    {
      id: uuid(),
      name: "Chocolate Chip Cookie",
      ingredients: "Dark Chocolate Chips, White Chocolate Chips",
      category: "biscuits",
    },
    {
      id: uuid(),
      name: "Red Velvet Cupcake",
      ingredients:
        "Cream Cheese Frosting, Pure Vanilla Extract, Red Food Coloring",
      category: "cakes",
    },
    {
      id: uuid(),
      name: "Classic Cheesecake",
      ingredients:
        "Full-fat Cream Cheese, Full-fat Sour Cream, Fresh Lemon Juice",
      category: "cakes",
    },
    {
      id: uuid(),
      name: "Chocolate Peppermint Cheesecake",
      ingredients: "Cream Cheese, Chopped Candy Canes, White Chocolate",
      category: "cakes",
    },
  ];

  let customData = data;
  const { personalPreference } = req.cookies;

  if (personalPreference) {
    customData = customData.filter(
      (item) => item.category === personalPreference
    );
  }

  res.status(200).send(customData);
});

const server = app.listen(5050, function () {
  console.log("App running on port", server.address().port);
});
