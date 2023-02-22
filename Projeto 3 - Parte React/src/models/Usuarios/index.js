import { useEffect, useState } from "react";
import Axios from "../../axios";

export default function Usuarios() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [raluno, setRa] = useState("");
  const [profissao, setProfissao] = useState("");

  useEffect(() => {
    Axios.get("/usuarios").then((response) => {
      setData(response.data);
    });
  }, []);

  function hanldeSubmit() {
    const lvData = { name: name, ra: raluno, profissao: profissao };
    Axios.post("/usuarios", {
      dsusuarios: lvData.name,
      ra: lvData.ra,
      profissao: lvData.profissao
    }).then((response) => {
      if (response.status === 201) {
        const lvUsuario = {
          DS_USUARIOS: name,
          DS_RA: raluno,
          DS_PROFISSAO: profissao
        };
        setData([...data, lvUsuario]);
      }
    });
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{data.length} Usuarios</h1>
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
          Insira um Nome:
          <div>
            <input
              style={{ marginTop: 5 }}
              type="text"
              name="nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div
          style={{
            marginBottom: 10,
            borderRadius: 9
          }}
        >
          Insira o RA:
          <div>
            <input
              style={{ marginTop: 5 }}
              type="number"
              name="ra"
              value={raluno}
              onChange={(e) => setRa(e.target.value)}
            />
          </div>
        </div>
        <div
          style={{
            marginBottom: 10,
            borderRadius: 9
          }}
        >
          Insira a Profissão:
          <div>
            <input
              style={{ marginTop: 5 }}
              type="text"
              name="prof"
              value={profissao}
              onChange={(e) => setProfissao(e.target.value)}
            />
          </div>
        </div>
        <button
          style={{ height: 40, width: "100%", marginTop: 10 }}
          onClick={() => hanldeSubmit()}
        >
          Adicionar
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
          <div
            key={key}
            style={{
              border: "1px solid black",
              marginBottom: 10,
              borderRadius: 9,
              padding: 10,
              textAlign: "center"
            }}
          >
            <div>
              <b>Nome:</b> {data.DS_USUARIOS}
            </div>
            <div>
              <b>R.A:</b> {data.DS_RA}
            </div>
            <div>
              <b>Profissão:</b> {data.DS_PROFISSAO}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
