import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './my_page_navbar.module.css';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

const options = ['기본 테마', '바다 테마', '우주 테마'];

const MyPageNavbar = ({ onChageBasic, onChageSea, onChageSpace }) => {
  const history = useHistory();

  const goToMain = () => {
    history.push('/main');
  };
  
  //==========theme======================================
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
    if (index === 0) {
      onChageBasic();
    } else if(index === 1) {
      onChageSea();
    } else {
      onChageSpace();
    }
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  //=======================================================

  return (
    <header className={styles.navbar}>

      <img 
        onClick={goToMain}
        className={styles.logo_img} 
        src="/images/logo1.png" 
      />

      <div className={styles.title}>
        {/* 마이페이지 */}
      </div>

      <div className={styles.user_icon}>
      </div>

      <div className={styles.theme__btn}>

        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button">
              <Button onClick={handleClick}>{options[selectedIndex]}</Button>
              <Button
                size="small"
                aria-controls={open ? 'split-button-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-label="select merge strategy"
                aria-haspopup="menu"
                onClick={handleToggle}
              >
                <ArrowDropDownIcon />
              </Button>
            </ButtonGroup>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList id="split-button-menu">
                        {options.map((option, index) => (
                          <MenuItem
                            key={option}
                            selected={index === selectedIndex}
                            onClick={(event) => handleMenuItemClick(event, index)}
                          >
                            {option}
                          </MenuItem>
                        ))}
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </Grid>
        </Grid>  
      </div> 


    </header>
  )
};

export default MyPageNavbar;