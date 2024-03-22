const axios = require("axios");
const baseURL = "http://localhost:3000";

describe("Teste e2e das rotas de Oficinas", () => {
  let token; // Para armazenar o token de autenticação
  let firstOficinaId; // Para armazenar o ID da primeira oficina

  // Realiza a autenticação antes de executar os testes
  beforeAll(async () => {
    const response = await axios.post(`${baseURL}/login`, {
      email: "johndoe@ong.teste.com",
      senha: "123456",
    });
    token = response.data.token; // Ajuste isso conforme o caminho do token na resposta

    // Obtem a lista de oficinas e armazena o ID da primeira para uso nos testes
    const oficinasResponse = await axios.get(`${baseURL}/oficinas`, {
      headers: { Authorization: `Bearer ${token}` }, // Usa o token de autenticação
    });

    if (oficinasResponse.data.oficinas.length > 0) {
      firstOficinaId = oficinasResponse.data.oficinas[0].id;
    }
  });

  it("Deve retornar um array com todas as oficinas", async () => {
    const response = await axios.get(`${baseURL}/oficinas`, {
      headers: { Authorization: `Bearer ${token}` }, // Usa o token de autenticação
    });

    // precisa ser um objeto com oficinas, a qual é um array
    expect(response.data).toHaveProperty("oficinas");
    expect(response.data.oficinas).toBeInstanceOf(Array);

    // array precisa ter pelo menos um item
    expect(response.data.oficinas.length).toBeGreaterThan(0);

    // cada item do array precisa ter um id
    response.data.oficinas.forEach((oficina) => {
      expect(oficina).toHaveProperty("id");
    });

    // status code precisa ser 200
    expect(response.status).toBe(200);
  });

  it("Deve retornar uma oficina específica", async () => {
    const response = await axios.get(`${baseURL}/oficinas/${firstOficinaId}`, {
      headers: { Authorization: `Bearer ${token}` }, // Usa o token de autenticação
    });

    // precisa ser um objeto com oficina
    expect(response.data).toHaveProperty("oficina");

    // precisa ter um id
    expect(response.data.oficina).toHaveProperty("id");

    // status code precisa ser 200
    expect(response.status).toBe(200);
  });
});