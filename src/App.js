import Routes from "./routes/Routes";
import DemoContext from "./context/Provider";

export default function App() {
  return (
    <div>
      <DemoContext>
        <Routes />
      </DemoContext>
    </div>
  );
}
