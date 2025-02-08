import useWindowSize from "./useWindowSize";
import ShowAvatar from "./ShowAvatar";

function App() {
  const { width, height } = useWindowSize();

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Responsive Avatar</h2>
      <p>Width of the screen: {width}px</p>
      <p>Height of the screen: {height}px</p>
      <ShowAvatar size={width} />
    </div>
  );
}

export default App;
