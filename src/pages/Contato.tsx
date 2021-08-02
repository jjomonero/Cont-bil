export default function Contato(props) {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "12rem 0 6rem",
        textAlign: "center",
      }}
    >
      <div>
        <h1 style={{ color: "#366", fontSize: "40px" }}>Contato</h1>
        <p style={{ color: "#666" }}>Preencha os campos abaixo.</p>
      </div>

      <div
        style={{
          color: "#ccc",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <input
          style={{
            padding: "10px",
            width: "20rem",
          }}
          type="text"
          placeholder="Nome"
        />
        <input
          style={{
            padding: "10px",
            width: "20rem",
          }}
          type="email"
          placeholder="Email"
          id="email"
        />
        <input
          style={{
            padding: "10px",
            width: "20rem",
          }}
          type="tel"
          placeholder="Telefone"
          id="tel"
        />

        <textarea
          cols="79"
          rows="2"
          placeholder="Mensagem"
          style={{
            padding: "10px",
            width: "20rem",
          }}
        />

        <input
          style={{
            padding: "10px",
            width: "10rem",
            textAlign: "center",
            marginTop: "10px",
            border: "2px solid #366",
            color: "#366",
            fontWeight: "bolder",
            cursor: "pointer",
          }}
          type="button"
          value="Enviar"
        />
      </div>
    </div>
  );
}
