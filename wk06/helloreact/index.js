//Create Hello World Component
function HelloWorld() {
     return(
        <div>
            <h1> Hello World!</h1>
            <h2> Welcome to React!</h2>
            <section id="sect1">
                <p> Hi! My name is Sect1!</p>
            </section>

            <section id="sect2">
                <p> Hi Sect1, my name is Sect2!</p>
            </section>
        </div>
     );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<HelloWorld />, rootElement);

