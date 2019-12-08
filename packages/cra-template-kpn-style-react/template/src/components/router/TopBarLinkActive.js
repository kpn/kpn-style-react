import { Link, Match } from "@reach/router";

import React from "react";
import { TopBarLink } from "@kpn-style/react";

const TopBarLinkActive = ({ to, children }) => (
  <Match path={to}>
    {({ match }) => (
      <TopBarLink tag={Link} to={to} active={!!match}>
        {children}
      </TopBarLink>
    )}
  </Match>
);

export default TopBarLinkActive;
