const days = [
  'nedelja',
  'ponedeljak',
  'utorak',
  'srijeda',
  'cetvrtak',
  'patak',
  'subota',
];

export function filterByDateAscending(events) {
  let today = new Date();
  let todayString = new Date().toString().slice(0, 10);

  const eventDateFilter = events.filter((eventInfo) => {
    return (
      eventInfo.datum > today ||
      eventInfo.datum.toString().slice(0, 10) === todayString
    );
  });

  return eventDateFilter;
}

export function filterBySearchTerm(events, searchTerm) {
  const filtered = events.filter((eventInfo) => {
    return eventInfo.ime
      .toLocaleLowerCase()
      .includes(searchTerm.toLocaleLowerCase());
  });

  return filtered;
}

export function filterBycheckBoxInput(events, filter) {
  const lowercase = filter.map((item) => item.toLocaleLowerCase());
  console.log(lowercase);
  const checkboxFilter = events.filter((eventInfo) => {
    const day = days[eventInfo.datum.getDay()];
    return lowercase.includes(eventInfo.tip) && lowercase.includes(day);
  });
  return checkboxFilter;
}
