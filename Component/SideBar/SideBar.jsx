import React, { useState } from "react";
import { AiFillHome, AiOutlineInfoCircle } from "react-icons/ai";
import { FaChartBar } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import styles from "../../styles/Home.module.css";

const SideBar = () => {
  const [Active, setActive] = useState("admin-dashboard");

  return (
    <>
      <div className={styles.SideBar}>
        <div
          onClick={() => setActive("home")}
          className={`${Active === "home" && styles.active}`}
        >
          <AiFillHome />
        </div>

        <div>
          <ul>
            <li
              onClick={() => setActive("admin-dashboard")}
              className={`${Active === "admin-dashboard" && styles.active}`}
            >
              <FaChartBar />
            </li>
            <li
              onClick={() => setActive("settings")}
              className={`${Active === "settings" && styles.active}`}
            >
              <FiSettings />
            </li>
            <li
              onClick={() => setActive("profile")}
              className={`${Active === "profile" && styles.active}`}
            >
              <AiOutlineInfoCircle />
            </li>
            <li className={styles.avatar}>
              <img
                src="https://s3-alpha-sig.figma.com/img/3bf9/27e4/0ce6ea1b84e1b973ce170c7ecd18aed3?Expires=1661731200&Signature=GE0TO5biASvMpUxw8Uu5SuYxDKSWyL-6E0EPSLWf5hX0Ur4wlZT4qNEHn6TI9by6T3NKl9am3R7lQjwtYU~xR8JPksk5PR3rwgxBv9noMtCa6fHLPmoiL-xHecHzOsJO6vaIFe7kLR9DZZEPSti8O1Mj7xnxXxA6HvvabuQw6ObpovDUfrVPFd1BQgEtExllIGZfXOoAUGVDg8~X4xty3p-0tOkScZJLAqJ~jcuQIlQK~-NE5zbxTB9xAeHMnNIMaQDhBim7kEfjUAH6m5c3k7EU0zxhP7jppFzZM78lFehNzhMzNAqSRiGV4UchLusQceGCwF8pOXBXdhX77bGiNw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt="avatar"
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
