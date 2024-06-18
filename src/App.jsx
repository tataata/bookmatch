import { Route, Switch } from 'wouter';
import HeaderWelcome from "./components/HeaderWelcome";
import HeaderQuiz from "./components/HeaderQuiz";
import HeaderMenu from "./components/HeaderMenu";
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import FirstScreen from './components/FirstScreen'
import WelcomeModal from './components/WelcomeModal'
import GenreSelection from './components/GenreSelection';
import BookAuthorSelection from './components/BookAuthorSelection';
import InterestSelection from './components/InterestSelection';
import Header from './components/Header';
import GreetingsModal from './components/GreetingsModal';
import Discovering from './components/Discovering';
import BookSwipe from './components/BookSwipe';
import BookInfo from './components/BookInfo';

import './App.css'
import MyLibrary from './components/MyLibrary';

function App() {

  return (
    <div className="App">
    {/* Header for Welcome section */}
    <Header type="welcome" logoSrc="src/images/logo-book.png" logoAlt="BookMatch Logo" />

    <Switch>
      <Route path="/quiz">
        {/* Header for Quiz section */}
        <Header type="quiz" logoSrc="src/images/logo-book.png" logoAlt="BookMatch Logo" component={HeaderQuiz}/>
        <GenreSelection />
      </Route>
      <Route path="/menu">
        {/* Header for Menu section */}
        <Header type="menu" logoSrc="src/images/logo-book.png" logoAlt="BookMatch Logo" component={HeaderMenu}/>
        <BookSwipe />
      </Route>
      <Route path="/">
        {/* Default Header for Welcome section */}
        <Header type="welcome" logoSrc="src/images/logo-book.png" logoAlt="BookMatch Logo" component={HeaderWelcome} />
        <FirstScreen />
      </Route>
    </Switch>
  
    <main>
      <div>
        <Route path="/firstscreen" component={FirstScreen} />
        <Route path="/how-it-works" component={HowItWorks} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/login" component={LogIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/welcomemodal" component={WelcomeModal} />
        <Route path="/genres" component={GenreSelection} />
        <Route path="/books-authors-selection" component={BookAuthorSelection} />
        <Route path="/interests" component={InterestSelection} />
        <Route path="/greetings" component={GreetingsModal} />
        <Switch>
      <Route path="/discovering" component={Discovering} />
      <Route path="/bookswipe" component={BookSwipe} />
      <Route path="/library" component={MyLibrary} />
      <Route path="/bookinfo" component={BookInfo} />
    </Switch>
      </div>
    </main>
    
    {/* <HeaderQuiz /> */}
    {/* <HeaderMenu /> */}
    </div>
  )
}

export default App
