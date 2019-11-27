import { Button, Container, Menu } from "semantic-ui-react";
import React, { useContext } from "react";

import ActivityStore from "../../app/store/activityStore";
import { observer } from "mobx-react-lite";

const NavBar: React.FC = ({}) => {
  const activityStore = useContext(ActivityStore);
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header>
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ marginRight: "10px" }}
          />
          Reactivities
        </Menu.Item>
        <Menu.Item name="Activities" />
        <Menu.Item>
          <Button
            onClick={activityStore.openCreateForm}
            positive
            content="Create Activity"
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default observer(NavBar);
