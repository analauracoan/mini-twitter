import { App } from "../layouts/App";

export const Home = () => (
  <App>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 via-purple-50 to-white px-4 font-sans">
      <div className="text-center p-8 rounded-3xl shadow-2xl bg-white border border-purple-100 max-w-xl">
        <h1 className="text-4xl md:text-4xl font-extrabold text-sky-600 mb-4 tracking-tight drop-shadow-sm">
          Bem-vindo(a) ao Mini Twitter
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Uma rede social feita com <span className="text-purple-500 font-semibold">React</span>, <span className="text-pink-500 font-semibold">Firebase</span> e <span className="text-blue-500 font-semibold">Tailwind</span>
        </p>
        <p className="mt-6 text-sm text-gray-400">
          Projeto criado durante o desafio <strong className="text-purple-500">#7DaysOfCode</strong> da Alura 🚀
        </p>
      </div>
    </div>
  </App>
);
