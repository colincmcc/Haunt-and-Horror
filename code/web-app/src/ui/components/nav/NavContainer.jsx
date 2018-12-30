import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import MobileNavComponent from './mobileNav/MobileNavComponent';
import ErrorComponent from '../loading/ErrorComponent';
import LoadingComponent from '../loading/LoadingComponent';


const NAV_QUERY = gql`
  {
    mobileMenuOpen @client
  }
`;


// This container controls mobile menu (MobileNavMenu) state and nav state (NavComponent)
// Todo: load menu items from Wordpress gql
// TODO: move scroll logic higher up


class NavContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navIsShown: true,
      lastScrollPos: 0,
    };
  }

  componentDidMount() {
    this.handleScroll();
  }

  handleScroll = () => {
    let lastKnownScrollPosition = 0;
    let ticking = false;

    const toggleBottomBar = (scrollPos) => {
      const { lastScrollPos: prevScrollPos, navIsShown } = this.state;
      this.setState({
        lastScrollPos: lastKnownScrollPosition,
      });
      if (navIsShown) {
        if (scrollPos > prevScrollPos) {
          this.setState({
            navIsShown: false,
          });
        }
      } else if (scrollPos < prevScrollPos) {
        this.setState({
          navIsShown: true,
        });
      }
    };

    // register scroll events
    window.addEventListener('scroll', (e) => {
      lastKnownScrollPosition = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          toggleBottomBar(lastKnownScrollPosition);
          ticking = false;
        });

        ticking = true;
      }
    });
  }


  render() {
    const { navIsShown, lastScrollPos } = this.state;

    return (

      <div>
        <MobileNavComponent
          navIsShown={navIsShown}
        />
      </div>

    );
  }
}

export default NavContainer;
