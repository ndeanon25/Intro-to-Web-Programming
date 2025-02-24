function App(){
    return (
        <div>
            <header>
                <h1> Welcome to our Business</h1>
                <p> Your success is our mission</p>
            </header>

            <section>
                <h2> Our Services</h2>
                <ul>
                    <li> Consulting</li>
                    <li> Development</li>
                    <li> Training</li>
                </ul>
            </section>

            <section>
                <h2> Contact Us</h2>
                <p> Email: support@us.com</p>
                <p> Phone: 123-456-7890</p>
            </section>

            <footer>
                <p> &copy; 2025 The Biz. All rights reserved. </p>
            </footer>
            
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);