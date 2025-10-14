export default function sidebar(){
    return `
    <aside class="w-60 bg-zinc-950 border-r border-yellow-700/30 flex flex-col p-4 space-y-4">
      <div>
        <p class="text-zinc-400 text-xs mb-2 uppercase tracking-wider">Menu Utama</p>
        <ul class="space-y-2">
          <li><a href="#" class="block px-3 py-2 rounded-lg hover:bg-yellow-500/10 hover:text-yellow-400 transition">🏠 Dashboard</a></li>
          <li><a href="#" class="block px-3 py-2 rounded-lg hover:bg-yellow-500/10 hover:text-yellow-400 transition">📦 Data Barang</a></li>
          <li><a href="#" class="block px-3 py-2 rounded-lg hover:bg-yellow-500/10 hover:text-yellow-400 transition">📂 Kategori</a></li>
          <li><a href="#" class="block px-3 py-2 rounded-lg hover:bg-yellow-500/10 hover:text-yellow-400 transition">📊 Laporan</a></li>
        </ul>
      </div>

      <div class="mt-auto pt-4 border-t border-yellow-700/30">
        <a href="#"
           class="flex items-center gap-2 px-3 py-2 rounded-lg text-red-500 hover:text-red-400 hover:bg-red-500/10 transition">
          🚪 Logout
        </a>
        <p class="text-xs text-zinc-500 text-center mt-3">&copy; 2025 ngkBarang</p>
      </div>
    </aside>
`
}