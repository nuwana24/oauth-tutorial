import logo from "./logo.svg";
import "./App.css";

function App() {
    const login = async () => {
        const res = new Promise(window.FB.login);
        res.then((res) => {
            console.log(res);
        });
        return true;
    };
    return (
        <div className="App">
            <button onClick={login}>Login to Facebook</button>
        </div>
    );
}

export default App;
