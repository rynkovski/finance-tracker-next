import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import ChecklistIcon from "@mui/icons-material/Checklist";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import SavingsIcon from "@mui/icons-material/Savings";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SettingsIcon from "@mui/icons-material/Settings";
import ListItem from "@mui/material/ListItem";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { List } from "@mui/material";
import ReceiptIcon from "@mui/icons-material/Receipt";

const LINKS = [
  { text: "Dashboard", href: "/dashboard", icon: AccountBalanceWalletIcon },
  { text: "Transactions", href: "/dashboard/transactions", icon: ReceiptIcon },
  // { text: "Reports", href: "/dashboard/reports", icon: BarChartIcon },
  // { text: "Goals", href: "/dashboard/goals", icon: TaskAltIcon },
  // { text: "Payers", href: "/dashboard/payers", icon: PeopleIcon },
  { text: "Accounts", href: "/dashboard/accounts", icon: SavingsIcon },
  { text: "Categories", href: "/dashboard/categories", icon: ChecklistIcon },
  { text: "Settings", href: "/dashboard/settings", icon: SettingsIcon },
];
export function Navbar() {
  const pathname = usePathname();
  return (
    <List component="nav">
      {LINKS.map(({ text, href, icon: Icon }) => (
        <ListItem key={href} disablePadding>
          <ListItemButton
            component={Link}
            href={href}
            selected={href === pathname}
          >
            <ListItemIcon>
              <Icon color="primary" />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
