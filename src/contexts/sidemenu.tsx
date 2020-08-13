
import React, { createContext, useContext, useState, Dispatch, SetStateAction, useMemo } from 'react';
import SideMenu from '../components/SideMenu';
import MenuForm from '../components/MenuForm';

interface ISideMenu {
	isActive: boolean;
	setActive: Dispatch<SetStateAction<boolean>>;
}

const SideMenuContext = createContext<ISideMenu>({} as ISideMenu);

export const SideMenuProvider: React.FC = ({ children }) => {
  const [isActive, setActive] = useState<boolean>(false)
  
  const value = useMemo(() => ({
    isActive, 
    setActive
  }),[isActive])

	return (
		<SideMenuContext.Provider value={value} >
			{ children }
      <SideMenu open={isActive}>
        <MenuForm/>
      </SideMenu>
		</SideMenuContext.Provider>
	);
};

export default function useSideMenu() {
	const context = useContext(SideMenuContext);

	return context;
};