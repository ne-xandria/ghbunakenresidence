"use client";

import { dummyBookings, dummyRooms } from '../../../lib/mockData';

export default function AdminDashboard() {
  return (
    <div className="container section">
      <h1 className="heading-1" style={{ marginBottom: '2rem' }}>Dashboard Admin</h1>
      
      <div className="glass-panel" style={{ padding: '2rem', marginBottom: '3rem' }}>
        <h2 className="heading-2" style={{ marginBottom: '1.5rem' }}>Daftar Reservasi Terbaru</h2>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--color-border)' }}>
                <th style={{ padding: '1rem' }}>Tamu</th>
                <th style={{ padding: '1rem' }}>No HP</th>
                <th style={{ padding: '1rem' }}>Check-in</th>
                <th style={{ padding: '1rem' }}>Kamar (ID)</th>
                <th style={{ padding: '1rem' }}>Total</th>
                <th style={{ padding: '1rem' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {dummyBookings.map(b => (
                <tr key={b.id} style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <td style={{ padding: '1rem' }}>{b.guest_name}</td>
                  <td style={{ padding: '1rem' }}>{b.guest_phone}</td>
                  <td style={{ padding: '1rem' }}>{b.check_in}</td>
                  <td style={{ padding: '1rem' }}>{b.room_id}</td>
                  <td style={{ padding: '1rem', fontWeight: '600' }}>Rp {b.total_price.toLocaleString('id-ID')}</td>
                  <td style={{ padding: '1rem' }}>
                    <span style={{ 
                      padding: '0.25rem 0.75rem', 
                      backgroundColor: 'var(--color-accent)', 
                      color: 'var(--color-primary)',
                      borderRadius: '99px',
                      fontSize: '0.75rem',
                      fontWeight: '600'
                    }}>
                      {b.status.toUpperCase()}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="glass-panel" style={{ padding: '2rem' }}>
        <h2 className="heading-2" style={{ marginBottom: '1.5rem' }}>Manajemen Kamar</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem' }}>
          {dummyRooms.map(r => (
            <div key={r.id} style={{ border: '1px solid var(--color-border)', padding: '1rem', borderRadius: '8px' }}>
              <h3 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>{r.name}</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>Status: {r.status}</p>
              <button className="btn-primary" style={{ width: '100%', fontSize: '0.875rem' }}>Ubah Status</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
