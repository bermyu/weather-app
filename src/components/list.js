export default function List({ activities, isGoodWeather }) {
  return (
    <>
      <h1>
        {isGoodWeather
          ? "The weather is awesome, go outside and:"
          : "Bad weather outside! Here is what we can do:"}
      </h1>
      <ul>
        {activities.map((activity) => {
          return <li key={activity.id}>{activity.name}</li>;
        })}
      </ul>
    </>
  );
}
