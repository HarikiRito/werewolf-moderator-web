import React, { FC, memo } from 'react';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Container, IconButton, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

interface Props {
  children: any;
}

const useStyles = makeStyles((theme) => {
  return {
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    container: {
      marginTop: theme.spacing(2),
    },
  };
});

const MainLayout: FC<Props> = (props) => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container className={classes.container} maxWidth="sm">
        {props.children}
      </Container>
    </>
  );
};

export default memo(MainLayout);
