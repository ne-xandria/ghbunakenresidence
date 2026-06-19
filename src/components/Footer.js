import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <h3 className={styles.brand}>Bunaken Residence</h3>
            <p className={styles.description}>
              Pilihan cerdas untuk hunian harian dan mingguan yang elegan, nyaman, dan praktis.
            </p>
          </div>
          <div>
            <h4 className={styles.heading}>Navigasi</h4>
            <ul className={styles.list}>
              <li><a href="/kamar" className={styles.link}>Daftar Kamar</a></li>
              <li><a href="/fasilitas" className={styles.link}>Fasilitas</a></li>
              <li><a href="/syarat-ketentuan" className={styles.link}>Syarat & Ketentuan</a></li>
            </ul>
          </div>
          <div>
            <h4 className={styles.heading}>Kontak Kami</h4>
            <ul className={styles.list}>
              <li className={styles.description}>📍 Jl. Bunaken No. 123, Kota</li>
              <li className={styles.description}>📞 +62 812 3456 7890</li>
              <li className={styles.description}>✉️ info@bunakenresidence.com</li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Bunaken Residence. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
