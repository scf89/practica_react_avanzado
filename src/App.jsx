import useCurrentTime from "./customHooks/useCurrentTime";
import Timer from "./components/Timer/Timer";
import Calculator from "./components/Calculator/Calculator";

const App = () => {
  const currentTime = useCurrentTime();

  return (
    <div>
      <h1>Aplicación con Reloj y Calculadora</h1>
      <Timer time={currentTime} />
      <Calculator />
    </div>
  );
};

export default App;
