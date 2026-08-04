import { useState } from "react";
import { buscarEnderecoPorCep } from "../services/viaCep";
import "./AddressForm.css";

export default function AddressForm({ endereco, setEndereco }) {
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  if (!endereco) {
    return null;
  }

  const handleCepBlur = async (e) => {
    const cep = e.target.value;
    if (!cep) return;

    try {
      setLoading(true);
      setErro("");

      // 1. Chama a service externa do ViaCEP
      const dados = await buscarEnderecoPorCep(cep);

      // 2. Atualiza o estado do endereço
      setEndereco((prev) => ({
        ...prev,
        rua: dados.rua,
        bairro: dados.bairro,
        cidade: dados.cidade,
        uf: dados.uf,
      }));
    } catch (err) {
      setErro(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEndereco((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="address-form">
      <h3>📍 Endereço de Entrega</h3>

      <div className="input-group">
        <label htmlFor="cep">CEP:</label>
        <input
          type="text"
          id="cep"
          name="cep"
          placeholder="Ex: 01001-000"
          value={endereco.cep}
          onChange={handleChange}
          onBlur={handleCepBlur}
        />
        {loading && <span className="loading">Buscando CEP... ⏳</span>}
        {erro && <span className="erro-cep">{erro}</span>}
      </div>

      <div className="input-group">
        <label htmlFor="rua">Rua / Logradouro:</label>
        <input
          type="text"
          id="rua"
          name="rua"
          placeholder="Preenchido via CEP"
          value={endereco.rua || ""}
          onChange={handleChange}
          readOnly
        />
      </div>

      <div className="input-group-row">
        <div className="input-group">
          <label htmlFor="bairro">Bairro:</label>
          <input
            type="text"
            id="bairro"
            name="bairro"
            placeholder="Preenchido via CEP"
            value={endereco.bairro || ""}
            onChange={handleChange}
            readOnly
          />
        </div>

        <div className="input-group">
          <label htmlFor="numero">Número:</label>
          <input
            type="text"
            id="numero"
            name="numero"
            placeholder="Nº"
            value={endereco.numero || ""}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="input-group">
        <label htmlFor="cidade">Cidade / UF:</label>
        <input
          type="text"
          id="cidade"
          name="cidade"
          placeholder="Preenchido via CEP"
          value={
            endereco.cidade ? `${endereco.cidade} / ${endereco.uf}` : ""
          }
          readOnly
        />
      </div>
    </div>
  );
}