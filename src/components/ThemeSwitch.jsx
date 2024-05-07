import React, { useContext } from "react";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "../assets/MoonIcon";
import { SunIcon } from "../assets/SunIcon";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeSwitch() {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);

  const handleToggle = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <Switch
      defaultSelected={darkTheme}
      size="md"
      color="secondary"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <SunIcon className={className} />
        ) : (
          <MoonIcon className={className} />
        )
      }
      onChange={handleToggle}
    ></Switch>
  );
}
