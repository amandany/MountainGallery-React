import Main from "./components/pages/main";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Service from "./components/service";

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" component={Main}
                           exact
                    />
                    <Route path="/:id"
                           render={({match}) => {
                               const {id} = match.params;
                               return <Service id={id}/>
                           }}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
