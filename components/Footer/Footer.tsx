import css from "./Footer.module.css";

function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <p>© {new Date().getFullYear()} NoteHub. All rights reserved.</p>
        <div className={css.wrap}>
          <p>
            Developer:{" "}
            <a
              href="https://viktorharasymiv.github.io/portfolio/"
              target="_blank"
            >
              Viktor Harasymiv
            </a>
          </p>
          <p>
            Contact us:
            <a href="<mailto:student@notehub.app>">student@notehub.app</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
