import { Route, Switch } from 'wouter';
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
import Profile from './components/Profile';
import Search from './components/Search';
import MyLibrary from './components/MyLibrary';
import './App.css'

function App() {

  return (
    <div className="App">
    {/* Header for Welcome section */}
    <Header type="menu" />

    <Switch>
      <Route path="/quiz">
        {/* Header for Quiz section */}
        <Header type="quiz"/>
        <GenreSelection />
        {/* <BookAuthorSelection />
        <InterestSelection />
        <GreetingsModal /> */}
      </Route>
      <Route path="/menu">
        {/* Header for Menu section */}
        <Header type="menu"/>
        <BookSwipe />
        {/* <Discovering />
        <BookInfo />
        <Profile /> */}
      </Route>
      <Route path="/">
        {/* Default Header for Welcome section */}
        <Header type="welcome"/>
        <FirstScreen />
        {/* <WelcomeModal />
        <LogIn />
        <SignUp /> */}
      </Route>
    </Switch>
  
    <main>
      <div>
        <Route path="/firstscreen" component={FirstScreen} />
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
        <Route path="/bookinfo/:id" component={BookInfo} />
        <Route path="/profile" component={Profile} />
        <Route path="/search" component={Search} />
      </Switch>
      
      </div>
    </main>

    </div>
  )
}

export default App
