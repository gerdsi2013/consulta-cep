import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import  {GlobalStyles} from "./styles/GlobalStyles/index"
import { ThemeProvider } from 'styled-components';
import  ligth from '../src/styles/theme/ligth'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <ThemeProvider theme={ligth}>

     <React.StrictMode>
     <App /> 
    <GlobalStyles/>
     </React.StrictMode>


  </ThemeProvider>,





);

