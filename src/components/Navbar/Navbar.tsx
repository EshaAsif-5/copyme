import Image from 'next/image';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Platform', href: '#platform' },
  { label: 'Resources', href: '#resources' },
];

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <Image
            src="/images/logo.png"
            alt="DepViz Logo"
            width={100}
            height={30}
            priority
          />
        </div>

        {/* Nav Links */}
        <ul className={styles.navLinks}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className={styles.navLink}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Buttons */}
        <div className={styles.actions}>
          <a href="#login" className={styles.loginBtn}>
            Log in
          </a>
          <a href="#signup" className={styles.signupBtn}>
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
}
