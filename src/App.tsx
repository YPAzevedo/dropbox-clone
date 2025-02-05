import React from "react";
import Section from "./components/Section";

import { SideMenuProvider } from "./contexts/sidemenu";

import data from "./data/index";

const App: React.FC = () => {
  return (
    <SideMenuProvider>
      <Section
        variant="blue"
        title={data[0].title}
        description={data[0].description}
      />
      <Section
        variant="beige"
        title={data[1].title}
        description={data[1].description}
      />
      <Section
        variant="blue"
        title={data[2].title}
        description={data[2].description}
      />
      <Section
        variant="white"
        title={data[3].title}
        description={data[3].description}
      />
      <Section
        variant="black"
        title={data[4].title}
        description={data[4].description}
      />
    </SideMenuProvider>
  );
};

export default App;
