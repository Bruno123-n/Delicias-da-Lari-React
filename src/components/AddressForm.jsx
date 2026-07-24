import { useState } from "react";
import "./AddressForm.css";

function AddressForm({ onEnderecoChange }) {
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [numero, setNumero] = useState("");
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  // Função que consulta a API do ViaCEP
  const handleCepChange = async (e) => {
    const valorDigitado = e.target.value;
    setCep(valorDigitado);
    setErro("");

    // Limpa para deixar apenas números
    const cepLimpo = valorDigitado.replace(/\D/g, "");

    // A API só deve ser chamada se o CEP tiver exatamente 8 dígitos
    if (cepLimpo.length === 8) {
      setLoading(true);
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
        const data = await response.json();

        if (data.erro) {
          setErro("CEP não encontrado.");
        } else {
          setLogradouro(data.logradouro);
          setBairro(data.bairro);
          setCidade(`${data.localidade} - ${data.uf}`);
          
          // Notifica o componente pai sobre os dados do endereço
          if (onEnderecoChange) {
            onEnderecoChange({
              cep: cepLimpo,
              rua: data.logradouro,
              bairro: data.bairro,
              cidade: `${data.localidade} - ${data.uf}`,
            });
          }
        }
      } catch (err) {
        console.error(err);
        setErro("Erro ao buscar CEP. Tente novamente.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="address-form">
      <h3>📍 Endereço de Entrega</h3>
      
      <div className="input-group">
        <label>CEP:</label>
        <input
          type="text"
          placeholder="Ex: 01001-000"
          value={cep}
          maxLength={9}
          onChange={handleCepChange}
        />
        {loading && <span className="loading">Buscando...</span>}
      </div>

      {erro && <p className="erro-cep">{erro}</p>}

      <div className="input-group">
        <label>Rua / Logradouro:</label>
        <input type="text" value={logradouro} readOnly placeholder="Preenchido via CEP" />
      </div>

      <div className="input-group-row">
        <div className="input-group">
          <label>Bairro:</label>
          <input type="text" value={bairro} readOnly placeholder="Preenchido via CEP" />
        </div>

        <div className="input-group">
          <label>Número:</label>
          <input
            type="text"
            placeholder="Nº"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
          />
        </div>
      </div>

      <div className="input-group">
        <label>Cidade / UF:</label>
        <input type="text" value={cidade} readOnly placeholder="Preenchido via CEP" />
      </div>
    </div>
  );
}

export default AddressForm;