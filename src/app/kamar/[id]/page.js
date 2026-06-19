"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { dummyRooms } from '../../../lib/mockData';
import styles from './Booking.module.css';

export default function RoomDetail({ params }) {
  const router = useRouter();
  const resolvedParams = React.use(params);
  const roomId = resolvedParams.id;
  const [room, setRoom] = useState(null);
  
  const [formData, setFormData] = useState({
    guest_name: '',
    guest_phone: '',
    check_in: '',
    duration_type: 'daily',
    duration_count: 1
  });

  useEffect(() => {
    // Mock fetch room
    const found = dummyRooms.find(r => r.id === roomId);
    if (found) setRoom(found);
  }, [roomId]);

  if (!room) return <div className="container section">Loading...</div>;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calculateTotal = () => {
    const rate = formData.duration_type === 'daily' ? room.daily_rate : room.weekly_rate;
    return rate * formData.duration_count;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate booking submission
    alert(`Booking Berhasil!\nTotal: Rp ${calculateTotal().toLocaleString('id-ID')}\nSilakan tunggu konfirmasi admin.`);
    router.push('/kamar');
  };

  return (
    <div className="container section">
      <div className={styles.layout}>
        <div className={styles.roomInfo}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={room.image_url} alt={room.name} className={styles.image} />
          <h1 className="heading-1" style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>{room.name}</h1>
          <p className="text-muted" style={{ fontSize: '1.125rem' }}>{room.description}</p>
          
          <div className={styles.rates}>
            <div className={styles.rateBox}>
              <span className={styles.rateLabel}>Tarif Harian</span>
              <div className={styles.ratePrice}>Rp {room.daily_rate.toLocaleString('id-ID')}</div>
            </div>
            <div className={styles.rateBox}>
              <span className={styles.rateLabel}>Tarif Mingguan</span>
              <div className={styles.ratePrice}>Rp {room.weekly_rate.toLocaleString('id-ID')}</div>
            </div>
          </div>
        </div>

        <div className={styles.bookingFormContainer}>
          <div className={`glass-panel ${styles.formPanel}`}>
            <h2 className="heading-2" style={{ marginBottom: '1.5rem' }}>Form Reservasi</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Nama Lengkap</label>
                <input required type="text" name="guest_name" value={formData.guest_name} onChange={handleChange} className={styles.input} placeholder="Budi Santoso" />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Nomor Telepon (WhatsApp)</label>
                <input required type="tel" name="guest_phone" value={formData.guest_phone} onChange={handleChange} className={styles.input} placeholder="0812xxxx" />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Tanggal Check-in</label>
                <input required type="date" name="check_in" value={formData.check_in} onChange={handleChange} className={styles.input} />
              </div>
              
              <div className={styles.formRow}>
                <div className={styles.formGroup} style={{ flex: 1 }}>
                  <label className={styles.label}>Tipe Durasi</label>
                  <select name="duration_type" value={formData.duration_type} onChange={handleChange} className={styles.input}>
                    <option value="daily">Harian</option>
                    <option value="weekly">Mingguan</option>
                  </select>
                </div>
                <div className={styles.formGroup} style={{ flex: 1 }}>
                  <label className={styles.label}>Lama Menginap</label>
                  <input required type="number" min="1" name="duration_count" value={formData.duration_count} onChange={handleChange} className={styles.input} />
                </div>
              </div>

              <div className={styles.summaryBox}>
                <span className={styles.summaryLabel}>Total Estimasi</span>
                <div className={styles.summaryTotal}>Rp {calculateTotal().toLocaleString('id-ID')}</div>
              </div>

              <button type="submit" className={`btn-primary ${styles.btnSubmit}`}>Konfirmasi Reservasi</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
