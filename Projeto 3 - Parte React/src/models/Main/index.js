export default function Main() {
  return (
    <div
      style={{
        padding: 2,
        border: "1px solid black",
        borderRadius: 9
      }}
    >
      <h1 style={{ textAlign: "center" }}> MENU PRINCIPAL</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignitems: "center",
          marginBottom: 10
        }}
      >
        <a href="/usuarios">
          <button
            style={{
              height: 60,
              width: 100,
              borderRadius: 10,
              borderWidth: 2.5
            }}
          >
            Usuarios
          </button>
        </a>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignitems: "center",
          marginBottom: 10
        }}
      >
        <a href="/biblioteca">
          <button
            style={{
              height: 60,
              width: 100,
              borderRadius: 10,
              borderWidth: 2.5
            }}
          >
            Biblioteca
          </button>
        </a>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignitems: "center",
          marginBottom: 10
        }}
      >
        <a href="/disciplinas">
          <button
            style={{
              height: 60,
              width: 100,
              borderRadius: 10,
              borderWidth: 2.5
            }}
          >
            Disciplinas
          </button>
        </a>
      </div>
    </div>
  );
}
