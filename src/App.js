// import logo from './logo.svg';
// import './App.css';

// const Shots = ["Brain", "Schauinsland", "Vampire", "Dodo", "Shizzo", "Pixel", "Merlin", "Kermit", "Fortuna", "Christoph", "Apple Pie", "75 D", "Biest", "Latino",
//                "Nono", "Schlumpf", "Herbert", "LK", "MaMa", "Me`kes", "BudSpencer", "Marko", "Granate", "Kukaracha", "Carl-Hermann", "Cora", "Exotic"];
// var shot = "dein shot";

// function ChangeText(){
//   console.log(shot);
//   shot = "fuck you jan";
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <button onClick={ChangeText}>{shot}</button>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import ReactDOM from 'react-dom';

const Shots = ["Brain", "Schauinsland", "Vampire", "Dodo", "Shizzo", "Pixel", "Merlin", "Kermit", "Fortuna", "Christoph", "Apple Pie", "75 D", "Biest", "Latino",
              "Nono", "Schlumpf", "Herbert", "LK", "MaMa", "Me`kes", "BudSpencer", "Marko", "Granate", "Kukaracha", "Carl-Hermann", "Cora", "Exotic", 
            "Gonzo", "M.C.", "Audi", "Molina", "Sheika", "Pronto", "Rocky", "Ötzi", "Yanni", "Schöni", "Superman", "Selam", "Petrus", "Ramin", "Egal",
          "Kakadoo", "Ich", "Homer", "Gaudi", "Embryo", "Butterfly", "Angel", "Barcelona", "Anke", "Ahoi", "Checkpoint Charley", "Clochard", "Diplom"];

class App extends React.Component {

  state = {
    shot: 'dein shot'
  }

  changeText = () => {
    const currentShot = Shots[Math.floor(Math.random() * Shots.length)]
    this.setState({
      shot: currentShot
    });
  }

  render() {
    return (
      <div className="App">
       <header className="App-header">
         <button onClick={this.changeText}>{this.state.shot}</button>
       </header>
     </div>
    );
  }
}
export default App;