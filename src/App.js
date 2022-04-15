import { ThemeProvider, createGlobalStyle } from 'styled-components';
// import { SplitScreenExample } from './pages';
// import { RegularListExample } from './pages';
import { ModalExample } from './pages';

import './App.css';

const theme = {
  dark: {
    primary: '#000',
    text: '#fff'
  },
  light: {
    primary: '#fff',
    text: '#000'
  }
};

const GlobalStyle = createGlobalStyle`
  button {
    font-family: 'Roboto';
  }
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* <SplitScreenExample /> */}
      {/* <RegularListExample /> */}
      <ModalExample />
    </ThemeProvider>
  );
}

export default App;
