import React from "react";
import ReactDOM from 'react-dom/client';
import SSRProvider from 'react-bootstrap/SSRProvider';
import App from 'App';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<SSRProvider><App /></SSRProvider>);
