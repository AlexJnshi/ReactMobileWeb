import React from 'react'
import { HashRouter } from 'react-router-dom'
import IndexRoute from './router'

function App() {
    return (
        <HashRouter>
                <IndexRoute />
        </HashRouter>
    );
}

export default App;
