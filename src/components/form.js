export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    // const formData = new FormData(event.target);
    // const data = Object.fromEntries(formData);
    const formElements = event.target.elements;
    console.log(formElements.name.value);
    console.log(formElements.isForGoodWeather.checked);
    const newActivity = {
      name: formElements.name.value,
      isForGoodWeather: formElements.isForGoodWeather.checked,
    };
    console.log(newActivity);
    // onAddActivity(data);
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
