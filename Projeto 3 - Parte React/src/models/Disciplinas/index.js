import { useEffect, useState } from "react";
import Axios from "../../axios";

export default function Usuarios() {
  const [data, setData] = useState([]);
  const [materia, setMateria] = useState("");
  const [professor, setProfessor] = useState("");
  const [periodo, setPeriodo] = useState("");

  useEffect(() => {
    Axios.get("/disciplinas").then((res) => {
      setData(res.data);
    });
  }, []);

  function hanldeSubmit() {
    const lvData = { materia: materia, professor: professor, periodo: periodo };
    Axios.post("/disciplinas", {
      dsdisciplina: lvData.materia,
      professor: lvData.professor,
      periodo: lvData.periodo
    }).then((response) => {
      if (response.status === 201) {
        const lvDisciplina = {
          DS_DISCIPLINA: materia,
          NM_PROFESSOR: professor,
          DS_PERIODO: periodo
        };
        setData([...data, lvDisciplina]);
      }
    });
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        {data.length} Disciplinas Cadastradas
      </h1>
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
          Insira a disciplina:
          <div>
            <input
              style={{ marginTop: 5 }}
              type="text"
              name="disciplina"
              value={materia}
              onChange={(e) => setMateria(e.target.value)}
            />
          </div>
        </div>
        <div
          style={{
            marginBottom: 10,
            borderRadius: 9
          }}
        >
          Insira o nome do Professor:
          <div>
            <input
              style={{ marginTop: 5 }}
              type="text"
              name="prof"
              value={professor}
              onChange={(e) => setProfessor(e.target.value)}
            />
          </div>
        </div>
        <div
          style={{
            marginBottom: 10,
            borderRadius: 9
          }}
        >
          Insira o periodo:
          <div>
            <input
              style={{ marginTop: 5 }}
              type="text"
              name="periodo"
              value={periodo}
              onChange={(e) => setPeriodo(e.target.value)}
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
      <div>
        <table
          style={{
            padding: 2,
            width: "100%",
            border: "1px solid black",
            borderRadius: 9
          }}
        >
          <tbody>
            <tr style={{ border: "1px solid black" }}>
              <th style={{ border: "1px solid black" }}>Disciplina</th>
              <th style={{ border: "1px solid black" }}>Professor</th>
              <th style={{ border: "1px solid black" }}>Periodo</th>
            </tr>
            {data.map((data, key) => (
              <tr key={key} style={{ border: "1px solid black" }}>
                <td style={{ border: "1px solid black" }}>
                  {data.DS_DISCIPLINA}
                </td>
                <td style={{ border: "1px solid black" }}>
                  {data.NM_PROFESSOR}
                </td>
                <td style={{ border: "1px solid black" }}>{data.DS_PERIODO}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
