import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Provider from './Context/ChatbotProvider';
import Chat from './Page/Chat';
import Login from './Page/Login';
import ExportPage from './Page/Export';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login }/>
          <Route exact path="/chat" component={ Chat }/>
          <Route exact path="/export" component={ ExportPage }/>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;