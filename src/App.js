import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import Form from "./components/form.js";
import { uid } from "uid";
import List from "./components/list.js";

function App() {
  const [activities, setActivities] = useLocalStorageState("activity", {
    defaultValue: [],
  });
  function handleAddActivity(newActivity) {
    setActivities([...activities, { ...newActivity, id: uid() }]);
  }
  return (
    <div className="App">
      <List activities={activities} />
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
