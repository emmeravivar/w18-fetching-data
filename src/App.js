import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const url = 'https://api.punkapi.com/v2/beers';
  useEffect(() => {
    console.log('Leyendo...');
    fetch(url) //<= Devuelve una promesa
      .then(res => res.json()) // <= Esperar a que se resuelva la promesa
      .then(data => setData(data)); // <= Asignar los datos al estado
  }, []);

  return (
    <div className="container">
      <h2>Week 18</h2>
      <h1>Fetchind Data | Servicio de Datos I</h1>
      <div className="example-container">
        <h2>{url} </h2>
        <div className="box">
          {data &&
            data.map(item => (
              <div className="card" key={item.id}>
                <div className="card-title">
                  <img src={item.image_url} />
                  <h3>{item.name}</h3>
                </div>
                <div className="card-body">
                  <h4>{item.tagline}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
      <h3>Eva María Mera Vivar</h3>
      <h4>Learning Facilitator | 01/2024| Emeritus | MiT</h4>
    </div>
  );
}

export default App;
