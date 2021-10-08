import React from "react";
import styles from "./Today.scss";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import LocationOnIcon from '@mui/icons-material/LocationOn';

type Props = {};

const Today = (props: Props) => {
  return (
    <div className={styles.today}>
      <section className={styles.buttonGroup}>
        <button
          id="search-places-btn"
          className={styles.searchPlacesBtn}
        >
          Search for places
        </button>
        <button
          id="current-location"
          className={styles.currentLocationBtn}
        >
          <MyLocationIcon />
        </button>
      </section>
      <section className={styles.icons}>
        <img src="/assets/Cloud-background.png" />
        <img src="/assets/LightCloud.png" />
      </section>
      <section className={styles.info}>
        <h2>15</h2>
        <h3>Light Cloud</h3>
      </section>
      <footer>
        <div className={styles.todayInfo}>
          <p>Today</p>
          <span>.</span>
          <p>Fri, 5 Jun</p>
        </div>
        <div className={styles.location}>
          <LocationOnIcon />
          <p>Seoul</p>
        </div>
      </footer>
    </div>
  );
};

export default Today;
