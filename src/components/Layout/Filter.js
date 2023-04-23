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

  const PLACE_TYPES = ['club', 'pub', 'kafana', 'open air', 'gastro'];

  const filter = PLACE_TYPES.map((type, i) => {
    return (
      <label
        key={i}
        className="font-montserrat font-semibold text-lg flex gap-4 text-[#363636]"
      >
        {type}
        <input
          className="w-4"
          type="checkbox"
          id={i}
          value={type}
          onChange={handleChange(i)}
        />
      </label>
    );
  });

  return (
    <div className="flex items-center justify-center h-[5rem] shadow-lg bg-[#f6b162]">
      <div className="flex flex-row gap-10">{filter}</div>
    </div>
  );
};

export default Filter;
