"use client";
import Image from 'next/image';
import { useState } from "react";

export default function Contato() {
  const [enviado, setEnviado] = useState(false);
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
    // Aqui entraria a chamada real de envio (API, e-mail etc.)
    setEnviado(true);
    setForm({ nome: "", email: "", telefone: "", mensagem: "" });
    setTimeout(() => setEnviado(false), 4000);
  };
return (
    <section className="container" id="contato">
      <h2>Contato</h2>
      <div className="texto-contato">
        <h3>
          Deseja testar nossa funcionalidade de maneira exclusiva? Entre em
          contato conosco!
        </h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="nome">
            <Image
              src="/icons/iconuser.svg"
              alt="icone do usuário"
              className="icone-campo icone-azul"
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
          />
        </div>

        <div className="campo">
          <label htmlFor="email">
            <Image
              src="/icons/iconenvelope.svg"
              alt="icone de e-mail"
              className="icone-campo icone-azul"
            />
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            maxLength={35}
            placeholder="email@hotmail.com"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div className="campo">
          <label htmlFor="telefone">
            <Image
              src="/icons/iconphone.svg"
              alt="icone do telefone"
              className="icone-campo icone-azul"
            />
            Telefone
          </label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            maxLength={12}
            placeholder="(99) 01234-5678"
            value={form.telefone}
            onChange={handleChange}
          />
        </div>

        <div className="campo">
          <label htmlFor="mensagem">Mensagem</label>
          <textarea
            name="mensagem"
            id="mensagem"
            maxLength={500}
            placeholder="Escreva sua mensagem aqui..."
            rows={5}
            value={form.mensagem}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Enviar Mensagem</button>
      </form>
      {enviado && (
        <p id="mensagemSucesso" className="mensagem-sucesso">
          Mensagem enviada com sucesso!
        </p>
      )}
    </section>
  );
}