import { useState } from "react";

export default function Main() {
  const [data, setData] = useState(null);
  const [cityName, setCityName] = useState(true);
  const [error, setError] = useState("");
  const fetchData = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=45ebf9e1e558d505d6a57ad6d745d91e&units=metric`
      );
      const data = await response.json();
      setData(data);
      console.log(data.weather[0].icon);
      if (data.cod !== 200) {
        setData(false);
        setError("City not found!");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <main className="main">
      <section>
        <input
          type="text"
          name="cityName"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
        {data ? (
          <>
            <div>
              <h1>Weather in {data.name}</h1>
              <span>
                <img
                  src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                  alt={data.weather[0].description}
                />
              </span>
              <p>Temperature: {Math.round(data.main.temp)} °C </p>
              <p>Weather: {data.weather[0].description} </p>
            </div>
          </>
        ) : (
          <h1>{error}</h1>
        )}
        <button
          onClick={() => {
            fetchData(cityName);
          }}
        >
          Get Weather
        </button>
      </section>
    </main>
  );
}
