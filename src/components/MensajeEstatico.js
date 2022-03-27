import React from "react";

const MensajeEstatico = () => {
  return (
    <div id="static-message">
      <hr></hr>
      <h2 className="subheader">Probando componente estático</h2>
      <p>
        Con menor complejidad y con menos funcionalidad. 
        </p>
      <p>

        Es una <code>CONS</code> con una función arrow que "no necesita del método <code>render()</code>"
      </p>
      <hr></hr>
    </div>
  );
};

export default MensajeEstatico;
