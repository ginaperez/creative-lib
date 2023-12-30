import { StyledMenu, StyledMenuItem } from './styledComponents';

export interface Menu {
    menuItem: string;
};

export interface MenuProps {
    menu: Menu[];
};

export const Menu = ({
    menu,
}: MenuProps) => {
    return (
        <StyledMenu>
            {menu.map((menuOption) => (
                <StyledMenuItem>{menuOption.menuItem}</StyledMenuItem>
            ))}
        </StyledMenu>
    );
};

export default Menu;