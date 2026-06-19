export const dummyRooms = [
  {
    id: '1',
    name: 'Deluxe Room',
    type: 'Deluxe',
    daily_rate: 450000,
    weekly_rate: 2800000,
    description: 'Kamar luas yang didesain secara elegan dengan furnitur premium. Fasilitas mencakup kasur King Size, Smart TV 50", Wi-Fi super cepat, kulkas mini, meja kerja eksklusif, dan kamar mandi dalam dengan pemanas air.',
    image_url: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80',
    status: 'available'
  },
  {
    id: '2',
    name: 'Premium Room',
    type: 'Premium',
    daily_rate: 350000,
    weekly_rate: 2200000,
    description: 'Pilihan eksklusif untuk Anda yang mengutamakan privasi dan kenyamanan. Dilengkapi dengan kasur Queen Size, balkon pribadi, Smart TV, akses Wi-Fi khusus, area bersantai yang nyaman, dan layanan kebersihan harian.',
    image_url: 'https://images.unsplash.com/photo-1590490359683-658d34c8f12f?auto=format&fit=crop&w=800&q=80',
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
