import { useState } from "react";
import Form from "./components/form.js";
import { uid } from "uid";

function App() {
  const [activities, setActivities] = useState([]);
  function handleAddActivity(newActivity) {
    setActivities([...activities, { ...newActivity, id: uid() }]);
  }
  return (
    <div className="App">
      <Form onAddActivity={handleAddActivity} />
    </div>
  );
}

export default App;
