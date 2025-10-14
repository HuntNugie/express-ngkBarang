export default function login(){
    return `
       <div class="w-full max-w-sm bg-zinc-950 border border-yellow-700/40 rounded-2xl shadow-[0_0_30px_-10px_rgba(234,179,8,0.4)] p-8 backdrop-blur-sm">
    <h1 class="text-2xl font-bold text-yellow-400 text-center mb-1 tracking-wide">Login Admin</h1>
    <p class="text-zinc-400 text-center mb-8 text-sm">ngkBarang Management</p>

    <form class="space-y-6">
      <div>
        <label for="username" class="block text-sm font-medium text-zinc-300 mb-2">Username</label>
        <input type="text" id="username" name="username" placeholder="Masukkan username"
               class="w-full px-4 py-2 bg-zinc-900 border border-yellow-700/30 rounded-lg text-zinc-200 placeholder-zinc-500 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition">
      </div>

      <div>
        <label for="password" class="block text-sm font-medium text-zinc-300 mb-2">Password</label>
        <input type="password" id="password" name="password" placeholder="Masukkan password"
               class="w-full px-4 py-2 bg-zinc-900 border border-yellow-700/30 rounded-lg text-zinc-200 placeholder-zinc-500 focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition">
      </div>

      <button type="submit"
              class="w-full py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold rounded-lg shadow-lg hover:from-yellow-400 hover:to-yellow-500 transition-transform transform hover:scale-[1.02]">
        Login
      </button>
    </form>

    <div class="mt-6 text-center">
      <p class="text-sm text-zinc-400">
        Belum punya akun?
        <a href="#"
           class="text-yellow-400 font-medium hover:text-yellow-300 transition underline underline-offset-2">
          Daftar Sekarang
        </a>
      </p>
    </div>

    <p class="mt-6 text-center text-xs text-zinc-500">
      &copy; 2025 <span class="text-yellow-400 font-semibold">ngkBarang</span>. All rights reserved.
    </p>
  </div>`
}