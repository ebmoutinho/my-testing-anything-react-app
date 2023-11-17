import React, { useState, useEffect } from "react";
import "./App.css";
import ProductCard from "./components/product-card/ProductCard";

const headers = { "Content-Type": "application/json" };
// const baseUrl = "http://127.0.0.1:1337";

const App = () => {
	const [restaurants, setRestaurants] = useState([]);

	const fetchRestaurants = async () => {
		const response = await fetch("http://127.0.0.1:1337/api/restaurants", {
			headers,
			method: "GET",
		});

		const restaurants = await response.json();
		setRestaurants(restaurants.data);
		console.log("restaurants ", restaurants.data);
	};


	useEffect(() => {
		fetchRestaurants();
	}, []);

	return (
		<div>
			<p>Olá</p>
			<ProductCard data={restaurants} />
			<div>
				<h4>Content fetched from Strapi API</h4>
				
				<p>Restaurants fetched:</p>
				<div id="restaurants">
					{restaurants.map(({ id, attributes }) => (
						<li key={id}>{attributes.restaurantName}</li>
					))}
				</div>

			</div>
		</div>
	);
};

export default App;
