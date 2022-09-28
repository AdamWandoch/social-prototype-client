import React from 'react';
import photo from '../img/me2.png';
import '../styles/content-styles.css';

export const About = () => {
  return (
    <main>
      <a
        href='https://www.linkedin.com/in/adam-wandoch/'
        target='_blank'
        rel='noreferrer'
      >
        <img src={photo} alt='Adam' className='portrait' />
      </a>
      <section>
        <h1>Social Application Prototype - what is this?</h1>
        <h2>Project description</h2>
        <article>
          <p>
            This is a practice project, in which I put together some of the web
            development concepts and technologies that I learned.
          </p>
          <p>
            The client allows the user to pick a name and an avatar, after which
            the user can view and enter posts and comments in the public feed.
          </p>
          <p>
            The front-end part (the client) is a ReactJS web client deployed on
            Netlify platform and the back-end part (the server) is a Spring Boot
            (Java) based API integrated with a PostgreSQL database which are
            both deployed on Heroku.
          </p>
        </article>
      </section>
      <section>
        <h2>Client description</h2>
        <article>
          <p>
            In this ReactJS client I used several technologies/techniques that I
            learned.
          </p>
          <p>
            React components are functional and implemented using hooks, namely
            useState, useEffect, useContext, useCallback. The application uses
            react-router-dom to handle routing.
          </p>
          <p>
            Perhaps the most interesting part of this client (and server
            actually) for me was implementing WebSocket using StompJS and SockJS
            to update all connected clients on any new data entry event.
          </p>
          <p>
            For styling I initially used a global CSS file generated using SASS
            and then some other components have been styled with
            StyledComponents when I discovered this very useful and convenient
            tool.
          </p>
          <p>
            I also used react-testing-library to explore the interesting topic
            of testing in JavaScript world to ensure that the interface behaves
            as expected.
          </p>
          <p>
            In this project I put to life modern JavaScript syntax using arrow
            functions, spread operators and object destructuring among others.
            For API calls I used Axios. Overall it gave me a sense of
            understanding of how React handles and manipulates state, how
            information can be collected and kept in state using controlled
            forms and how to share/pass information between components using
            props and context api.
          </p>
        </article>
      </section>
      <section>
        <h2>Server description</h2>
        <article>
          <p>
            <ul>
              The server plays two roles in this applcation:{' '}
              <li>provides API for data persistence</li>
              <li>enables WebSocket connections</li>
            </ul>
          </p>
          <p>
            Data collected from the user is sent to a relevant Controller in the
            API which is utilizing Spring Data JPA for ORM and data persistence,
            so that no SQL needs to be written manually, all database
            communication is done by the framework itself including table
            creation, record persistence, retrieval and modification.
          </p>
          <p>
            There are several tables - for each model respectively. Each model
            has a few basic fields to support the needs of the application. All
            models have autogenerated unique IDs and other fields that hold
            relevant data.
          </p>
          <p>
            The UserController allows only one user with a given username to be
            created and updates the avatar each time the user enters data in the
            SignIn form.
          </p>
          <p>
            Several other controllers communicate with relevant repositories and
            interfaces for other models, such as post, comment and like data.
          </p>
          <p>
            When a user signs in its client subscribes to the main WebSocket
            topic (/feed-clients) on the server and whenever new data comes to
            the server from any of the clients the server distributes this data
            back to all clients triggering a re-render of the interface.
          </p>
          <p>
            In this project I used JUnit5 and AssertJ to explore testing in
            Java. Apart from obvious assertions I learned the given/when/then
            flow and some mocking techniques to isolate particular pieces of
            logic to be tested as units.
          </p>
          <p>
            Apart from above mentioned technologies I used Maven to manage
            dependencies, Lombok to eliminate boilerplate code on basic pojos
            and H2 in-memory database to run the project locally without the
            need to have Postgres database in development environment.
          </p>
        </article>
      </section>
    </main>
  );
};
