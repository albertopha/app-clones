import React, { useState, useCallback } from "react";
import styles from "./Search.scss";

type Props = {

};

export const Search = (props: Props) => {
  const [location, setLocation] = useState(undefined);
  const onHandleChangeLocation = useCallback(
    (evt) => {
      console.log(evt.target.value);
    }, []
  );

  return (
    <div className={styles.search}>
      <input
        id="search-location-input"
        value={location}
        placeholder="Search Location"
        onChange={onHandleChangeLocation}
      />
    </div>
  );
};