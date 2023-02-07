import React from 'react';

function Header() {
    return (
        <nav className={"flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white"}>
            <h3 className={"font-bold"}>Github Search</h3>
        </nav>
    );
}

export default Header;