import React from "react";

type Props = { index: string; title: string };

const Header = (props: Props) => {
  return (
    <header className="page-header">
      <h1 className="page-header__title">
        <span className="page-index">{props.index}</span>
        {props.title}
      </h1>
    </header>
  );
};

export default Header;
