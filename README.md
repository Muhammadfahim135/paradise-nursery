# Paradise Nursery

Paradise Nursery is a modern plant shopping cart application built with React and Vite. It allows users to browse a curated collection of plants, add them to a cart, adjust quantities, and review the checkout summary in an easy-to-use interface.

## Features

- Responsive nursery storefront and hero section
- Category-based plant listings
- Add-to-cart functionality with quantity updates
- Remove item and decrement controls
- Dynamic subtotal and total calculations
- Empty cart state and checkout confirmation message
- Clean green, nature-inspired design

## Technologies Used

- React
- JavaScript
- Vite
- CSS

## React Concepts Demonstrated

- Components
- Props
- State
- useState
- Event handling
- Conditional rendering
- Lists and keys
- Reusable component composition
- Unidirectional data flow

## Installation

1. Clone or open the project folder.
2. Navigate to the project directory.
3. Run the following command:

```bash
npm install
```

## Run the Project

```bash
npm run dev
```

Then open the local URL shown in the terminal, usually http://localhost:5173.

## Project Structure

```text
src/
  components/
    Navbar.jsx
    Hero.jsx
    PlantList.jsx
    PlantCard.jsx
    Cart.jsx
    CartItem.jsx
    Footer.jsx
  data/
    plants.js
  App.jsx
  App.css
  index.css
  main.jsx
```

## Shopping Cart Functionality

The cart supports:

- Adding plants to the cart
- Preventing quantity from dropping below 1
- Increasing and decreasing quantities
- Removing items
- Reusing the same item instead of creating duplicates
- Calculating subtotal and total automatically
- Displaying a checkout confirmation message

## Author

Author: Your Name

---

This project is designed as a beginner-friendly React shopping cart demo with local static data and no backend dependency.
