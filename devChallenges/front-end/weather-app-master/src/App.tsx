import React, { FC } from "react";
import styles from "./App.scss";
import Dashboard from "./Dashboard/Dashboard";
import Today from "./Today/Today";

export const App: FC = (): JSX.Element => {
  return (
    <div className={styles.app}>
      <Today />
      <Dashboard />
    </div>
  );
};
