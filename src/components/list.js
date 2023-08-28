export default function List({ activities, isGoodWeather, onDeleteActivity }) {
  return (
    <>
      <h1>
        {isGoodWeather
          ? "The weather is awesome, go outside and:"
          : "Bad weather outside! Here is what we can do:"}
      </h1>
      <ul>
        {activities.map((activity) => {
          return (
            <li key={activity.id}>
              {activity.name}
              <button onClick={() => onDeleteActivity(activity.id)}>
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
