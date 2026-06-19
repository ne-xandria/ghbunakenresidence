export const dummyRooms = [
  {
    id: '1',
    name: 'Deluxe Suite',
    type: 'Suite',
    daily_rate: 450000,
    weekly_rate: 2800000,
    description: 'Kamar elegan dengan pemandangan kota, fasilitas lengkap dengan Wi-Fi cepat, TV kabel, dan sarapan gratis.',
    image_url: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80',
    status: 'available'
  },
  {
    id: '2',
    name: 'Premium Studio',
    type: 'Studio',
    daily_rate: 350000,
    weekly_rate: 2200000,
    description: 'Studio minimalis yang nyaman, cocok untuk profesional atau pelancong yang mencari kepraktisan.',
    image_url: 'https://images.unsplash.com/photo-1590490359683-658d34c8f12f?auto=format&fit=crop&w=800&q=80',
    status: 'available'
  },
  {
    id: '3',
    name: 'Standard Room',
    type: 'Standard',
    daily_rate: 250000,
    weekly_rate: 1500000,
    description: 'Kamar bersih dan nyaman dengan harga terjangkau untuk masa inap harian maupun mingguan.',
    image_url: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80',
    status: 'available'
  }
];

export let dummyBookings = [
  {
    id: 'b1',
    room_id: '2',
    guest_name: 'Budi Santoso',
    guest_phone: '081234567890',
    check_in: '2026-06-25',
    check_out: '2026-06-27',
    duration_type: 'daily',
    total_price: 700000,
    status: 'pending'
  }
];
