# 🌤️ Skyo 

**Skyo** is a clean, modern, and responsive weather application that provides real-time weather conditions and air quality insights for any city worldwide. 

![Skyo Preview](https://github.com/KrishBharadwaj5678/Skyo/raw/main/SkyoDemo.png)

## 🚀 Features

| Feature                 | Description                                   |
| ----------------------- | --------------------------------------------- |
| 🌍 City Search          | Search weather details for any city worldwide |
| 🌡️ Current Temperature | Displays real-time temperature in °C          |
| 🌬️ Wind Details        | Shows wind speed and direction                |
| 💧 Humidity             | Live humidity percentage                      |
| 👁️ Visibility          | Visibility distance in kilometers             |
| 🌅 Sunrise & Sunset     | Accurate local sunrise and sunset times       |
| 🌡️ Feels Like          | Perceived temperature based on conditions     |
| 🧪 Air Quality Data     | Real-time air pollution information           |
| 🧫 Pollutant Levels     | PM2.5, PM10, NO₂, NO, CO, SO₂, NH₃, O₃        |
| 🌙 Dark / Light Mode    | User-friendly theme switching                 |
| 📱 Responsive Design    | Optimized for mobile, tablet & desktop        |
| ⚡ Fast UI               | Smooth transitions and instant updates        |

---

## 🛠️ Tech Stack

| Category                | Technology               |
| ----------------------- | ------------------------ |
| ⚛️ **Frontend**         | React.js                 |
| 🧠 **State Management** | React Context API        |
| 🎨 **Styling**          | Tailwind CSS             |
| 🌦️ **API**             | OpenWeather API          |
| 🔗 **HTTP Client**      | Axios                    |

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

    ```bash
    git clone https://github.com/KrishBharadwaj5678/Skyo.git
    ```

### 2️⃣ Navigate to project directory

    ```bash
    cd Skyo
    ```

### 3️⃣ Install dependencies

    ```bash
    npm install
    ```

### 4️⃣ Start the Development Server

    ```bash
    npm run dev
    ```

### 5️⃣ Open the app in your browser

## 🔐 Environment Variables

Create a `.env` file in the root directory and add:

```env
VITE_BASE_URL = "https://api.openweathermap.org/data/2.5"
VITE_APP_ID = your_api_key_here
```
