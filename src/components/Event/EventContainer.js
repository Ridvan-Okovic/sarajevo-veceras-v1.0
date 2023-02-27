import { useEffect, useState } from 'react';
import Event from './Event';

// *TODO Delete this dummy events data array!
// const eventData = [
//   {
//     id: 'e1',
//     ime: 'Sloga',
//     opis: 'Dance Night (POP/RNB)',
//     datum: new Date('2023, 2, 27'),
//     adresa: 'Mehmeda Spahe, 20',
//     vrijeme: '22:00h',
//     poster:
//       'https://scontent.fsjj1-1.fna.fbcdn.net/v/t39.30808-6/326771000_1321282748671731_8214551705891649835_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_ohc=WaAXQQwPiJAAX-hYgDl&_nc_ht=scontent.fsjj1-1.fna&oh=00_AfDguurqWADcH-Wb7BTGNekgyerOD859cJdkgNd2nkYswQ&oe=63FF61AE',
//   },
//   {
//     id: 'e2',
//     ime: 'Das ist Walter',
//     opis: 'DJ Faris',
//     datum: new Date(2023, 2, 28),
//     adresa: 'Valtera Perica, 20',
//     vrijeme: '23:00h',
//     poster:
//       'https://media-cdn.tripadvisor.com/media/photo-s/10/37/7b/26/full-house.jpg',
//   },
//   {
//     id: 'e3',
//     ime: 'Dorian Gray',
//     opis: 'Tarik Mulaomerovic',
//     datum: new Date(2023, 3, 1),
//     adresa: 'Maršala Tita, 7',
//     vrijeme: '21:00h',
//     poster:
//       'https://scontent.fsjj1-1.fna.fbcdn.net/v/t1.6435-9/46388993_194737524764558_5256279211336794112_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=kC3KlAwm_EQAX9ZiS0K&_nc_ht=scontent.fsjj1-1.fna&oh=00_AfBOtd9phfptG9KDy8prVj_H8pYiorvGIIE062aVDCozkA&oe=64218D96',
//   },
//   {
//     id: 'e4',
//     ime: 'Das ist Walter',
//     opis: 'DJ Manix',
//     datum: new Date(2023, 3, 2),
//     adresa: 'Valtera Perica, 20',
//     vrijeme: '23:00h',
//     poster:
//       'https://media-cdn.tripadvisor.com/media/photo-s/10/37/7b/26/full-house.jpg',
//   },
//   {
//     id: 'e5',
//     ime: 'Sloga',
//     opis: 'VOJKO V',
//     datum: new Date(2023, 3, 3),
//     adresa: 'Mehmeda Spahe, 20',
//     vrijeme: '22:00h',
//     poster:
//       'https://scontent.fsjj1-1.fna.fbcdn.net/v/t39.30808-6/326771000_1321282748671731_8214551705891649835_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_ohc=WaAXQQwPiJAAX-hYgDl&_nc_ht=scontent.fsjj1-1.fna&oh=00_AfDguurqWADcH-Wb7BTGNekgyerOD859cJdkgNd2nkYswQ&oe=63FF61AE',
//   },
//   {
//     id: 'e6',
//     ime: 'Gastro Pub Fabrika',
//     opis: 'Matinee',
//     datum: new Date(2023, 3, 5),
//     adresa: 'Ferhadija, 12',
//     vrijeme: '20:00h',
//     poster:
//       'https://media-cdn.tripadvisor.com/media/photo-s/21/d6/07/a6/gastro-pub-fabrika.jpg',
//   },
// ];

const EventContainer = (props) => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const today = new Date().toLocaleDateString();

  const URL =
    'https://sarajevo-veceras-default-rtdb.europe-west1.firebasedatabase.app/events.json';

  useEffect(() => {
    const fetchEvent = async () => {
      setIsLoading(true);
      const response = await fetch(URL);
      const data = await response.json();

      const loadedEvents = [];

      for (const key in data) {
        loadedEvents.push({
          id: key,
          ime: data[key].name,
          opis: data[key].description,
          vrijeme: data[key].time,
          adresa: data[key].address,
          poster: data[key].poster,
          tip: data[key].type,
          datum: data[key].date,
        });
      }

      let sortedEvents = loadedEvents.sort(
        (a, b) => Date.parse(a.datum) - Date.parse(b.datum)
      );

      setEvents(sortedEvents);
      setIsLoading(false);
    };
    fetchEvent();
  }, []);

  let searchValue = props.searchValue;

  let isSearching = false;

  if (searchValue.trim() !== '') {
    isSearching = true;
  }

  // * Ovdje gledam da je datum veci od danasnjeg datuma
  const eventDateFilter = events.filter((eventInfo) => {
    return new Date(eventInfo.datum).toLocaleDateString() >= today;
  });

  const event = eventDateFilter.map((eventInfo) => {
    return (
      <Event
        key={eventInfo.id}
        id={eventInfo.id}
        poster={eventInfo.poster}
        name={eventInfo.ime}
        opis={eventInfo.opis}
        time={eventInfo.vrijeme}
        address={eventInfo.adresa}
        date={new Date(eventInfo.datum)}
      />
    );
  });

  // * Ovo je searchHandling funkcija
  const filtered = eventDateFilter.filter((eventInfo) => {
    return eventInfo.ime
      .toLocaleLowerCase()
      .includes(searchValue.toLocaleLowerCase());
  });

  // * Ovdje filtriram eventove po search term
  const filteredEvents = filtered.map((eventInfo) => {
    return (
      <Event
        key={eventInfo.id}
        id={eventInfo.id}
        poster={eventInfo.poster}
        name={eventInfo.ime}
        opis={eventInfo.opis}
        time={eventInfo.vrijeme}
        address={eventInfo.adresa}
        date={new Date(eventInfo.datum)}
      />
    );
  });

  let content = (
    <p className="font-montserrat font-normal text-3xl">
      Nema pronađenih eventova. Molimo pokušajte kasnije!
    </p>
  );

  if (isSearching && filteredEvents.length === 0) {
    content = (
      <p className="font-montserrat font-normal text-3xl">
        Pokušajte drugo mjesto.
      </p>
    );
  }

  if (isSearching && filteredEvents.length > 0) {
    content = filteredEvents;
  }

  if (isLoading) {
    content = (
      <p className="font-montserrat font-normal text-3xl">
        Prikupljamo informacije o eventovima...
      </p>
    );
  }

  if (!isLoading && !isSearching) {
    content = event;
  }

  return (
    <div className="flex flex-row flex-wrap px-[10%] items-center justify-center gap-[3.5rem] w-full my-[8rem]">
      {content}
    </div>
  );
};

export default EventContainer;
