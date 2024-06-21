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
    <>
    <div className="App">

    <Switch>
        <Route path="/quiz">
          <Header type="quiz"/>
        </Route>

        <Route path="/menu">
          <Header type="menu"/>
          <BookSwipe />
        </Route>

        <Route path="/">
          <Header type="welcome"/>
          <FirstScreen />
        </Route>

        <Route path="/login">
          <Header type="welcome"/>
          <LogIn />
        </Route>

        <Route path="/signup">
          <Header type="welcome"/>
          <SignUp />
        </Route>

        <Route path="/welcomemodal">
          <Header type="quiz"/>
          <WelcomeModal />
        </Route>
                
        <Route path="/genres">
          <Header type="quiz"/>
          <GenreSelection />
        </Route>

        <Route path="/books-authors-selection">
          <Header type="quiz"/>
          <BookAuthorSelection />
        </Route>

        <Route path="/interests">
          <Header type="quiz"/>
          <InterestSelection />
        </Route>

        <Route path="/greetings">
          <Header type="quiz"/>
          <GreetingsModal />
        </Route>
          
        <Route path="/discovering">
          <Header type="menu"/>
          <Discovering />
        </Route>

        <Route path="/bookswipe">
          <Header type="menu"/>
          <BookSwipe />
        </Route>

        <Route path="/library">
          <Header type="menu"/>
          <MyLibrary />
        </Route>

        <Route path="/bookinfo/:id">
          <Header type="menu"/>
          <BookInfo />
        </Route>

        <Route path="/profile">
            <Header type="menu"/>
            <Profile />
        </Route>

        <Route path="/search">
            <Header type="menu"/>
            <Search />
        </Route>
              
      </Switch>
      </div>
       </>
     )
}

export default App
