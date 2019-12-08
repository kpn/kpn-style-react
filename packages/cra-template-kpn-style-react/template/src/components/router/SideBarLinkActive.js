import { Link, Match } from "@reach/router";

import React from "react";
import { SideBarLink } from "@kpn-style/react";

const SideBarLinkActive = ({ to, children }) => (
  <Match path={to}>
    {({ match }) => (
      <SideBarLink tag={Link} to={to} active={match}>
        {children}
      </SideBarLink>
    )}
  </Match>
);

export default SideBarLinkActive;
