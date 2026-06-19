import Link from 'next/link';
import { dummyRooms } from '../../lib/mockData';
import styles from './Kamar.module.css';

export const metadata = {
  title: 'Katalog Kamar - Bunaken Residence'
};

export default function KamarPage() {
  return (
    <div className="container section">
      <div className={styles.header}>
        <h1 className="heading-1" style={{ color: 'var(--color-primary)' }}>Pilih Kamar Anda</h1>
        <p className="text-muted">Temukan kamar yang sesuai dengan kebutuhan Anda untuk masa inap harian atau mingguan.</p>
      </div>

      <div className={styles.grid}>
        {dummyRooms.map((room) => (
          <div key={room.id} className={`glass-panel ${styles.card}`}>
            <div className={styles.imageContainer}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={room.image_url} alt={room.name} className={styles.image} />
            </div>
            <div className={styles.content}>
              <h3 className="heading-2" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{room.name}</h3>
              <p className="text-muted" style={{ marginBottom: '1rem', fontSize: '0.875rem' }}>{room.description}</p>
              
              <div className={styles.pricing}>
                <div>
                  <span className={styles.label}>Harian</span>
                  <div className={styles.price}>Rp {room.daily_rate.toLocaleString('id-ID')}</div>
                </div>
                <div>
                  <span className={styles.label}>Mingguan</span>
                  <div className={styles.price}>Rp {room.weekly_rate.toLocaleString('id-ID')}</div>
                </div>
              </div>
              
              <Link href={`/kamar/${room.id}`} className={`btn-primary ${styles.btnFull}`}>
                Lihat Detail & Pesan
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
