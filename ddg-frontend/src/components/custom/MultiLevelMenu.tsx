import { ArrowDropDown, Storage } from "@mui/icons-material";
import { Collapse, Stack, Tooltip, type TooltipProps } from "@mui/material";
import React, { useRef, useState, type ReactElement } from "react";
import { Menu, useSidebarState } from "react-admin";

export type MultiLevelMenuProps = {
  children: React.ReactNode;
  title?: string;
  tooltipProps?: TooltipProps;
  leftIcon?: ReactElement;
  initialOpen?: boolean;
  active?: boolean;
};

export const MultiLevelMenu = (props: MultiLevelMenuProps) => {
  const { title, children, tooltipProps, leftIcon, initialOpen, active } =
    props;

  const openMenuRef = useRef<boolean>(initialOpen || false);
  const [openMenu, setOpenMenu] = useState<boolean>(openMenuRef.current);
  const [sideBarOpen] = useSidebarState();

  const handleMenuClick = (event: Event, index: boolean) => {
    event.preventDefault();
    setOpenMenu(index);
  };

  const renderMenuItem = () => (
    <Menu.Item
      to={"/#"}
      onClick={(e: unknown) => {
        handleMenuClick(e as MouseEvent, !openMenu);
      }}
      leftIcon={leftIcon || <Storage />}
      selected={active || openMenu}
      className={active ? "RaMenuItemLink-active" : ""}
    >
      <Stack
        direction={"row"}
        display={"flex"}
        justifyContent={"space-between"}
        sx={{ width: "100%" }}
      >
        <span>{title ? title : ""}</span>
        <ArrowDropDown
          sx={{
            transform: openMenu ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 300ms linear",
          }}
        />
      </Stack>
    </Menu.Item>
  );

  return (
    <>
      {sideBarOpen ? (
        renderMenuItem()
      ) : (
        <Tooltip title={title} placement="right" {...tooltipProps}>
          {renderMenuItem()}
        </Tooltip>
      )}
      <Collapse
        in={openMenu}
        timeout="auto"
        unmountOnExit
        sx={{ paddingLeft: sideBarOpen ? "10px" : "" }}
      >
        <Menu>{children}</Menu>
      </Collapse>
    </>
  );
};
