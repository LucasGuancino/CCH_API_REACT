import { useEffect, useState } from "react";
import Axios from "../../axios";

export default function Biblioteca() {
  const [data, setData] = useState([]);
  const [livro, setLivro] = useState("");
  const [autor, setAutor] = useState("");
  const [ano, setAno] = useState("");

  useEffect(() => {
    Axios.get("/biblioteca").then((res) => {
      setData(res.data);
    });
  }, []);

  function handleSubmit() {
    const lvData = { livro: livro, autor: autor, ano: ano };
    Axios.post("/biblioteca", {
      dsbiblioteca: lvData.livro,
      autor: lvData.autor,
      ano: lvData.ano
    }).then((response) => {
      if (response.status === 201) {
        const lvBiblioteca = {
          DS_BIBLIOTECA: livro,
          DS_AUTOR: autor,
          NR_ANO: ano
        };
        setData([...data, lvBiblioteca]);
      }
    });
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{data.length} Livros Cadastrados</h1>
      <div
        style={{
          marginBottom: 10
        }}
      >
        <div
          style={{
            marginBottom: 10,
            borderRadius: 9
          }}
        >
          Insira um livro:
          <div>
            <input
              style={{ marginTop: 5 }}
              type="text"
              name="livros"
              value={livro}
              onChange={(e) => setLivro(e.target.value)}
            />
          </div>
        </div>
        <div
          style={{
            marginBottom: 10,
            borderRadius: 9
          }}
        >
          Insira o(a) Autor(a):
          <div>
            <input
              style={{ marginTop: 5 }}
              type="text"
              name="autores"
              value={autor}
              onChange={(e) => setAutor(e.target.value)}
            />
          </div>
        </div>
        <div
          style={{
            marginBottom: 10,
            borderRadius: 9
          }}
        >
          Insira o ano de publicação:
          <div>
            <input
              style={{ scrollMarginTop: 5 }}
              type="text"
              name="anoslancamento"
              value={ano}
              onChange={(e) => setAno(e.target.value)}
            />
          </div>
        </div>
        <button
          style={{ height: 40, width: "100%", marginTop: 10 }}
          onClick={() => handleSubmit()}
        >
          Adicionar Livro
        </button>
      </div>
      <div
        style={{
          padding: 2,
          height: 430,
          width: "100%",
          overflowY: "scroll",
          overflowX: "hidden",
          border: "1px solid black",
          borderRadius: 9
        }}
      >
        {data.map((data, key) => (
          <ul key={key}>
            <li>
              <b>Livro:</b> {data.DS_BIBLIOTECA}
            </li>
            <ul>
              <li>
                <b>Autor(a):</b> {data.DS_AUTOR}
              </li>
              <li>
                <b>Ano de publicação:</b> {data.NR_ANO}
              </li>
            </ul>
          </ul>
        ))}
      </div>
    </div>
  );
}
