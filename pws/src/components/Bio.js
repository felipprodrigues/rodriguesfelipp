import React, { Fragment } from 'react';
import { StyleBio, StyleBioHook } from '../styles/Bio.style';
import { StyledContainerH2Padded, StyledContainerTextPadded } from '../styles/Container.style'

const Bio = () => {
  return (
    <Fragment>

      <StyleBio>
        <StyledContainerH2Padded>Hi there!</StyledContainerH2Padded>
        <StyledContainerTextPadded >My name is Felipe Rodrigues, a front-end developer who's always searching for deploying the best of my capabilities.
          <br></br>
          <br></br>
          I have experience traversing through front-end development by consistently deploying projects with preprocessors like Sass and Styled-Components, build tools such as webpack, parcel and harp, managing component libraries with Storybook and Styled Components and using template engines being Pug / Jade and Slim.
          Thus, from applying new patterns and being in-sync with the latest technology updates and best practices to trying new frameworks in the same manner with React, React Native and Vue.js.
          <br></br>
          <br></br>
          As an advocate of the open source environment, I invite you to check out further some of my work in the <StyleBioHook href="#">projects</StyleBioHook> section,
          but if you really want to dive deep on how I coded them I strongly recommend visiting my <StyleBioHook href="#">github</StyleBioHook> page.
          <br></br>
        </StyledContainerTextPadded>
      </StyleBio>

    </Fragment>
  )
}

export default Bio;
