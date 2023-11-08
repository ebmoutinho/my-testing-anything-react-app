import React, { useState, useEffect } from "react";
import "./App.css";
import useGptSlot from "./hooks/useGptSlot/useGptSlot";
import { mockAds } from "./mockAds/mockAds";

// // Parses the JSON returned by a network request
// const parseJSON = (resp) => (resp.json ? resp.json() : resp);

// // Checks if a network request came back fine, and throws an error if not
// const checkStatus = (resp) => {
// 	if (resp.status >= 200 && resp.status < 300) {
// 		return resp;
// 	}

// 	return parseJSON(resp).then((resp) => {
// 		throw resp;
// 	});
// };

const headers = { "Content-Type": "application/json" };
const baseUrl = "http://127.0.0.1:1337";

const App = () => {
	const [restaurants, setRestaurants] = useState([]);
	const [products, setProducts] = useState([]);

	// useEffect(() => {
	// 	fetch("http://127.0.0.1:1337/api/restaurants", { headers, method: "GET" })
	// 		.then(checkStatus)
	// 		.then(parseJSON)
	// 		.then(({ data }) => setRestaurants(data.data))
	// 		.catch((error) => setError(error));
	// }, []);

	const fetchRestaurants = async () => {
		const response = await fetch("http://127.0.0.1:1337/api/restaurants", {
			headers,
			method: "GET",
		});

		const restaurants = await response.json();
		setRestaurants(restaurants.data);
		console.log("restaurants ", restaurants.data);
	};

	const fetchProducts = async () => {
		// /api/products/:id
		const response = await fetch("http://127.0.0.1:1337/api/products?populate=*", {
			headers,
			method: "GET",
		});

		const products = await response.json();
		setProducts(products.data);
		console.log("products ", products.data);
		console.log(
			"productImage",
			products.data[0].attributes.productImage.data[0].attributes
		);
		console.log(
			"productImage url",
			products.data[0].attributes.productImage.data[0].attributes.url
		);
	};

	useEffect(() => {
		fetchRestaurants();
		fetchProducts();
	}, []);

	// if (error) {
	// 	console.log(error);
	// 	// Print errors if any
	// 	return <div>An error occurred: {error.message}</div>;
	// }

	return (
		<div>
			<p>Olá</p>
			<p>Olá</p>
			<p>Olá</p>
			<div>
				<h4>Content fetched from Strapi API</h4>
				<p>Restaurants fetched:</p>
				<ul>
					{restaurants.map(({ id, attributes }) => (
						<li key={id}>{attributes.restaurantName}</li>
					))}
				</ul>
				<p>Products fetched:</p>
				<ul>
					{products.map(({ id, attributes }) => {
						const baseUrl = "http://127.0.0.1:1337";
						const imageUrl = attributes.productImage[0].url;
						console.log(
							"attributes.productImage ",
							attributes.productImage[0].url
						);
						// /uploads/mng_Product02_08b4159a3d.png
						//http://127.0.0.1:1337/uploads/mng_Product02_08b4159a3d.png
						return (
							<>
								<li key={id}>{attributes.productName}</li>
								<li key={id}>{attributes.productDescription}</li>
								<img
									href={
										"http://127.0.0.1:1337/uploads/large_mng_Product02_08b4159a3d.png"
									}
									alt="some alt text"
								/>
							</>
						);
					})}
				</ul>
				<br />
				<img
					src="http://127.0.0.1:1337/media/cc0-images/grapefruit-slice-332-332.jpg"
					alt="Grapefruit slice atop a pile of other slices"
					width="500"
					height="600"
				/>
				<br />
				<img
					src="https://placedog.net/499"
					alt="https://placedog.net/500"
					width="500"
					height="600"
				/>
			</div>
		</div>
	);
};

export default App;
