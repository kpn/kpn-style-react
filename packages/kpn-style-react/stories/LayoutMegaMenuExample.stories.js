import {
  Container,
  Jumbotron,
  JumbotronBody,
  JumbotronTitle,
  Main,
  MegaMenu,
  MegaMenuActionBar,
  MegaMenuClose,
  MegaMenuGroup,
  MegaMenuItem,
  MegaMenuLink,
  MegaMenuLogo,
  MegaMenuMenu,
  MegaMenuPrimary,
  MegaMenuSecondary,
  MegaMenuSubMenu,
  Pitch,
  PitchBody,
  PitchTitle,
  WebBody,
  WebLayout
} from "@kpn-style/react";
import { boolean, withKnobs } from "@storybook/addon-knobs";

import React from "react";
import { storiesOf } from "@storybook/react";
import { updateKnob } from "./utils";

const stories = storiesOf("Layout", module).addDecorator(withKnobs);

stories.add("Landing Example", () => {
  const activeMegaMenu = boolean("activeMegaMenu", false);

  return (
    <WebBody>
      <WebLayout activeMegaMenu={activeMegaMenu}>
        <MegaMenu>
          <MegaMenuLogo>KPN</MegaMenuLogo>
          <MegaMenuPrimary>
            <MegaMenuActionBar>
              <MegaMenuClose
                onClick={() => updateKnob("activeMegaMenu", false)}
              >
                Close
              </MegaMenuClose>
            </MegaMenuActionBar>
            <MegaMenuMenu>
              <MegaMenuItem>
                <MegaMenuLink active={boolean("active", true)}>
                  Home
                </MegaMenuLink>
              </MegaMenuItem>
              <MegaMenuItem>
                <MegaMenuLink>Information</MegaMenuLink>
              </MegaMenuItem>

              <MegaMenuItem>
                <MegaMenuLink>Getting Started</MegaMenuLink>
                <MegaMenuSubMenu>
                  <MegaMenuGroup>
                    <li>
                      <MegaMenuLink>Installation</MegaMenuLink>
                    </li>
                    <li>
                      <MegaMenuLink>Usage</MegaMenuLink>
                    </li>
                  </MegaMenuGroup>
                  <MegaMenuGroup>
                    <li>
                      <MegaMenuLink>FAQ</MegaMenuLink>
                    </li>
                    <li>
                      <MegaMenuLink>Contact</MegaMenuLink>
                    </li>
                  </MegaMenuGroup>
                </MegaMenuSubMenu>
              </MegaMenuItem>
            </MegaMenuMenu>
          </MegaMenuPrimary>
          <MegaMenuSecondary>
            <MegaMenuMenu>
              <MegaMenuItem
                trigger
                onClick={() => updateKnob("activeMegaMenu", true)}
              >
                Menu
              </MegaMenuItem>
            </MegaMenuMenu>
          </MegaMenuSecondary>
        </MegaMenu>

        <Main web>
          <div>
            <Jumbotron>
              <JumbotronBody>
                <JumbotronTitle>Lorem ipsum dolor sit amet</JumbotronTitle>
                <p className="p">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                </p>
              </JumbotronBody>
            </Jumbotron>
            <Container>
              <p>Some content</p>
              <p>More content</p>
              <p>Extra content</p>
            </Container>
            <Pitch color="green">
              <PitchBody>
                <PitchTitle>Hoe werkt dit?</PitchTitle>
                <p className="p">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                </p>
              </PitchBody>
            </Pitch>
            <Pitch last>
              <PitchBody>
                <PitchTitle>Lorem ipsum dolor</PitchTitle>
                <p className="p">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                </p>
              </PitchBody>
            </Pitch>
          </div>
        </Main>
      </WebLayout>
    </WebBody>
  );
});
