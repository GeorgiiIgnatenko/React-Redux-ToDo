import React from "react";
import { PageHeader } from "antd";

const Header = () => {
    return(
        <header>
            <PageHeader type='title' style={{
                textAlign:'center',
                fontSize: '50px'
            }}>Список задач</PageHeader>
        </header>
    );
}

export default Header;