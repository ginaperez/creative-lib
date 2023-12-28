import { StyledMenu, StyledMenuItem } from './styledComponents';

interface Menu {
    menuItem: string;
};

interface MenuProps {
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