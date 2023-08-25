export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formElements = event.target.elements;
    const newActivity = {
      name: formElements.name.value,
      isForGoodWeather: formElements.isForGoodWeather.checked,
    };
    onAddActivity(newActivity);
    event.target.reset();
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>Add new Activity:</h1>
      <label>
        Name of Activity:
        <input type="text" name="name"></input>
      </label>
      <label>
        Good-weather Activity:
        <input type="checkbox" name="isForGoodWeather"></input>
      </label>
      <button type="submit">submit</button>
    </form>
  );
}
