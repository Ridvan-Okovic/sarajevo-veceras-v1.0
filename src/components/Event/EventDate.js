const EventDate = (props) => {
  const month = props.datum.toLocaleString('en-US', { month: 'long' });
  const day = props.datum.getDate();
  const dayindex = props.datum.getDay();

  const days = [
    'Nedelja',
    'Ponedeljak',
    'Utorak',
    'Srijeda',
    'Četvrtak',
    'Petak',
    'Subota',
  ];

  return (
    <div className="flex w-full">
      <div className="pr-1">{days[dayindex]},</div>
      <div className="pr-1">{day}</div>
      <div className="pr-1">{month}</div>
    </div>
  );
};

export default EventDate;
