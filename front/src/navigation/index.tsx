import React from "react";

const Navigation = () => {
  return (
    <nav>
      <ul id="customNav">
        <li>
          <a href="/blog" className="hover:text-primary">
            📰 Blog
          </a>
        </li>
        <li>
          <a href="/blog/article/new" className="hover:text-primary">
            🖌️ Rédiger un article
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
