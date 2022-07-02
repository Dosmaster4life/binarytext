import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';





function App() {
  const [data, setData] = React.useState(null);
    const [page, setPage] = React.useState(2);
    const [text, setText] = React.useState("");
  React.useEffect(() => {
      if(page == 0) {
          console.log("page0")
          fetch("/api/text="+ text
          )
              .then((res) => res.json())
              .then((data) => setData(data.message));
      }else if (page == 1) {
          console.log("page1")
          fetch("/api2/binary="+ text
          )
              .then((res) => res.json())
              .then((data) => {
                  setData(data.message)

              });
      }

  }, [text]);
    function getPage() {
        switch (page) {
            case 0:
                return txttoBinary()
            case 1:
                return binaryToText()
            default:
                return homePage()

        }
    }
    function homePage() {
        return <>
            <h1>
                Click a  button to get started!
            </h1>
        </>
    }
    function binaryToText() { // convert binary to text through backend when textbox changes value
        return <>
            <label>
                Enter binary to get text output
            </label>
            <input onChange={e => setText(e.target.value)}/>
            <h1>{data}</h1>
        </>;
    }
    function txttoBinary() { // convert text to binary through backend when textbox changes value
        return <>
            <label>
                Enter a string to get the binary output
            </label>
            <input onChange={e => setText(e.target.value)}/>
            <h1>{data}</h1>
        </>;

    }
  return (
      <div className="App">
          <header className="App-header">
            <row><button className="btn-outline-primary" onClick={() => {
                setPage(0)
                setData("")
                setText("")
            }

            }>Text to Binary</button>
                <button className="btn-outline-primary"onClick={() => {
                    setPage(1)
                    setData("")
                    setText("")
                }}>Binary to Text</button>
                </row>
              {getPage()}

          </header>
      </div>
  );
}
export default App;
