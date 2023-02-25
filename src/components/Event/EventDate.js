const EventDate = (props) => {
  const month = props.datum.toLocaleString('en-US', { month: 'long' });
  const day = props.datum.getDate();
  const year = props.datum.getFullYear();
  return (
    <div className="flex w-full">
      <div className="pr-1">{day}</div>
      <div className="pr-1">{month}</div>
      <div className="">{year}</div>
    </div>
  );
};

export default EventDate;
