import "./App.css";
import Routes from "./routes";
import { AuthProvider } from "./auth-context";

const App = () => {
  return (
    <div className="min-w-full">
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </div>
  );
};

export default App;
