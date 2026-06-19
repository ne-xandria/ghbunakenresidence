"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const router = useRouter();
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.username === 'admin' && formData.password === 'admin') {
      router.push('/admin/dashboard');
    } else {
      alert('Username atau password salah (gunakan admin / admin untuk demo)');
    }
  };

  return (
    <div className="container section" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
      <div className="glass-panel" style={{ padding: '3rem', width: '100%', maxWidth: '400px' }}>
        <h1 className="heading-2" style={{ textAlign: 'center', marginBottom: '2rem' }}>Admin Login</h1>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.875rem', fontWeight: '500' }}>Username</label>
            <input 
              type="text" 
              required 
              style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--color-border)' }}
              onChange={(e) => setFormData({...formData, username: e.target.value})}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.875rem', fontWeight: '500' }}>Password</label>
            <input 
              type="password" 
              required 
              style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--color-border)' }}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
          </div>
          <button type="submit" className="btn-primary" style={{ marginTop: '1rem', width: '100%' }}>Login</button>
        </form>
      </div>
    </div>
  );
}
