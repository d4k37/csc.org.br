import React from "react";
import { Link } from "gatsby";
import pageHeaderBg from "../assets/images/backgrounds/page-header-1-1.jpg";
import transpImg from "../../content/transparencia/transparencia-header-one.jpeg"

const PageHeader = ({ title, crumbTitle }) => {
  return (
    <section className="page-header">
      <div
        className="page-header__bg"
        style={{ backgroundImage: `url(${transpImg})` }}
      ></div>

      <div className="container">
        <h2>{title}</h2>
        <ul className="thm-breadcrumb list-unstyled ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>-</li>
          <li>
            <span>{crumbTitle}</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PageHeader;
