import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Content from './components/Content';


 const App = () => {
  return (
    <div>
      <Header />
      <div className="wrapper">
        <Nav />
        <Content />
      </div>
    </div>
  );
}

export default App;
