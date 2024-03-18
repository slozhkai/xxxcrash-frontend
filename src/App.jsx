import React, { useState } from "react";
   import Header from './components/Header/Header.jsx';
   import Footer from './components/Footer/Footer.jsx';
   import Modal from './components/Modal/Modal.jsx';

function App() {
    const [modalOpen, setModalOpen] = useState(false);

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className={'container'}>
            <Header/>
            <main>
                {/* Ваш код здесь */}
                {modalOpen && (
                    <div className="modal" onClick={closeModal}>
                        <p>Модальное окно</p>
                        <button onClick={(e) => e.stopPropagation()}>Закрыть</button>
                    </div>
                )}
            </main>
            <Footer/>
        </div>
    );
}


export default App;