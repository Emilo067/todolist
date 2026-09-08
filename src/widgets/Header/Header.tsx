import React, { FC } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import LogoApp from "common/assets/icons/svg/logoApp.svg";
import { MenuButton } from "common/components/MenuButton/MenuButton";
import { MaterialUISwitch } from "common/components/Switch/Switch";
import { LinearProgress } from "@mui/material";
import { useSelector } from "react-redux";
import { AppRootStateType } from "app/store/store";
import { selectIsLoggedIn } from "features/auth/model/auth.selectors";
import { RequestStatusType } from "app/model/app.reducer";
import { selectStatus } from "app/model/app.selectors";
import { authThunks } from "features/auth/model/auth.reducer";
import { useAppDispatch } from "common/hooks/useAppDispatch";
import { ThemeMode } from "common/providers/ThemeProvider/ThemeAppProvider";

type Props = {
  themeMode: ThemeMode;
  setThemeMode: (themeMode: ThemeMode) => void;
};

export const Header: FC<Props> = ({ themeMode, setThemeMode }) => {
  const isLoggedIn = useSelector<AppRootStateType, boolean>(selectIsLoggedIn);
  const status = useSelector<AppRootStateType, RequestStatusType>(selectStatus);
  const dispatch = useAppDispatch();

  const changeSwitchStateHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setThemeMode(event.target.checked ? "dark" : "light");
  };

  const logoutHandler = () => {
    dispatch(authThunks.logout());
  };

  return (
    <AppBar position="static" sx={{ mb: "30px" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <img src={LogoApp as any} alt={"logo"} />
        <div>
          <MenuButton disabled={!isLoggedIn} onClick={logoutHandler}>
            Logout
          </MenuButton>
          <MaterialUISwitch color={"default"} checked={themeMode === "dark"} onChange={changeSwitchStateHandler} />
        </div>
      </Toolbar>
      {status === "loading" && <LinearProgress />}
    </AppBar>
  );
};
