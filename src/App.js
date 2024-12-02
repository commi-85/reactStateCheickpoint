
import './App.css';

import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Arona SANGHARE",
        bio: " Etudiant en Développeur web passionné par React.",
        imgSrc: "/WhatsApp Image 2024-03-21 à 22.38.34_51917caf.JPG",
        profession: "Développeur Full-Stack",
      },
      show: false,
      timeElapsed: 0,
    };
  }

  // Cycle de vie : Gestion de l'intervalle
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        timeElapsed: prevState.timeElapsed + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  toggleShow = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    const { person, show, timeElapsed } = this.state;

    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <button
          onClick={this.toggleShow}
          style={{
            padding: "10px 20px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {show ? "Cacher le profil" : "Afficher le profil"}
        </button>

        {show && (
          <div style={{ marginTop: "20px" }}>
            <img
              src={person.imgSrc}
              alt="Profil"
              style={{ width: "150px", borderRadius: "50%" }}
            />
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <h4>{person.profession}</h4>
          </div>
        )}

        <div style={{ marginTop: "20px", fontSize: "18px" }}>
          <strong>Temps écoulé : {timeElapsed} secondes</strong>
        </div>
      </div>
    );
  }
}

export default App;
