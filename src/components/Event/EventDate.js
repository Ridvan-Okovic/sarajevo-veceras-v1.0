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
    <h3 className="flex truncate">
      <p className="pr-1 text-[#C25452] font-semibold">{days[dayindex]},</p>
      <p className="truncate">
        {day} {month}
      </p>
    </h3>
  );
};

export default EventDate;
