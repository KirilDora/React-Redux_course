import ReactDom from 'react-dom';
import reportWebVitals from './reportWebVitals';
import store from './redux/state.js';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
//use bind to connect func with executor
//we use bind as we don`t call func now
let rerenderEntireTree = (state) => {
  ReactDom.render(
    <BrowserRouter>
      <App state={state} dispatch={store.dispatch.bind(store)}/>
    </BrowserRouter>,
    document.getElementById('root')
  );
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
