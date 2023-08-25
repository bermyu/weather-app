import useLocalStorageState from "use-local-storage-state";
import Form from "./components/form.js";
import { uid } from "uid";
import List from "./components/list.js";

function App() {
  const [activities, setActivities] = useLocalStorageState("activity", {
    defaultValue: [],
  });

  const isGoodWeather = true;

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
      <List
        activities={isGoodWeather ? forGoodWeather : forBadWeather}
        isGoodWeather={isGoodWeather}
      />
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
