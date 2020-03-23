import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';

const Navigation = () => (
        <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand js-scroll-trigger">Event Karde</a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
          <li class="nav-item">
              <Link class="nav-link js-scroll-trigger" to="/wedding">Weddings</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link js-scroll-trigger" to="/corporate">Corporate Event</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link js-scroll-trigger" to="/about">Events</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link js-scroll-trigger" to="/projects">Our Clients</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link js-scroll-trigger" to="#signup">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
)
export default Navigation;