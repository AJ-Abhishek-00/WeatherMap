const axios = require("axios");
const fs = require("fs");
require("dotenv").config();

const API_KEY = process.env.WEATHER_API_KEY;

if (!API_KEY) {
  console.error("❌ WEATHER_API_KEY missing in .env file");
  process.exit(1);
}

const DELAY_WEATHER = ["Rain", "Snow", "Extreme"];

// AI Apology Generator
function generateApology(customer, city, weather) {
  const firstName = customer.split(" ")[0];
  return `Hi ${firstName}, your order to ${city} is delayed due to ${weather.toLowerCase()}. We appreciate your patience!`;
}

// Fetch Weather Function (Parallel Safe)
async function fetchWeather(order) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      order.city
    )}&appid=${API_KEY}&units=metric`;

    const res = await axios.get(url);

    const weatherMain = res.data.weather[0].main;

    if (DELAY_WEATHER.includes(weatherMain)) {
      order.status = "Delayed";
      order.message = generateApology(
        order.customer,
        order.city,
        weatherMain
      );
    } else {
      order.status = "On-Time";
    }

    console.log(`✅ Processed ${order.city}`);
    return order;
  } catch (err) {
    console.error(
      `❌ Error fetching weather for ${order.city}`,
      err.response?.data || err.message
    );
    order.status = "Error";
    return order;
  }
}

// Main Function
async function main() {
  try {
    const orders = JSON.parse(fs.readFileSync("orders.json", "utf-8"));

    // ⭐ Parallel Fetching
    const updatedOrders = await Promise.all(
      orders.map((order) => fetchWeather(order))
    );

    fs.writeFileSync(
      "orders.json",
      JSON.stringify(updatedOrders, null, 2)
    );

    console.log("🎉 All orders processed successfully");
  } catch (error) {
    console.error("❌ Failed to process orders file", error.message);
  }
}

main();