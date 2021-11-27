import React from "react";
import { StyledResume, StyledResumeContainer } from '../styles/Resume.style'
import { StyledAside, StyledAsideList, StyledAsideElements } from '../styles/Aside.style'

function Resume() {
  const loopEl = [];
  for(let i = 0; i < 4; i++) {
    loopEl.push(<StyledAsideElements />)
  }

  return (
    <StyledResume>
      <StyledResumeContainer>
        <StyledAside>
          <StyledAsideList>
            {loopEl}
          </StyledAsideList>
        </StyledAside>
      </StyledResumeContainer>
    </StyledResume>
  )
}

export default Resume;
