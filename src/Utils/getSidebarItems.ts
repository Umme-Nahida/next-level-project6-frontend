
import { adminSidebarItems } from "@/Routes/AdminSidebarItems";
import { driverSidebarItems } from "@/Routes/DriverSidebarItems";
import { userSidebarItems } from "@/Routes/UserSidebarItems";
import { role, type TRole } from "@/Types";

export const getSidebarItems = (userRole: TRole) => {
  switch (userRole) {
    case role.superAdmin:
      return [...adminSidebarItems];
    case role.admin:
      return [...adminSidebarItems];
    case role.rider:
      return [...userSidebarItems];
    case role.driver:
      return [...driverSidebarItems];
    default:
      return [];
  }
};