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

export function filterBySearchTerm(events) {}

export function filterBycheckBoxInput(events, clubValue, pubValue, openValue) {
  const checkboxFilter = events.filter((eventInfo) => {
    return (
      eventInfo.tip.toLocaleLowerCase() === clubValue.toLocaleLowerCase() ||
      eventInfo.tip.toLocaleLowerCase() === pubValue.toLocaleLowerCase() ||
      eventInfo.tip.toLocaleLowerCase() === openValue.toLocaleLowerCase()
    );
  });
  return checkboxFilter;
}
