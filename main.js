console.log(React);
console.log(ReactDOM);

function App() {
    const st0 = { backgroundColor: '#23272F',color: 'white',padding:'20px' };
    const st1 = { color: "white", backgroundColor: "#343A46",border:'1px solid 343A46',width:'100%',borderRadius:'10px',padding:'20px' };
    return (
        <div style={st0}>
            <h1>Quick Start</h1>
            <p>
                Welcome to the React documentation! This page will give you an
                introduction to the 80% of React concepts that you will use on a daily
                basis.
            </p>
            <div className="layer1" style={st1}>

                <h3>You will learn</h3>
                <li>How to create and nest components</li>
                <li>How to add markup and styles</li>
                <li>How to display data</li>
                <li>How to render conditions and lists</li>
                <li>How to respond to events and update the screen</li>
                <li>How to share data between components</li>
            </div>
        </div>
    );
}

ReactDOM.createRoot(document.querySelector("#root")).render(<App />);





