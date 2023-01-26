import "./App.css";
import html2canvas from "html2canvas";
function App() {
  const test = () => {
    html2canvas(document.body).then((canvas) => {
      const base64image = canvas.toDataURL("image/png");
      console.log(base64image);
    });
  };

  return (
    <div className="App">
      <button onClick={test}>Button</button>
    </div>
  );
}

export default App;
