import React, { Fragment } from 'react';
import '../styles/bio.scss';

const Bio = () => {
  return (
    <Fragment>

      <section className="bio">
        <h2 className="container__title--padded">Hi there!</h2>
        <p className="container__text--padded">My name is Felipe Rodrigues, a front-end developer who's always searching for deploying the best of my capabilities.
          <br></br>
          <br></br>
          I have experience traversing through front-end development by consistently deploying projects with preprocessors like Sass and Styled-Components, build tools such as webpack, parcel or harp, managing component libraries with Storybook and using template engines being Pug / Jade and Slim.
          Thus, from applying new patterns and being in-sync with the latest technology updates and best practices to trying new frameworks in the same manner with React, React Native and Vue.js.
          <br></br>
          <br></br>
          As an advocate of the open source environment, I invite you to check out further some of my work in the <a className="bio__hook">projects</a>
          section, but if you really want to dive deep on how I coded them I strongly recommend visiting my <a className="bio__hook">github</a> page.
          <br></br>

        </p>

      </section >

    </Fragment>
  )
}

export default Bio;
