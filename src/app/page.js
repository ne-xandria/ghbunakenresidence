import Link from 'next/link';
import { dummyRooms } from '../lib/mockData';
import styles from './page.module.css';
import kamarStyles from './kamar/Kamar.module.css';

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className="container">
          <header className={styles.hero}>
            <div className={`glass-panel ${styles.heroPanel}`}>
              <h1 className="heading-1" style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>
                Bunaken Residence
              </h1>
              <p className="text-muted" style={{ fontSize: '1.125rem', marginBottom: '2rem' }}>
                Pengalaman menginap yang elegan dan praktis. Pesan kamar harian atau mingguan Anda sekarang.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <Link href="/kamar" className="btn-accent">Pesan Sekarang</Link>
                <a href="#katalog" className="btn-primary">Lihat Kamar</a>
              </div>
            </div>
          </header>
        </div>
      </main>

      <section id="katalog" className={`${styles.sectionBg} section`}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="heading-2" style={{ color: 'var(--color-primary)' }}>Pilihan Kamar Kami</h2>
            <p className="text-muted">Desain premium untuk kenyamanan maksimal Anda.</p>
          </div>

          <div className={kamarStyles.grid}>
            {dummyRooms.map((room) => (
              <div key={room.id} className={`glass-panel ${kamarStyles.card}`}>
                <div className={kamarStyles.imageContainer}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={room.image_url} alt={room.name} className={kamarStyles.image} />
                </div>
                <div className={kamarStyles.content}>
                  <h3 className="heading-2" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{room.name}</h3>
                  <p className="text-muted" style={{ marginBottom: '1rem', fontSize: '0.875rem' }}>{room.description}</p>
                  
                  <div className={kamarStyles.pricing}>
                    <div>
                      <span className={kamarStyles.label}>Harian</span>
                      <div className={kamarStyles.price}>Rp {room.daily_rate.toLocaleString('id-ID')}</div>
                    </div>
                    <div>
                      <span className={kamarStyles.label}>Mingguan</span>
                      <div className={kamarStyles.price}>Rp {room.weekly_rate.toLocaleString('id-ID')}</div>
                    </div>
                  </div>
                  
                  <Link href={`/kamar/${room.id}`} className={`btn-primary ${kamarStyles.btnFull}`}>
                    Lihat Detail & Pesan
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fasilitas Section */}
      <section className={`${styles.sectionAltBg} section`}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="heading-2" style={{ color: 'var(--color-primary)' }}>Fasilitas Unggulan</h2>
            <p className="text-muted">Kenyamanan Anda adalah prioritas kami.</p>
          </div>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📶</div>
              <h3 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Wi-Fi Super Cepat</h3>
              <p className="text-muted" style={{ fontSize: '0.875rem' }}>Akses internet stabil di seluruh area.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>❄️</div>
              <h3 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Full AC</h3>
              <p className="text-muted" style={{ fontSize: '0.875rem' }}>Kamar sejuk dan nyaman setiap saat.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🛡️</div>
              <h3 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Keamanan 24 Jam</h3>
              <p className="text-muted" style={{ fontSize: '0.875rem' }}>Sistem CCTV dan penjagaan keamanan.</p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🚗</div>
              <h3 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Parkir Luas</h3>
              <p className="text-muted" style={{ fontSize: '0.875rem' }}>Area parkir aman untuk kendaraan Anda.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className={`${styles.sectionBg} section`}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="heading-2" style={{ color: 'var(--color-primary)' }}>Apa Kata Mereka?</h2>
            <p className="text-muted">Testimoni nyata dari tamu yang pernah menginap.</p>
          </div>
          <div className={styles.testimonialGrid}>
            <div className={styles.testimonialCard}>
              <p className={styles.testimonialText}>"Tempatnya sangat bersih dan nyaman. Fasilitas lengkap dan desain kamarnya modern. Sangat direkomendasikan untuk staycation!"</p>
              <div className={styles.testimonialAuthor}>- Sarah A.</div>
            </div>
            <div className={styles.testimonialCard}>
              <p className={styles.testimonialText}>"Harga sepadan dengan fasilitas premium yang didapatkan. Lokasi strategis dan pelayanan admin ramah."</p>
              <div className={styles.testimonialAuthor}>- Budi M.</div>
            </div>
            <div className={styles.testimonialCard}>
              <p className={styles.testimonialText}>"Sangat memuaskan! Proses booking mudah dan kamarnya persis seperti di foto. Pasti akan menginap di sini lagi."</p>
              <div className={styles.testimonialAuthor}>- Rina K.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Lokasi / Maps Section */}
      <section className={`${styles.sectionAltBg} section`}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="heading-2" style={{ color: 'var(--color-primary)' }}>Lokasi Kami</h2>
            <p className="text-muted">Sangat strategis dan mudah dijangkau dari pusat kota.</p>
          </div>
          <div className={styles.mapsContainer}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126932.32924151327!2d106.72147391942485!3d-6.183427339794344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x100c5e82dd4b820!2sJakarta%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
