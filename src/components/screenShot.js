import html2canvas from "html2canvas";

const ScreenShot = () => {
  // const saveAs = (blob, fileName) => {
  //   var elem = window.document.createElement("a");
  //   elem.href = blob;
  //   elem.download = fileName;
  //   elem.style = "display:none;";
  //   (document.body || document.documentElement).appendChild(elem);
  //   if (typeof elem.click === "function") {
  //     elem.click();
  //   } else {
  //     elem.target = "_blank";
  //     elem.dispatchEvent(
  //       new MouseEvent("click", {
  //         view: window,
  //         bubbles: true,
  //         cancelable: true,
  //       })
  //     );
  //   }
  //   URL.revokeObjectURL(elem.href);
  //   elem.remove();
  // };

  // const onCapture = (id) => {
  //   htmlToImage.toPng(document.getElementById(id)).then(function (dataUrl) {
  //     saveAs(dataUrl, "my-node.png");
  //   });
  // };

  // return (
  //   <div>
  //     <button id="1" onClick={onCapture(1)}>
  //       hi
  //     </button>
  //   </div>
  // );

  return <></>;
};

export default ScreenShot;
