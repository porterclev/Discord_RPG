import "./App.css";
import html2canvas from "html2canvas";
function App() {
  /* 
    Takes screenshot of html body and prints 64 bit url in browser console
  */
  const test = () => {
    html2canvas(document.body).then((canvas) => {
      const base64image = canvas.toDataURL("image/png");
      console.log(base64image);
    });
  };

  return (
    <div className="App">
      {/* Button triggers screenshot, output is sent to browser console */}
      <button onClick={test}>Button</button>
    </div>
  );
}

export default App;
