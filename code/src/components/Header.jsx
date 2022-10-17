import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return ( 
    <Header>
      <nav>
        <link to='./MovieDetails.jsx'>Movie Details</link>
        <Link to='/'>List</Link>
      </nav>
    </Header>
   );
}
 
export default Header;