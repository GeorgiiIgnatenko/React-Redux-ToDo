import React from "react";
import { PageHeader } from "antd";
import './header.css'

const Header = () => {
  return (
    <header>
      <PageHeader
          className='pageHeader'
        type="title"
      >
        Список задач
      </PageHeader>
    </header>
  );
};

export default Header;