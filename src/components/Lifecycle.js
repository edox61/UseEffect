import React, { useState, useEffect } from "react";

const Lifecycle = () => {
  const [contador1, setContador1] = useState(0);
  const [contador2, setContador2] = useState(0);

  useEffect(() => {
    console.log("Sindependencias");
  });

  useEffect(() => {
    console.log("UseEffect []");
  }, []);

  useEffect(() => {
    console.log("useEffect [contador 1] ");
  }, [contador1]);

  useEffect(() => {
    console.log("useEffect [contador1,contador2]");
  }, [contador1, contador2]);

  return (
    <div>
      <button onClick={() => setContador1(contador1 + 1)}>contador1</button>
      <button onClick={() => setContador2(contador2 + 1)}>contador2</button>
      <h1>Contador1 {contador1}</h1>
      <h1>Contador2 {contador2}</h1>
    </div>
  );
};

export default Lifecycle;
