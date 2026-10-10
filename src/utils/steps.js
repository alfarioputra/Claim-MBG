import { ClipboardList, Clock3, PackageCheck } from "lucide-react"

export const steps = [
    {
        number: "01",
        icon: ClipboardList,
        title: "Catat pengambilan",
        description: "Isi nama perwakilan, kelas, dan jumlah porsi yang diambil.",
    },
    {
        number: "02",
        icon: Clock3,
        title: "Konfirmasi saat tiba",
        description: "Tandai pengambilan agar waktu dan status distribusi tercatat.",
    },
    {
        number: "03",
        icon: PackageCheck,
        title: "Kembalikan ompreng",
        description: "Pastikan wadah dan tutup lengkap sebelum konfirmasi pengembalian.",
    },
]