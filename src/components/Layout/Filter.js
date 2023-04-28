const Filter = (props) => {
  const handleChange = (index) => (e) => {
    const active = document.getElementById(index).checked;
    if (active) {
      props.setSelectedFilter((prev) => [...prev, e.target.value]);
    } else {
      props.setSelectedFilter(
        props.selectedFilter.filter((val) => val !== e.target.value)
      );
    }
  };

  const PLACE_TYPES = ['Club', 'Pub', 'Kafana', 'Open Air', 'Gastro'];

  const filter = PLACE_TYPES.map((type, i) => {
    return (
      <label
        key={i}
        className="font-normal text-lg flex items-center gap-4 text-[#e1e1e1]"
      >
        {type}
        <input
          className="appearance-none w-5 h-5 relative rounded-sm border cursor-pointer focus:outline-none transition-all duration-300 checked:bg-[#ffb560] checked:border-[#ffb560] after:content-[''] after:absolute after:w-full after:h-full after:bg-no-repeat after:bg-center after:bg-[length:15px] after:checked:bg-[url('https://www.svgrepo.com/show/105291/check-mark.svg')]"
          type="checkbox"
          id={i}
          value={type}
          onChange={handleChange(i)}
        />
      </label>
    );
  });

  return (
    <div className="flex items-center justify-center shadow-lg bg-zinc-900 px-12 py-4 rounded-lg">
      <div className="flex flex-row gap-10">{filter}</div>
    </div>
  );
};

export default Filter;
