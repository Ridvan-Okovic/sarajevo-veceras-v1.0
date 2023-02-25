import Event from './Event';

const eventData = [
  {
    id: 'e1',
    ime: 'Sloga',
    datum: new Date(2023, 2, 27),
    adresa: 'Mehmeda Spahe, 20',
    vrijeme: '22:00h',
    poster:
      'https://scontent.fsjj1-1.fna.fbcdn.net/v/t39.30808-6/326771000_1321282748671731_8214551705891649835_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_ohc=WaAXQQwPiJAAX-hYgDl&_nc_ht=scontent.fsjj1-1.fna&oh=00_AfDguurqWADcH-Wb7BTGNekgyerOD859cJdkgNd2nkYswQ&oe=63FF61AE',
  },
  {
    id: 'e2',
    ime: 'Das ist Walter',
    datum: new Date(2023, 2, 28),
    adresa: 'Valtera Perica, 20',
    vrijeme: '23:00h',
    poster:
      'https://media-cdn.tripadvisor.com/media/photo-s/10/37/7b/26/full-house.jpg',
  },
  {
    id: 'e3',
    ime: 'Dorian Gray',
    datum: new Date(2023, 3, 1),
    adresa: 'Maršala Tita, 7',
    vrijeme: '21:00h',
    poster:
      'https://scontent.fsjj1-1.fna.fbcdn.net/v/t1.6435-9/46388993_194737524764558_5256279211336794112_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=kC3KlAwm_EQAX9ZiS0K&_nc_ht=scontent.fsjj1-1.fna&oh=00_AfBOtd9phfptG9KDy8prVj_H8pYiorvGIIE062aVDCozkA&oe=64218D96',
  },
  {
    id: 'e4',
    ime: 'Das ist Walter',
    datum: new Date(2023, 3, 2),
    adresa: 'Valtera Perica, 20',
    vrijeme: '23:00h',
    poster:
      'https://media-cdn.tripadvisor.com/media/photo-s/10/37/7b/26/full-house.jpg',
  },
  {
    id: 'e5',
    ime: 'Sloga',
    datum: new Date(2023, 3, 3),
    adresa: 'Mehmeda Spahe, 20',
    vrijeme: '22:00h',
    poster:
      'https://scontent.fsjj1-1.fna.fbcdn.net/v/t39.30808-6/326771000_1321282748671731_8214551705891649835_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_ohc=WaAXQQwPiJAAX-hYgDl&_nc_ht=scontent.fsjj1-1.fna&oh=00_AfDguurqWADcH-Wb7BTGNekgyerOD859cJdkgNd2nkYswQ&oe=63FF61AE',
  },
];

const EventContainer = () => {
  const events = eventData.map((eventInfo) => {
    return (
      <Event
        key={eventInfo.id}
        id={eventInfo.id}
        poster={eventInfo.poster}
        name={eventInfo.ime}
        time={eventInfo.vrijeme}
        address={eventInfo.adresa}
        date={eventInfo.datum}
      />
    );
  });

  return (
    <div className="flex flex-row flex-wrap justify-evenly w-full px-[10%]">
      {events}
    </div>
  );
};

export default EventContainer;
