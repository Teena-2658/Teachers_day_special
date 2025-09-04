import React, { useState } from "react";
import "./style.css";
import sirImg from "./assets/sir.png.jpeg"; // Replace with your sir's image path

function App() {
  const [open, setOpen] = useState(false);
  const [confetti, setConfetti] = useState([]);

  const handleOpen = () => {
    setOpen(true);
    createConfetti();
  };

  const createConfetti = () => {
    let pieces = [];
    for (let i = 0; i < 50; i++) {
      pieces.push({
        id: i,
        left: Math.random() * 100,
        color: randomColor(),
        duration: Math.random() * 2 + 3,
        delay: Math.random() * 2
      });
    }
    setConfetti(pieces);
  };

  const randomColor = () => {
    const colors = ["#ff4081", "#fbc02d", "#4caf50", "#2196f3", "#9c27b0"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className="container">
      {/* Background Shapes */}
      <div className="background-shapes">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

    {/* Gift Box Section */}
{!open && (
  <div className="gift-section">
    <h1 className="welcome-text">🎉 Happy Teachers' Day to the One Who Made Maths Magical! 🎉</h1>
    <p className="subtitle">✨ Tap the gift to reveal a special message just for you ✨</p>
    <div className="gift-box" onClick={handleOpen}>
      🎁
    </div>
  </div>
)}


      {/* Card Section */}
      {open && (
        <div className="card">
          <img src={sirImg} alt="Sir" className="sir-photo" />
          <h1>🎉 Happy Teachers' Day, Sir! 🎉</h1>
          <p className="quote">
            “A good teacher can inspire hope, ignite imagination, and instill a love of learning.”
          </p>
          <p className="message">
            You taught me Maths in school, and you will always be my favorite teacher.
          </p>
          <p className="name">— Teena Devray</p>
        </div>
      )}

      {/* Confetti */}
      {confetti.map((c) => (
        <div
          key={c.id}
          className="confetti"
          style={{
            left: `${c.left}%`,
            backgroundColor: c.color,
            animationDuration: `${c.duration}s`,
            animationDelay: `${c.delay}s`
          }}
        ></div>
      ))}
    </div>
  );
}

export default App;
