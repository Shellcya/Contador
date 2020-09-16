import React, { useState } from 'react';
import './style.css'

const App = () => {
  const [contagem, setContagem] = useState(0)
 if (contagem < 0){
   setContagem(0)
 }
 
  return (
    <section className="bloco">
     <h1 className="title">Vamos contar?</h1>
     <p className="zero">{contagem}</p>
    <div className="botoes">
      <button className="adicionar"  onClick={() => setContagem(contagem + 1)}>+</button>
      <button className="reset" onClick={() => setContagem(0)}>reset</button>
      <button className="subtrair" onClick={() => setContagem(contagem - 1)}>-</button>
    </div> 
    
    </section>
  );
}

export default App;
