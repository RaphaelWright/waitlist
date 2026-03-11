import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer" aria-label="Site footer">
      <Link href="/" className="footer-logo" aria-label="huzlla home">
        huzlla
      </Link>

      <ul className="footer-links">
        <li>
          <a href="#waitlist">Join Waitlist</a>
        </li>
        <li>
          <a href="mailto:hello@huzlla.co">Contact</a>
        </li>
        <li>
          <a href="#">Privacy</a>
        </li>
        <li>
          <a href="#">Terms</a>
        </li>
      </ul>

      <p className="footer-made">Ghana · Kenya · Nigeria · South Africa</p>
    </footer>
  );
}
