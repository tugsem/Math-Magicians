import React from 'react';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
     {
      id: 3,
      path: '/quote',
      text: 'Quote',
    }
  ];
  return (
    <nav className="navBar">
      <h1 className='title'>Math Magicians</h1>
      <ul className='navList'>
        {links.map((link) => (
          <li key={link.id}>
            <a href={link.path}>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;