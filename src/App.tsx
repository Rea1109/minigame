import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Baseball from './components/baseball/Baseball';
import EndTalk from './components/endTalk/EndTalk';
import Main from './components/main/Main';
import Header from './components/Header';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/baseball" element={<Baseball />} />
                <Route path="/endTalk" element={<EndTalk />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
