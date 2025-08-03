import { Terminal } from "../components/Terminal";

const Index = () => {
  return (
    <div
      style={{
        padding: "20px",
        color: "white",
        backgroundColor: "black",
        minHeight: "100vh",
      }}
    >
      <h1>Test Page</h1>
      <p>If you can see this, the basic React app is working!</p>
      <p>Now let's test the Terminal component:</p>
      <hr />
      <Terminal />
    </div>
  );
};

export default Index;
