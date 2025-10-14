import navbar from "../components/navbar.js"
import sidebar from "../components/sidebar.js"

function dashboard () {
    return `
   <!-- DASHBOARD WRAPPER -->
<div class="flex flex-col min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-zinc-200">
  
  <!-- NAVBAR -->
  ${navbar()}

  <!-- KONTEN UTAMA -->
  <div class="flex flex-1 overflow-hidden">
    
    <!-- SIDEBAR -->
    ${sidebar()}

    <!-- MAIN CONTENT -->
    <main class="flex-1 p-8 overflow-y-auto">
      <h2 class="text-2xl font-bold text-yellow-400 mb-6">Dashboard</h2>

      <!-- CARD GRID -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-zinc-900 border border-yellow-700/30 rounded-xl p-6 shadow-[0_0_20px_-8px_rgba(234,179,8,0.3)]">
          <h3 class="text-lg font-semibold text-yellow-400 mb-2">Total Barang</h3>
          <p class="text-3xl font-bold text-zinc-100">125</p>
        </div>

        <div class="bg-zinc-900 border border-yellow-700/30 rounded-xl p-6 shadow-[0_0_20px_-8px_rgba(234,179,8,0.3)]">
          <h3 class="text-lg font-semibold text-yellow-400 mb-2">Kategori</h3>
          <p class="text-3xl font-bold text-zinc-100">8</p>
        </div>

        <div class="bg-zinc-900 border border-yellow-700/30 rounded-xl p-6 shadow-[0_0_20px_-8px_rgba(234,179,8,0.3)]">
          <h3 class="text-lg font-semibold text-yellow-400 mb-2">Transaksi Hari Ini</h3>
          <p class="text-3xl font-bold text-zinc-100">34</p>
        </div>
      </div>

      <!-- TABEL BARANG -->
      <div class="mt-10">
        <h3 class="text-xl font-semibold text-yellow-400 mb-4">Daftar Barang</h3>
        <div class="overflow-x-auto">
          <table class="w-full text-sm border-collapse bg-zinc-950 border border-yellow-700/30 rounded-xl overflow-hidden">
            <thead class="bg-yellow-500/10 text-yellow-400 uppercase text-xs tracking-wider">
              <tr>
                <th class="px-4 py-3 text-left">No</th>
                <th class="px-4 py-3 text-left">Nama Barang</th>
                <th class="px-4 py-3 text-left">Kategori</th>
                <th class="px-4 py-3 text-left">Stok</th>
                <th class="px-4 py-3 text-left">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-t border-yellow-700/20 hover:bg-yellow-500/5 transition">
                <td class="px-4 py-3">1</td>
                <td class="px-4 py-3">Laptop Lenovo ThinkPad</td>
                <td class="px-4 py-3">Elektronik</td>
                <td class="px-4 py-3">10</td>
                <td class="px-4 py-3">
                  <button class="text-yellow-400 hover:text-yellow-300 font-medium mr-3">Edit</button>
                  <button class="text-red-500 hover:text-red-400 font-medium">Hapus</button>
                </td>
              </tr>
              <tr class="border-t border-yellow-700/20 hover:bg-yellow-500/5 transition">
                <td class="px-4 py-3">2</td>
                <td class="px-4 py-3">Kursi Kantor</td>
                <td class="px-4 py-3">Furniture</td>
                <td class="px-4 py-3">25</td>
                <td class="px-4 py-3">
                  <button class="text-yellow-400 hover:text-yellow-300 font-medium mr-3">Edit</button>
                  <button class="text-red-500 hover:text-red-400 font-medium">Hapus</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  </div>
</div>

`
}

export default dashboard