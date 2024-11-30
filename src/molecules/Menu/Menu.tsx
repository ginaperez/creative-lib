import { StyledMenu, StyledMenuItem } from './styledComponents'

export interface MenuItem {
  menuItem: string
}

export interface MenuProps {
  menu: MenuItem[]
}

export const Menu = ({ menu }: MenuProps) => {
  return (
    <StyledMenu>
      {menu.map((menuOption) => (
        <StyledMenuItem>{menuOption.menuItem}</StyledMenuItem>
      ))}
    </StyledMenu>
  )
}

export default Menu
