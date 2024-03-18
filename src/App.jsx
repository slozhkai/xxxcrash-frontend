import React, {useState} from "react";
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import './font.css'

function App() {
    const [modalOpen, setModalOpen] = useState(false);

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className={'container'}>
            <Header/>
            <main>
            </main>
            <Footer/>
        </div>
    );
}


export default App;