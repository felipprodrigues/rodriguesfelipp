import React from "react";
import { StyledResume, StyledResumeContainer } from '../styles/Resume.style';
import { StyledAside, StyledAsideList, StyledAsideElements, StyledAsideButton, StyledAsideIcon, StyledAsideTooltip } from '../styles/Aside.style';
import { StyledTabs, StyledTabsHolder, StyledTabsItem, StyledTabsIcon } from '../styles/Tabs.style';
import { StyledList, StyledListItems } from '../styles/List.style';
import defs from '../assets/defs.svg';

function Resume() {
  const loopEl = [];
  for(let i = 0; i < 5; i++) {
    loopEl.push(
      <StyledAsideElements>
        <StyledAsideButton>
          <StyledAsideIcon />
          <StyledAsideTooltip >
            Explore
          </StyledAsideTooltip>
        </ StyledAsideButton>
      </StyledAsideElements>
    )
  }

  return (
    <StyledResume>
      <StyledResumeContainer>
        <StyledAside>
          <StyledAsideList>
            {loopEl}
          </StyledAsideList>
        </StyledAside>
        <StyledTabs>
          <StyledTabsHolder>

          {/* FIX AND LOOP OVER */}
          <StyledTabsItem>
            <StyledList>
              <StyledListItems>Eventene.js</StyledListItems>
              <StyledListItems>Camelias.js</StyledListItems>
              <StyledListItems>Taina.js</StyledListItems>
              <StyledListItems>Theater.js</StyledListItems>
            </StyledList>
          </StyledTabsItem>

          </StyledTabsHolder>

          <StyledTabsIcon></StyledTabsIcon>
        </StyledTabs>
      </StyledResumeContainer>
    </StyledResume>
  )
}

export default Resume;
