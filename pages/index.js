import React from "react";
import Block_1 from "../Component/Block_1";
import Block_2 from "../Component/Block_2";
import Block_3 from "../Component/Block_3";
import Block_4 from "../Component/Block_4";
import styles from "../styles/Home.module.css";

const index = () => {
  return (
    <div className={styles.AdminPage}>
      <Block_1 />
      <Block_2 />
      <Block_3 />
      <Block_4 />
    </div>
  );
};

export default index;
