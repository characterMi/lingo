import { FC } from "react";

interface HeaderProps {
    hearts: number;
    percentage: number;
    hasActiveSubscription: boolean;
}
 
export const Header: FC<HeaderProps> = () => {
    return (
        <header>Header</header>
    );
}
