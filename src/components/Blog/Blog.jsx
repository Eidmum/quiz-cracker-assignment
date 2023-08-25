import React from "react";
import Accordion from "react-bootstrap/Accordion";
const Blog = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          What is the purpose of react router?
        </Accordion.Header>
        <Accordion.Body>
          React Router is a library for the React JavaScript framework that
          provides routing capabilities to create single-page applications
          (SPAs) with dynamic navigation and multiple views. The main purpose of
          React Router is to enable developers to build complex, multi-page-like
          applications while still maintaining the benefits of a single-page
          application architecture.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How does context api work?</Accordion.Header>
        <Accordion.Body>
          The Context API is a part of React that provides a way to pass data
          through the component tree without needing to pass props manually at
          every level. It helps to solve the problem of "prop drilling," where
          data needs to be passed through multiple levels of components that
          don't actually use the data themselves. The Context API makes it
          easier to share data that is considered 'global' or 'shared' among
          multiple components without resorting to prop drilling.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Describe about useRef() hook.</Accordion.Header>
        <Accordion.Body>
          The useRef() hook is a built-in hook provided by React that allows you
          to create a mutable reference to a DOM element or a value that
          persists across renders. It's important to note that useRef() is not
          only for accessing DOM elements; it can also be used to store any
          mutable value that doesn't trigger a re-render when it changes.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Blog;
