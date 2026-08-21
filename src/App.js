function App() {
  return (
    <main style={{ padding: "24px", fontFamily: "Arial, sans-serif" }}>
      <h1>My React Homework</h1>
      <p>Student: Diana</p>
      <p>This page is deployed with GitHub Pages.</p>

      <img
        src="https://raw.githubusercontent.com/diana4391/react-app/main/public/retra-rise.jpg"
        alt="My work"
        style={{ width: "100%", borderRadius: "12px", marginTop: "100px" }}
      />

      <br /><br />
      <button
        onClick={() => alert("Hello! React is working 🎉")}
        style={{
          padding: "10px 16px",
          border: "none",
          borderRadius: "8px",
          background: "#2563eb",
          color: "white",
          cursor: "pointer"
        }}
      >
        Click Me
      </button>
    </main>
  );
}

export default App;