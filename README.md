# 🌦️ Weather Delay Automation System

This project is a Node.js automation script that checks real-time weather conditions for delivery cities and flags potential delivery delays.

It demonstrates parallel API processing, error resilience, environment security, and AI-style personalized messaging.

---

## 🚀 Features

* Parallel Weather API Fetching using **Promise.all**
* Delivery delay detection based on weather conditions
* Personalized "Weather-Aware Apology" message generation
* Robust error handling (invalid city / API failures)
* Secure API key management using **.env**
* JSON file update acting as a local database

---

## 🛠️ Tech Stack

* Node.js
* Axios
* OpenWeatherMap API
* dotenv
* File System (JSON DB)

---

## 📂 Project Structure

```
weather-delay/
│── index.js
│── orders.json
│── package.json
│── .gitignore
│── README.md
│── .env.example
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```
git clone https://github.com/AJ-Abhishek-00/WeatherMap.git
cd WeatherMap
```

### 2️⃣ Install Dependencies

```
npm install
```

### 3️⃣ Add Environment Variable

Create `.env` file:

```
WEATHER_API_KEY=your_openweathermap_api_key
```

---

## ▶️ Run Project

```
node index.js
```

---

## 🧠 Business Logic

* If weather status is **Rain / Snow / Extreme**
* Order status is updated to **Delayed**
* A personalized apology message is generated.

Example:

```
Hi Alice, your order to New York is delayed due to rain. We appreciate your patience!
```

---

## ⚠️ Error Handling

* Invalid city names are logged
* Script continues processing other cities
* API authentication errors are displayed for debugging

---

## 🔐 Security Practice

Sensitive credentials like API keys are excluded from version control using `.gitignore`.

Developers should use `.env.example` as a reference.

---

## 📈 Future Improvements

* Retry mechanism for failed API calls
* CLI loading spinner
* Rate limit handling
* Logging system
* Python asyncio version
* Deployment with scheduler (cron / GitHub Actions)

---

## 👨‍💻 Author

**Abhishek AJ**

GitHub: https://github.com/AJ-Abhishek-00
