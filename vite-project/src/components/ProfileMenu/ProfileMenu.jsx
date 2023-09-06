import React from "react";
import { Menu, Avatar } from "@mantine/core";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function ProfileMenu({ user }, { logout }) {
  const navigate = useNavigate(); // Use useNavigate hook

  return (
    <>
      <Menu>
        <Menu.Target>
          <Avatar src={user?.picture} alt="user profile img" radius={"xl"} />
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item>Favorites</Menu.Item>
          {/* Use navigate function directly */}
          <Menu.Item onClick={() => navigate("./bookings", { replace: true })}>
            Bookings
          </Menu.Item>
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
