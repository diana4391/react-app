function App() {
  return (
    <main style={{ padding: "24px", fontFamily: "Arial, sans-serif" }}>
      <h1>My React Homework</h1>
      <p>Student: Diana</p>
      <p>This page is deployed with GitHub Pages.</p>
      
      <p style={{ marginTop: "100px", fontSize: "18px", color: "#666" }}>
        🖼️ Image will be added here
      </p>

      <br /><br />
      <button
        onClick={() => alert("Hello! React is working 🎉")}
        style={{
          padding: "10px 16px",
          border: "none",
          borderRadius: "8px",
          background: "#2563eb",
          color: "white",
          cursor: "pointer",
          fontSize: "16px"
        }}
      >
        Click Me
      </button>
    </main>
  );
}

export default App;