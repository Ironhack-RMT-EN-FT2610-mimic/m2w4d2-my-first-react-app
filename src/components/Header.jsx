const headerStyles = {
  backgroundColor: "lightgreen",
  margin: "20px",
  padding: "10px",
  borderRadius: "5px"
}

function Header() {

  return (
    <header style={headerStyles}>
      <h1>Welcome to my project portfolio!</h1>
      <p style={{ color: "red" }}>I will showcase here all my projects</p>
    </header>
  );
}

export default Header