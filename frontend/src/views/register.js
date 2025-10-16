export default function register(){
    return `
    <!-- REGISTER PAGE -->
<div class="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-zinc-900 to-black text-zinc-200">
  <div class="bg-zinc-950 border border-yellow-700/30 rounded-2xl shadow-[0_0_30px_-10px_rgba(234,179,8,0.3)] p-8 w-full max-w-md text-center">
    
    <h2 class="text-2xl font-bold text-yellow-400 mb-1">Daftar Akun</h2>
    <p class="text-sm text-zinc-400 mb-8">ngkBarang Management</p>

    <form id="registerForm" class="space-y-5 text-left" method="POST">
      <!-- Username -->
      <div>
        <label class="block mb-2 text-sm font-medium text-zinc-300">Username</label>
        <input
          type="text"
          name="username"
          required
          placeholder="Masukkan username"
          class="w-full px-4 py-2 bg-zinc-900 border border-yellow-700/30 rounded-lg text-zinc-100 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
        />
      </div>

      <!-- Password -->
      <div>
        <label class="block mb-2 text-sm font-medium text-zinc-300">Password</label>
        <input
          type="password"
          name="password"
          required
          placeholder="Masukkan password"
          class="w-full px-4 py-2 bg-zinc-900 border border-yellow-700/30 rounded-lg text-zinc-100 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
        />
      </div>

      <!-- Konfirmasi Password -->
      <div>
        <label class="block mb-2 text-sm font-medium text-zinc-300">Konfirmasi Password</label>
        <input
          type="password"
          name="confirmPassword"
          required
          placeholder="Ulangi password"
          class="w-full px-4 py-2 bg-zinc-900 border border-yellow-700/30 rounded-lg text-zinc-100 focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
        />
      </div>

      <!-- Tombol Daftar -->
      <button
        type="submit"
        class="register w-full py-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded-lg shadow-md transition-all duration-200"
      >
        Daftar Sekarang
      </button>
    </form>

    <p class="mt-6 text-sm text-zinc-400">
      Sudah punya akun?
      <a href="/login" class="link-login text-yellow-400 hover:text-yellow-300 font-medium">Login di sini</a>
    </p>

    <p class="text-xs text-zinc-600 mt-6">© 2025 <span class="text-yellow-400 font-semibold">ngkBarang</span>. All rights reserved.</p>
  </div>
</div>
`
}