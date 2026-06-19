import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <Link href="/" className={styles.logo}>
          Bunaken<span style={{ color: 'var(--color-accent)' }}>Residence</span>
        </Link>
        <nav className={styles.nav}>
          <Link href="/kamar" className={styles.link}>Kamar</Link>
          <Link href="/fasilitas" className={styles.link}>Fasilitas</Link>
          <Link href="/kontak" className={styles.link}>Kontak</Link>
          <Link href="/admin/login" className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
            Admin Panel
          </Link>
        </nav>
      </div>
    </header>
  );
}
