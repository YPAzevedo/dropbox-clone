import React, { useEffect, useState } from "react";

import { Container } from "./styles";
import useSideMenu from "../../contexts/sidemenu";

interface Props {
  open: boolean;
}

const SideMenu: React.FC<Props> = ({ children, open }) => {
  const { isActive, setActive } = useSideMenu();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
      setActive(false);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [setActive]);

  const classes = [isActive ? "open" : "", scrollY < 300 ? "open-scroll" : ""];

  const className = classes.join(" ").trim();

  console.log(className);

  return <Container className={className}>{children}</Container>;
};

export default SideMenu;
