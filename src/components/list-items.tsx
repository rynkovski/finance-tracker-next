import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import ChecklistIcon from "@mui/icons-material/Checklist";
import SavingsIcon from "@mui/icons-material/Savings";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SettingsIcon from "@mui/icons-material/Settings";
import ListItem from "@mui/material/ListItem";
import Link from "next/link";

const LINKS = [
  { text: "Dashboard", href: "/dashboard", icon: AccountBalanceWalletIcon },
  { text: "Reports", href: "/dashboard/reports", icon: BarChartIcon },
  { text: "Payers", href: "/dashboard/payers", icon: PeopleIcon },
  { text: "Accounts", href: "/dashboard/accounts", icon: SavingsIcon },
  { text: "Categories", href: "/dashboard/categories", icon: ChecklistIcon },
  { text: "Settings", href: "/dashboard/settings", icon: SettingsIcon },
];

export const mainListItems = (
  <React.Fragment>
    {LINKS.map(({ text, href, icon: Icon }) => (
      <ListItem key={href} disablePadding>
        <ListItemButton component={Link} href={href}>
          <ListItemIcon>
            <Icon />
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      </ListItem>
    ))}
  </React.Fragment>
);
