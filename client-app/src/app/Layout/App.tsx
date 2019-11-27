import React, { Fragment, useContext, useEffect } from "react";

import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import ActivityStore from "../store/activityStore";
import { Container } from "semantic-ui-react";
import LoadingComponent from "./LoadingComponent";
import NavBar from "../../features/nav/NavBar";
import { observer } from "mobx-react-lite";

const App = () => {
  const activityStore = useContext(ActivityStore);

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  if (activityStore.loadingInitial)
    return <LoadingComponent content="Loading activities" />;

  return (
    <Fragment>
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashboard />
      </Container>
    </Fragment>
  );
};

export default observer(App);
