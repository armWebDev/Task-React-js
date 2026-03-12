import "./HeaderSide.css";
import logo from "../assets/images/Logo.svg";
import hamburger from "../assets/images/hamburger.svg";
import search from "../assets/images/W.svg";
import arrow from "../assets/images/B.svg";
import cencel from "../assets/images/x.svg";
import { useEffect, useState } from "react";
import { setSearchTerm } from "../store/searchSlice";
import { useDispatch } from "react-redux";
import DropDownComponent from "../components/DropDownComponent";

function HeaderSide() {
  const [showInput, setShowInput] = useState(false);
  const [showComponent, setShowComponent] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const element = document.querySelector(".headerPart2");

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (window.innerWidth > 768 && !showMenu) {
        if (currentScroll === 0) {
          element.style.transform = "translateY(0)";
        } else if (currentScroll <= 200) {
          element.style.transform = "translateY(0)";
        } else if (currentScroll > lastScroll && currentScroll > 200) {
          element.style.transform = "translateY(-100%)";
        } else if (currentScroll < lastScroll) {
          element.style.transform = "translateY(0)";
        }

        setLastScroll(currentScroll);
      }
    };

    const handleResize = () => {
      if (window.innerWidth <= 768) {
        element.style.transform = "";
      } else {
        element.style.transform = "translateY(0)";
        if (showMenu) setShowMenu(!showMenu);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [lastScroll, showMenu]);

  const dispatch = useDispatch();
  function changeInputVisibility() {
    setShowInput(!showInput);
  }
  function changeComponentVisibility() {
    setShowComponent(!showComponent);
  }

  function changeSearchState(value) {
    dispatch(setSearchTerm(value));
  }

  return (
    <div className="headerBlock">
      <div className="headerPart1">
        <div className="headerPart1_1">
          <div className="hamburger" onClick={() => setShowMenu(!showMenu)}>
            <img src={hamburger} alt="" />
          </div>
          <div className="mainLogo">
            <img src={logo} alt="" />
          </div>
          <div className="searchIcons" onClick={changeInputVisibility}>
            <img src={search} alt="" />
          </div>

          {showInput && (
            <input
              className="searchInput"
              type="text"
              placeholder="Search..."
              onChange={(event) => changeSearchState(event.target.value)}
            />
          )}
        </div>
      </div>
      <div className={`headerPart2 ${showMenu ? "active" : ""}`}>
        {showMenu ? (
          <div className="headerPart1_1_mobile">
            <div className="mainLogo_mobile">
              <img src={logo} alt="" />
            </div>
            <div className="closeMenu" onClick={() => setShowMenu(!showMenu)}>
              <img src={cencel} alt="" />
            </div>
          </div>
        ) : null}
        <ul>
          <li onClick={changeComponentVisibility}>
            Demos
            <img src={arrow} alt="" />
            <DropDownComponent />
          </li>
          <li>
            Post
            <img src={arrow} alt="" />
            <DropDownComponent />
          </li>
          <li>
            Features
            <img src={arrow} alt="" />
            <DropDownComponent />
          </li>
          <li>
            Categories
            <img src={arrow} alt="" />
            <DropDownComponent />
          </li>
          <li>
            Shop
            <img src={arrow} alt="" />
            <DropDownComponent />
          </li>
          <li className="disableBorder">Buy Now</li>
        </ul>
      </div>
      {showComponent && <DropDownComponent />}
    </div>
  );
}

export default HeaderSide;
