import React from "react";

export const currentUserObject = {
  name: "",
  about: "",
};

export const CurrentUserContext = React.createContext(currentUserObject);
