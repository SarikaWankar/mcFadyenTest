import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';


const drawerWidth = 325;

export default function Sidebar(props) {
  return (
    <>
      <Drawer
        variant={props.variant}
        sx={props.xs}
      >
{props.children}
      </Drawer>
    </>
  );
}