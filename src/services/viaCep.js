/**
 * Função responsável por buscar o CEP na API do ViaCEP
 * @param {string} cep 
 * @returns {Promise<{rua: string, bairro: string, cidade: string, uf: string}>}
 */
export async function buscarEnderecoPorCep(cep) {
  // Limpa o CEP mantendo apenas os números
  const cepLimpo = String(cep).replace(/\D/g, '');

  // Validação dos 8 dígitos obrigatórios
  if (cepLimpo.length !== 8) {
    throw new Error('CEP inválido. Deve conter 8 dígitos.');
  }

  const resposta = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
  
  if (!resposta.ok) {
    throw new Error('Erro ao conectar com o serviço de CEP.');
  }

  const dados = await resposta.json();

  // O ViaCEP retorna { erro: false } ou { erro: "true" } quando o CEP não existe
  if (dados.erro) {
    throw new Error('CEP não encontrado.');
  }

  // Retorna os dados já mapeados para o formulário
  return {
    rua: dados.logradouro || '',
    bairro: dados.bairro || '',
    cidade: dados.localidade || '',
    uf: dados.uf || '',
  };
}

export default buscarEnderecoPorCep;