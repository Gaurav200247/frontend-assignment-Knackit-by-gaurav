import React from "react";
import { IoCopyOutline } from "react-icons/io5";
import styles from "../../styles/Home.module.css";
import { toast } from "react-toastify";

const TopBar = () => {
  return (
    <div className={styles.topBar}>
      <h1>K.</h1>
      <span>
        <p>My Bitsy link:</p>
        <a href="bitsy.bio/john_doe">bitsy.bio/john_doe</a>
      </span>
      <IoCopyOutline
        onClick={() => {
          navigator.clipboard.writeText("bitsy.bio/john_doe");
          toast.success("Copied to Clipboard !");
        }}
      />
    </div>
  );
};

export default TopBar;
