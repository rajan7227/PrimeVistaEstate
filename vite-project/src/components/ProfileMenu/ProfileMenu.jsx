import React from "react";
import { Menu, Avatar } from "@mantine/core";

function ProfileMenu({ user }, { logout }) {
  return (
    <>
      <Menu>
        <Menu.Target>
          <Avatar src={user?.picture} alt="user profile img" radius={"xl"} />
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item>Favorites</Menu.Item>
          <Menu.Item>Bookings</Menu.Item>
          <Menu.Item
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Logout
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  );
}

export default ProfileMenu;
