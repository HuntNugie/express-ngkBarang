export default function navbar () {
    return `
      <!-- NAVBAR -->
  <nav class="w-full bg-zinc-950 border-b border-yellow-700/30 shadow-[0_2px_10px_-2px_rgba(234,179,8,0.3)]">
    <div class="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
      <!-- LOGO -->
      <div class="flex items-center gap-2">
        <div class="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-md flex items-center justify-center font-bold text-black">N</div>
        <h1 class="text-lg font-bold text-yellow-400 tracking-wide">ngkBarang Admin</h1>
      </div>

      <!-- PROFIL USER -->
      <div class="flex items-center gap-3">
        <p class="text-sm text-zinc-300">Admin Ngkie</p>
        <div class="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-500 to-yellow-700 flex items-center justify-center text-black font-semibold shadow-[0_0_10px_rgba(234,179,8,0.3)]">
          A
        </div>
      </div>
    </div>
  </nav>`
}