import { AppShell, Burger } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { LeftMenuBar } from './DashboardNavbar';

export interface DashboardLayoutProps {
    children: React.ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    const [opened, { toggle }] = useDisclosure();
    return (
        <AppShell>
            <AppShell.Header>
                <Burger opened={opened} onClick={toggle} hiddenFrom='sm' size='sm' />
                <div>Logo</div>
            </AppShell.Header>
            <AppShell.Navbar p="md"><LeftMenuBar /></AppShell.Navbar>
            <AppShell.Main>{children}</AppShell.Main>
        </AppShell>
    )
}