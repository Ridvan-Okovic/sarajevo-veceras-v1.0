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
