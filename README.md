# ClaimMBG

ClaimMBG adalah portal pencatatan distribusi Makan Bergizi Gratis (MBG). Aplikasi membantu perwakilan kelas mencatat porsi, mengonfirmasi pengambilan, dan mencatat pengembalian ompreng. Petugas dapat memantau catatan distribusi melalui dashboard.

## Fitur

- Landing page berisi alur layanan dan informasi operasional.
- Login menggunakan Clerk.
- Pengalihan pengguna berdasarkan role Clerk: `user` ke form dan `admin` ke dashboard.
- Pencatatan kelas, nama perwakilan, jumlah porsi, waktu, dan status melalui Supabase.
- Konfirmasi pengambilan dan pengembalian ompreng.
- Dashboard dengan filter kelas dan pencarian data.
- Halaman 404 untuk alamat yang tidak ditemukan.

## Teknologi

- React 19 dan Vite 8
- Tailwind CSS 4
- Clerk untuk autentikasi
- Supabase untuk penyimpanan data
- React Router untuk navigasi
- AOS untuk animasi pada bagian halaman

## Menjalankan Secara Lokal

Prasyarat: Node.js yang didukung Vite 8 dan npm.

1. Pasang dependency:

   ```bash
   npm install
   ```

2. Buat file `.env.local` di root proyek. Isi dengan kredensial project milikmu:

   ```dotenv
   VITE_CLERK_PUBLISHABLE_KEY=pk_test_ganti_dengan_publishable_key_clerk
   VITE_SUPABASE_URL=https://project-id.supabase.co
   VITE_SUPABASE_KEY=ganti_dengan_supabase_publishable_key
   ```

   Gunakan **Publishable Key** Clerk dan Supabase. Jangan masukkan Clerk Secret Key atau Supabase `service_role` key ke variabel `VITE_` karena variabel tersebut masuk ke bundle browser.

3. Jalankan server development:

   ```bash
   npm run dev
   ```

   Buka alamat lokal yang ditampilkan Vite, biasanya `http://localhost:5173`.

## Environment Variables

| Nama | Kegunaan |
| --- | --- |
| `VITE_CLERK_PUBLISHABLE_KEY` | Menginisialisasi Clerk di browser. Tambahkan juga pada Environment Variables Vercel untuk Production dan Preview yang digunakan. |
| `VITE_SUPABASE_URL` | URL project Supabase. |
| `VITE_SUPABASE_KEY` | Publishable/anon key Supabase untuk client aplikasi. |

Setelah mengubah environment variable di Vercel, jalankan deployment baru agar nilainya masuk ke build. Jangan commit `.env.local` atau membagikan key melalui chat maupun source code.

## Route

| Route | Halaman | Akses |
| --- | --- | --- |
| `/` | Landing page | Publik |
| `/login` | Form login | Publik |
| `/redirect` | Pengalihan berdasarkan role | Perlu sesi Clerk |
| `/form` | Pencatatan pengambilan dan pengembalian | Perlu sesi Clerk dengan role `user` |
| `/dashboard` | Pemantauan distribusi MBG | Perlu sesi Clerk dengan role `admin` |
| Route lain | Halaman tidak ditemukan | Publik |

Atur `publicMetadata.role` pada user Clerk menjadi `user` atau `admin` agar pengalihan setelah login sesuai dengan halaman yang diizinkan aplikasi.

## Data Supabase

Aplikasi menggunakan tabel berikut:

- `classes`: pilihan kelas dimuat dari tabel ini. Setiap row yang dipakai form memerlukan `id` dan `value`.
- `data`: menyimpan catatan distribusi. Aplikasi membaca dan memperbarui kolom `id`, `name`, `classroom`, `amount`, `logtime`, dan `status`.

Pastikan tabel dan kebijakan akses Supabase (Row Level Security) sesuai dengan operasi yang dilakukan aplikasi. Jangan menggunakan service-role key di frontend.

Status yang digunakan aplikasi antara lain `Belum Diambil`, `Sudah Diambil`, dan `Sudah Dikembalikan`. Batas pengambilan yang ditampilkan adalah pukul 13.00 WIB; lokasi pengembalian ompreng adalah Serambi Aula Lama.

## Perintah

```bash
npm run dev      # Menjalankan server development
npm run build    # Membuat build production di folder dist
npm run preview  # Menjalankan preview build production
npm run lint     # Menjalankan ESLint
```

## Deployment ke Vercel

1. Hubungkan repository ke Vercel.
2. Tambahkan ketiga environment variable di atas pada pengaturan project Vercel. Pilih environment Production dan Preview sesuai kebutuhan.
3. Deploy ulang setelah mengatur atau mengubah environment variable.
4. Pastikan domain deployment diizinkan pada konfigurasi Clerk jika instance Clerk membatasi domain yang dapat menggunakan aplikasi.

File `vercel.json` mengarahkan request route aplikasi ke `index.html` agar route React Router dapat dibuka langsung.
