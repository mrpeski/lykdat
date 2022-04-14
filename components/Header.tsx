import React from 'react';
import Link from "next/link";

const Header = () => (
    <React.Fragment>
        <Link href="/">
            <img src={"/lykdat.png"} alt={"Lykdat Logo"} className={"logo"}/></Link>
        <hr/>
    </React.Fragment>
);

export default Header;
