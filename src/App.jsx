import { useState } from "react";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="text-white bg-gradient-to-br from-[#0f0a1f] via-[#140d2b] to-black">

      {/* HERO */}
      <section className="min-h-screen flex items-center px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">
          
          <div>
            <h1 className="text-6xl font-bold leading-tight">
              Martina <br/>
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(168,85,247,0.6)]">
                Fernandes
              </span>
            </h1>

            <p className="mt-6 text-zinc-400 text-lg">
              Onde criatividade encontra tecnologia.
            </p>

            <div className="flex gap-4 mt-8">
              <a href="#projetos" className="px-6 py-3 rounded-xl bg-black border border-purple-500 text-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] transition">
                Projetos
              </a>
              <a href="#sobre" className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-purple-400 transition">
                Sobre Mim
              </a>
            </div>
          </div>

          <div className="relative p-[2px] rounded-3xl bg-gradient-to-r from-purple-500 to-pink-500">
            <div className="rounded-3xl overflow-hidden bg-black">
              <img src="https://via.placeholder.com/500x600" className="w-full"/>
            </div>
          </div>

        </div>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-12">
            Projetos
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div onClick={()=>setOpen(true)} className="cursor-pointer group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-purple-400 transition">
              <img src="https://via.placeholder.com/800x500" className="group-hover:scale-105 transition duration-500"/>
              <div className="p-6">
                <h3 className="text-xl font-semibold group-hover:text-purple-400 transition">Coleção Luas</h3>
                <p className="text-zinc-400 mt-2 text-sm">4 imagens • Motion & Design</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-zinc-900 rounded-2xl p-8 max-w-3xl w-full relative">
            <button onClick={()=>setOpen(false)} className="absolute top-4 right-4 text-zinc-400">✕</button>
            <img src="https://via.placeholder.com/1000x600"/>
          </div>
        </div>
      )}

      {/* SOBRE */}
      <section id="sobre" className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-12">
            Sobre
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4">Minha História</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Designer apaixonada por transformar ideias em experiências visuais memoráveis.
              </p>
            </div>

            <div className="space-y-6">
              <div className="border-l-2 border-purple-500 pl-6">
                <p className="text-purple-400 text-sm">2023 - Presente</p>
                <h4 className="font-semibold">Designer & Motion</h4>
              </div>
              <div className="border-l-2 border-purple-500 pl-6">
                <p className="text-purple-400 text-sm">2021 - 2023</p>
                <h4 className="font-semibold">Designer Júnior</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FERRAMENTAS */}
      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-12">
            Ferramentas
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {["Photoshop","Figma","Freepik"].map((tool)=> (
              <div key={tool} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition">
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCROLL TOP */}
      <button onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} 
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-purple-600 hover:bg-purple-500 shadow-lg">
        ↑
      </button>

    </div>
  )
}
