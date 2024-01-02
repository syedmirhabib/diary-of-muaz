import classes from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.socialMedia}>
        <a href="#" target="_blank" rel="noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
      <div>Diary of Muaz</div>
      <small>
        Developed by{" "}
        <a
          href="https://www.linkedin.com/in/syedmirhabib/"
          target="_blank"
          rel="noreferrer"
        >
          Syed Mir Habib
        </a>{" "}
        <a href="https://fontawesome.com/" target="_blank" rel="noreferrer"></a>
      </small>
    </footer>
  );
};
export default Footer;
