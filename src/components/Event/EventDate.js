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
    <div className="flex">
      <div className="pr-1 text-[#C25452] opacity-80 font-semibold">
        {days[dayindex]},
      </div>
      <div className="pr-1">{day}</div>
      <div className="pr-1">{month}</div>
    </div>
  );
};

export default EventDate;
