import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Alert,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  
} from "@heroicons/react/24/solid";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  CubeTransparentIcon,
} from "@heroicons/react/24/outline";
import { Link, Outlet } from "react-router-dom";
 
export function SidebarWithCta() {
  const [open, setOpen] = React.useState(0);
  const [openAlert, setOpenAlert] = React.useState(true);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return <>
  
  <div className="flex">
    <div>
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4  shadow-blue-gray-900/5 fixed">
      <div className="mb-2 flex items-center gap-4 p-4">
        <img src="https://docs.material-tailwind.com/img/logo-ct-dark.png" alt="brand" className="h-8 w-8" />
        <Typography variant="h5" color="blue-gray">
          Menu 
        </Typography>
      </div>
      <List>
        <Accordion
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 1}>
          </ListItem>
        
        </Accordion>
        <Accordion
          open={open === 2}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 2}>
          </ListItem>
        </Accordion>
        <hr className="my-2 border-blue-gray-50" />
        <ListItem>
          <Link to={'/home'}>Home</Link>
        </ListItem>
        <ListItem>
        <Link to={'/Area'}>Area</Link>

        </ListItem>
        <ListItem>
       
        <Link to={'/Ingredients'}>Ingredients</Link>

        </ListItem>
        <ListItem>
          <Link to={'/Contact'}>Contact</Link>

        </ListItem>
      </List>
    </Card>
    </div>

    <div className="ml-[400px]">
      <Outlet/>
    </div>
  </div>
  </>
  
}