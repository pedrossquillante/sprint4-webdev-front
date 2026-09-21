"use client";
import Image from 'next/image';
import { useState } from "react";

export default function Contato() {
const [enviado, setEnviado] = useState(false);
const [enviando, setEnviando] = useState(false);
const [erro, setErro] = useState("");
const [form, setForm] = useState({
  nome: "",
  email: "",
  telefone: "",
  mensagem: "",
});

const handleChange = (e) => {
  const { name, value } = e.target;
  setForm((prev) => ({ ...prev, [name]: value }));
};

const handleSubmit = (e) => {
  e.preventDefault();
  setErro("");
  setEnviando(true);

  fetch("https://6ab06340ee9c55c910bfa50d.mockapi.io/api/sprint4-webdev-front/contatos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Falha ao enviar a mensagem. Tente novamente.");
      }
      setEnviado(true);
      setForm({ nome: "", email: "", telefone: "", mensagem: "" });
      setTimeout(() => setEnviado(false), 4000);
    })
    .catch((err) => {
      setErro(err.message || "Ocorreu um erro inesperado. Tente novamente.");
    })
    .finally(() => {
      setEnviando(false);
    });
};

  return (
    <section className="max-w-330 mx-auto px-4 pt-30 pb-32" id="contato">
      <h2 className="text-5xl font-bold tracking-[-0.02em] text-center mb-8 pb-8 relative after:content-[''] after:block after:w-[60px] after:h-[3px] after:bg-primaria after:mx-auto">
        Contato
      </h2>

      <div className="mb-16">
        <h3 className="text-[25px] flex justify-center items-center text-center font-bold">
          Deseja testar nossa funcionalidade de maneira exclusiva? Entre em
          contato conosco!
        </h3>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col justify-center gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="nome" className="flex items-center gap-2 font-bold">
            <Image
              src="/icons/iconuser.svg"
              alt="icone do usuário"
              width={18}
              height={18}
              className="filter invert-[21%] sepia-[99%] saturate-[3140%] hue-rotate-[224deg] brightness-[92%] contrast-[103%]"
            />
            Nome
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            maxLength={50}
            placeholder="Digite seu nome completo"
            value={form.nome}
            onChange={handleChange}
            required
            className="p-3 border border-borda rounded font-principal focus:outline-none focus:border-primaria focus:shadow-[0_0_0_3px_rgba(20,63,236,0.15)]"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="flex items-center gap-2 font-bold">
            <Image
              src="/icons/iconenvelope.svg"
              alt="icone de e-mail"
              width={18}
              height={18}
              className="filter invert-[21%] sepia-[99%] saturate-[3140%] hue-rotate-[224deg] brightness-[92%] contrast-[103%]"
            />
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            maxLength={35}
            placeholder="email@gmail.com"
            value={form.email}
            onChange={handleChange}
            required
            className="p-3 border border-borda rounded font-principal focus:outline-none focus:border-primaria focus:shadow-[0_0_0_3px_rgba(20,63,236,0.15)]"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="telefone" className="flex items-center gap-2 font-bold">
            <Image
              src="/icons/iconphone.svg"
              alt="icone do telefone"
              width={18}
              height={18}
              className="filter invert-[21%] sepia-[99%] saturate-[3140%] hue-rotate-[224deg] brightness-[92%] contrast-[103%]"
            />
            Telefone
          </label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            maxLength={15}
            placeholder="(99) 01234-5678"
            value={form.telefone}
            onChange={handleChange}
            className="p-3 border border-borda rounded font-principal focus:outline-none focus:border-primaria focus:shadow-[0_0_0_3px_rgba(20,63,236,0.15)]"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="mensagem" className="flex items-center gap-2 font-bold">
            Mensagem
          </label>
          <textarea
            name="mensagem"
            id="mensagem"
            maxLength={500}
            placeholder="Escreva sua mensagem aqui..."
            rows={5}
            value={form.mensagem}
            onChange={handleChange}
            required
            className="p-3 border border-borda rounded font-principal focus:outline-none focus:border-primaria focus:shadow-[0_0_0_3px_rgba(20,63,236,0.15)]"
          />
        </div>

        <button
          type="submit"
          disabled={enviando}
          className="bg-primaria text-fundo-secundaria border-none py-3.5 px-6 rounded font-principal text-base font-bold cursor-pointer mb-8 transition-opacity duration-300 hover:opacity-60 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {enviando ? "Enviando..." : "Enviar Mensagem"}
        </button>
      </form>

      {erro && (
        <p className="text-center text-red-600 font-bold mt-4">
          {erro}
        </p>
      )}

      {enviado && (
        <p className="text-center text-primaria font-bold mt-4">
          Mensagem enviada com sucesso!
        </p>
      )}
    </section>
  );
}