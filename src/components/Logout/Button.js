import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const Button = styled.button`
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
`;

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </Button>
  );
};

export default LogoutButton;
