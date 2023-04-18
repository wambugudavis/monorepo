import {
    Header,
    HeaderName,
    HeaderNavigation,
    HeaderMenu,
    HeaderMenuItem,
    HeaderGlobalBar,
    HeaderGlobalAction
} from '@carbon/react';
import {Switcher, Notification, UserAvatar, Search} from '@carbon/react/icons';

interface Props {
    header?: string;
}

export function TopNavigation({header = 'Dashboard'}: Props) {
    return (
        <Header aria-label="Tibu Health">
            <HeaderName href="#" prefix="TIBU HEALTH">
                { header }
            </HeaderName>
            <HeaderNavigation aria-label="IBM [Platform]">
                <HeaderMenuItem href="http://localhost:3001">Patients</HeaderMenuItem>
                <HeaderMenuItem href="#">Catalog</HeaderMenuItem>
                <HeaderMenuItem href="#">Inventory</HeaderMenuItem>
                <HeaderMenu aria-label="Tools" menuLinkName="Tools">
                    <HeaderMenuItem href="http://localhost:3000">Meeting rooms</HeaderMenuItem>
                    <HeaderMenuItem href="#">Chronic Disease Calculator</HeaderMenuItem>
                </HeaderMenu>
            </HeaderNavigation>
            <HeaderGlobalBar>
                <HeaderGlobalAction aria-label="Search" onClick={() => {
                }}>
                    <Search/>
                </HeaderGlobalAction>
                <HeaderGlobalAction aria-label="Notifications" onClick={() => {
                }}>
                    <Notification/>
                </HeaderGlobalAction>
                <HeaderGlobalAction aria-label="User" onClick={() => {
                }}>
                    <UserAvatar/>
                </HeaderGlobalAction>
                <HeaderGlobalAction aria-label="App Switcher" onClick={() => {
                }}>
                    <Switcher/>
                </HeaderGlobalAction>
            </HeaderGlobalBar>
        </Header>
    )
}
