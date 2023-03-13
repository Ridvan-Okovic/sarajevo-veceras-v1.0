import { Link } from 'react-router-dom';

const NavBar = (props) => {
  // const [isSearchOpen, setIsSearchOpen] = useState(false);

  // const searchChangeHandler = (event) => {
  //   props.onAddSearchTermHandler(event.target.value);
  // };

  // const searchBarHandler = () => {
  //   setIsSearchOpen((prev) => !prev);
  // };

  const openFilterHandler = () => {
    props.setIsFilterOpened((prev) => !prev);
  };

  return (
    <nav className="sticky top-0 z-10 w-full h-[6rem] px-[10%] flex flex-row items-center justify-between bg-[#1F1926] text-white uppercase">
      <h2 className="text-2xl font-semibold">Logo</h2>
      <div className="flex gap-10 text-lg items-baseline ">
        <button className="uppercase">
          <Link to="/">Home</Link>
        </button>

        <button className="uppercase">
          <Link to="/liked">Liked</Link>
        </button>

        <button
          onClick={openFilterHandler}
          className="border-[1px] border-white text-white uppercase py-1 px-6 hover:border-white  active:border-white transition-all duration-300"
        >
          Filter
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
