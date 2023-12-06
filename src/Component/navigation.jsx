import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function Navigation() {
  return (
    <nav className="navbar " id='navigation'>
      <div className="container-fluid justify-content-evenly">
        <div>
          <a className="navbar-brand" href="https://github.com/khalidmk1"><i className="fa-brands fa-github"></i></a>
          <a className="navbar-brand" href="https://www.linkedin.com/in/khalid-mkadmi-1a3178203/"><i className="fa-brands fa-linkedin"></i></a>
        </div>
        <div className='position-relative '>
          <Stack direction="row" className='btn_cv' spacing={2}>
            <Button href="/Resume.pdf" download="Resume.pdf" variant="outlined">
              Resume
            </Button>
          </Stack>
        </div>
      </div>
    </nav>
  );
}

export default Navigation