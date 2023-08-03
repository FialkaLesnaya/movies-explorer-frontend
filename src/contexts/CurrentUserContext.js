import React from "react";

export const currentUserObject = {
  name: "",
  email: "",
};

export const CurrentUserContext = React.createContext(currentUserObject);
