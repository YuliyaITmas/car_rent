import React from 'react'
import HomeIcon from "@mui/icons-material/Home";
import CollectionsIcon from "@mui/icons-material/Collections";
import FavoriteIcon from "@mui/icons-material/Favorite";
export const SidebarData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/",
  },
  {
    title: "Favorites",
    icon: <FavoriteIcon />,
    link: "/favorites",
  },
  {
    title: "Catalog",
    icon: <CollectionsIcon />,
    link: "/catalog",
  },
];

