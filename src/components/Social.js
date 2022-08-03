import React from "react";

function Social() {
  return (
    <div className="social-links">
      <ul>
        <li>
          <a
            target="_blank"
            href="https://github.com/abhishekY2401/"
            className="github"
            rel="noreferrer"
          >
            <i class="fa fa-github"></i>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/abhishek-yadav-1a1808205/"
            className="linkedin"
            rel="noreferrer"
          >
            <i class="fa fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://twitter.com/AbhiY2852"
            className="twitter"
            rel="noreferrer"
          >
            <i class="fa fa-twitter"></i>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://abhi2048.hashnode.dev/"
            className="hashnode"
            rel="noreferrer"
          >
            <i class="fa-brands fa-hashnode"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Social;
