import { HomeIcon } from "../../Icons/homeIcon";
import { Logo } from "../../Icons/logo";
import { MenuWrapper, ItemWrapper, MenuContent , LogoWrapper } from "./style";

const Menu = () => {
  return (
    <MenuWrapper>
      <LogoWrapper>
        <Logo width="150px" height="150px"/>
      </LogoWrapper>
      <MenuContent>
        <ItemWrapper>
          <HomeIcon width="50px" height="50px"/>
        </ItemWrapper>
        <ItemWrapper>
          <HomeIcon width="50px" height="50px"/>
        </ItemWrapper>
        <ItemWrapper>
          <HomeIcon width="50px" height="50px"/>
        </ItemWrapper>
        <ItemWrapper>
          <HomeIcon width="50px" height="50px"/>
        </ItemWrapper>
      </MenuContent>
    </MenuWrapper>
  );
};

export default Menu;
