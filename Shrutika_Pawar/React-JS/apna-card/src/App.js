import Navbar from "./Component/Navbar";
import Card from "./Component/card";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <div className="card-container">
        <Card
          name="Riya pawar"
          role="Frontend Developer"
          college="MIT Pune"
        />

        <Card
          name="Rahul Patil"
          role="Backend Developer"
          college="PCCOE Pune"
        />

        <Card
          name="Sneha Shinde"
          role="UI/UX Designer"
          college="COEP Pune"
        />
      </div>
    </>
  );
}

export default App;