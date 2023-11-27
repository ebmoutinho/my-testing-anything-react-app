import React, { useEffect, useState } from "react";
import RestaurantCard from "./components/restaurant-card/RestaurantCard";
import StrapiProductCard from "./components/strapi-product-card/StrapiProductCard";

const headers = { "Content-Type": "application/json" };
// const baseUrl = "http://127.0.0.1:1337";

const Strapi = () => {
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
		// console.log("products ", products.data);
		// console.log(
		// 	"productImage",
		// 	products.data[0].attributes.productImage.data[0].attributes
		// );
		// console.log(
		// 	"productImage url",
		// 	products.data[0].attributes.productImage.data[0].attributes.url
		// );
	};

	useEffect(() => {
		fetchRestaurants();
		fetchProducts();
	}, []);
	return (
		<div>
			Strapi
			<div>
				<StrapiProductCard data={restaurants} />
				<RestaurantCard data={restaurants} />
				<div>
					<h4>Content fetched from Strapi API</h4>

					<p>Restaurants fetched:</p>
					<div id="restaurants">
						{restaurants.map(({ id, attributes }) => (
							<li key={id}>{attributes.restaurantName}</li>
						))}
					</div>

					<p>Products fetched:</p>
					<div id="products">
						{products.map(({ id, attributes }) => {
							const baseUrl = "http://127.0.0.1:1337";
							// const imageUrl = attributes.productImage[0].url;
							console.log(
								"attributes.productImage[0] ",
								attributes.productImage.data[0].attributes.url
							);
							console.log(
								"attributes.productImage[0] ",
								attributes.productImage.data[1].attributes.url
							);
							// /uploads/mng_Product02_08b4159a3d.png
							//http://127.0.0.1:1337/uploads/mng_Product02_08b4159a3d.png
							return (
								<>
									<li key={id}>{attributes.productName}</li>
									<li key={id}>{attributes.productDescription}</li>

									{attributes.productImage.data.map((img) => {
										const individualImageUrl = img.attributes.url;
										return (
											<img
												src={`${baseUrl}${individualImageUrl}`}
												alt={individualImageUrl}
											/>
										);
									})}
									{/* <img
									src={`${baseUrl}/uploads/mng_Product02_08b4159a3d.png`}
									alt="mng_Product02"
								/>

								<img
									src={`${baseUrl}/uploads/mng_product_4800835526.png`}
									alt="mng_product"
								/> */}
								</>
							);
						})}
					</div>
					<br />
					<img
						src="http://127.0.0.1:1337/media/cc0-images/grapefruit-slice-332-332.jpg"
						alt="Grapefruit slice atop a pile of other slices"
						width="500"
						height="600"
					/>
					<br />
					<img
						src="https://placedog.net/499/"
						alt="https://placedog.net/500"
						width="500"
						height="600"
					/>
				</div>
			</div>
		</div>
	);
};

export default Strapi;
