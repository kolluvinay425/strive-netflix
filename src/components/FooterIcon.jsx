const FooterIcon = ({ path }) => (
  <div className="footer-icon">
    <a href="#2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        fill="currentColor"
        className="bi bi-facebook"
        viewBox="0 0 16 16"
      >
        <path d={path} />
      </svg>
    </a>
  </div>
);

export default FooterIcon;
