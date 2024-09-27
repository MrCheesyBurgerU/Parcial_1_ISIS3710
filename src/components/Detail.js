import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormattedMessage } from 'react-intl';


function Detail({ robot }){
  if (!robot) return null;

  return (
    <div className="card text-center" style={{ border: '3px solid black', padding: '10px', borderRadius: '8px', backgroundColor: '#f9f9f9'}}>
        <div className="card-body">
            <h5 className="card-title" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{robot.nombre}</h5>
            <img 
            src={robot.imagen} 
            className="card-img-top mx-auto" 
            alt={robot.nombre} 
            style={{ 
                width: '130px', 
                height: '130px', 
                objectFit: 'cover', 
                marginBottom:'1vh', 
                border: '3px solid black'  
            }} 
            />
            <p className="card-text" style={{ textAlign: 'left' }}>
                <strong><FormattedMessage id="anio"/></strong> {robot.añoFabricacion}
            </p>
            <p className="card-text" style={{ textAlign: 'left' }}>
            <strong><FormattedMessage id="procesamiento"/></strong> {robot.capacidadProcesamiento} GHz
                </p>
            <p className="card-text" style={{ textAlign: 'left' }}>
                <strong><FormattedMessage id="humor"/></strong> {robot.humor}
            </p>
        </div>
    </div>
    );
};

export default Detail;
