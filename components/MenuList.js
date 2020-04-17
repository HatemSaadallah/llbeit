import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Text, View, StyleSheet} from 'react-native';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LocationCityIcon from '@material-ui/icons/LocationCity';


const StyledMenu = withStyles({
  paper: {
    border: '0px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function MenuList() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };



  return (
    <View>
        <Button
          aria-controls="customized-menu"
          aria-haspopup="true"
          variant="contained"
          style={{
            backgroundColor: 'white',
            opacity: 0.7
            }}
          onClick={handleClick}
        >
          <Text>المنطقة السكنية</Text>
        </Button>
        <StyledMenu
          id="customized-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <StyledMenuItem>
            <ListItemIcon>
              <LocationCityIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="مدينة غزة" />
          </StyledMenuItem>
          <StyledMenuItem>
            <ListItemIcon>
              <LocationCityIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="جباليا" />
          </StyledMenuItem>
          <StyledMenuItem>
            <ListItemIcon>
              <LocationCityIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="النصيرات" />
          </StyledMenuItem>
        </StyledMenu>
    </View>
  );
}

