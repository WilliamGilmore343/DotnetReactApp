import React, { useContext, useEffect } from "react";

import ActivityList from "./ActivityList";
import ActivityStore from "../../../app/store/activityStore";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../../app/Layout/LoadingComponent";
import { observer } from "mobx-react-lite";

const ActivityDashboard: React.FC = () => {
  const activityStore = useContext(ActivityStore);

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  if (activityStore.loadingInitial)
    return <LoadingComponent content="Loading activities" />;

  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityList />
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>Activity filters</h2>
      </Grid.Column>
    </Grid>
  );
};

export default observer(ActivityDashboard);
