import useLocalStorageState from "use-local-storage-state";
import Form from "./components/form.js";
import { uid } from "uid";
import List from "./components/list.js";
import { useEffect } from "react";

function App() {
  const [activities, setActivities] = useLocalStorageState("activity", {
    defaultValue: [],
  });

  // const isGoodWeather = true;
  const [weather, setWeather] = useLocalStorageState("weather", {
    defaultValue: [],
  });

  async function getWeather() {
    const response = await fetch("https://example-apis.vercel.app/api/weather");
    const data = await response.json();
    setWeather(data);
  }

  function handleDeleteActivity(id) {
    const filteredActivites = activities.filter(
      (_activity) => _activity.id !== id
    );
    setActivities(filteredActivites);
  }

  useEffect(() => {
    getWeather();
  }, []);

  const forGoodWeather = activities.filter(
    (activity) => activity.isForGoodWeather
  );
  const forBadWeather = activities.filter(
    (activity) => !activity.isForGoodWeather
  );

  // isGoodWeather
  function handleAddActivity(newActivity) {
    setActivities([...activities, { ...newActivity, id: uid() }]);
  }
  return (
    <div className="App">
      <h1>{`${weather.condition} ${weather.temperature}°C`}</h1>
      <List
        activities={weather.isGoodWeather ? forGoodWeather : forBadWeather}
        isGoodWeather={weather.isGoodWeather}
        onDeleteActivity={handleDeleteActivity}
      />
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
