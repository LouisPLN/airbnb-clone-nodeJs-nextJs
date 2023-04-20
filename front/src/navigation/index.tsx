import React from "react";

const Navigation = () => {
  return (
    <nav>
      <ul id="customNav">
        <li className="text-primary hover:text-primary">
          <a href="/blog">📰 Blog</a>
        </li>
        <li className="hover:text-primary">
          <a href="#">🖌️ Rédiger un article</a>
        </li>
        <li className="hover:text-primary">
          <a href="#">☎️ Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
