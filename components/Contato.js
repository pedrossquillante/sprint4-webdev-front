"use client";
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
  setEnviado(false);
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
    })
    .catch((err) => {
      setErro(err.message || "Ocorreu um erro inesperado. Tente novamente.");
    })
    .finally(() => {
      setEnviando(false);
    });
};

const campoClasses =
  "w-full min-h-11 px-4 py-3 rounded-xl border border-borda-campo bg-fundo text-texto placeholder:text-texto-suave focus:border-destaque motion-safe:transition-colors"

const rotuloClasses =
  "flex items-center gap-2 font-bold"

  return (
    <section className="max-w-330 mx-auto px-4 py-16 lg:py-24 scroll-mt-20 lg:scroll-mt-24" id="contato">
      <h2 className="titulo-secao">
        Contato
      </h2>
      <p className="text-xl lg:text-2xl font-bold text-center max-w-2xl mx-auto mb-10">Deseja testar nossa funcionalidade de maneira exclusiva? Entre em contato conosco!</p>
      
      <form onSubmit={handleSubmit} className="card max-w-2xl mx-auto flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="nome" className={rotuloClasses}>
            <span aria-hidden="true" className="icone size-4.5 mask-[url(/icons/iconuser.svg)]"/>
            Nome Completo
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
            className={campoClasses}
            autoComplete="name"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className={rotuloClasses}>
            <span aria-hidden="true" className="icone size-4.5 mask-[url(/icons/iconenvelope.svg)]"/>
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            maxLength={254}
            placeholder="email@gmail.com"
            value={form.email}
            onChange={handleChange}
            required
            className={campoClasses}
            autoComplete="email"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="telefone" className={rotuloClasses}>
            <span aria-hidden="true" className="icone size-4.5 mask-[url(/icons/iconphone.svg)]"/>
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
            className={campoClasses}
            autoComplete="tel"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="mensagem" className={rotuloClasses}>
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
            className={campoClasses}
          />
        </div>

        <button
          type="submit"
          disabled={enviando}
          className="w-full min-h-11 inline-flex items-center justify-center px-8 rounded-full font-bold bg-primaria text-sobre-primaria hover:bg-primaria-hover focus-visible:bg-primaria-hover motion-safe:transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {enviando ? "Enviando..." : "Enviar Mensagem"}
        </button>
      </form>

      <div aria-live="polite" className="max-w-2xl mx-auto mt-6 text-center font-bold">
      {erro && (
        <p className="text-erro">
          {erro}
        </p>
      )}

      {enviado && (
        <p className="text-destaque">
          Mensagem enviada com sucesso!
        </p>
      )}
      </div>

    </section>
  );
}