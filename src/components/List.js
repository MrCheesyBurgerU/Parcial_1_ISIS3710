import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormattedMessage } from 'react-intl';

const List = () => {

    const [robots, setRobots] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedRobot, setSelectedRobot] = useState(null);

    useEffect(() => {
        const fetchRobots = async () => {
        try {
            const response = await fetch('http://localhost:3001/robots'); 
            if (!response.ok) {
                throw new Error('Error en la respuesta de la red');
            }
            const data = await response.json();
            setRobots(data);
        } 
        catch (err) {
            setError('Error al cargar los datos: ' + err.message);
        } finally {
            setLoading(false);
        }
    }; fetchRobots();}, []);

  const fetchRobotDetails = async (id) => {
        try {
            const response = await fetch(`http://localhost:3001/robots/${id}`); 
            if (!response.ok) {
                throw new Error('Robot no encontrado');
            }
            const data = await response.json();
            data.imagen = data.imagen.replace('github.com', 'raw.githubusercontent.com').replace('/blob/', '/');
            setSelectedRobot(data);
        } 
        catch (err) {
            setError('Error al cargar los detalles: ' + err.message);
        }
    };

    if (loading) return <div>Cargando...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="container mt-4">
                <div className="row">
                    <div className="col-lg-8">
                        <table className="table table-striped" style={{width:'50vw'}}>
                            <thead className="table-dark">
                                <tr>
                                    <th>ID</th>
                                    <th><FormattedMessage id="nombre"/></th>
                                    <th><FormattedMessage id="modelo"/></th>
                                    <th><FormattedMessage id="empresaFabricante"/></th>
                                </tr>
                            </thead>
                            <tbody>
                                {robots.map((robot) => (
                                    <tr key={robot.id} onClick={() => fetchRobotDetails(robot.id)} style={{ cursor: 'pointer' }}>
                                    <td><strong>{robot.id}</strong></td>
                                    <td>{robot.nombre}</td>
                                    <td>{robot.modelo}</td>
                                    <td>{robot.empresaFabricante}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-lg-4">
                        {selectedRobot && (
                            <div className="card text-center" style={{ border: '3px solid black', padding: '10px', borderRadius: '8px', backgroundColor: '#f9f9f9'}}>
                                <div className="card-body">
                                    <h5 className="card-title" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{selectedRobot.nombre}</h5>
                                    <img 
                                    src={selectedRobot.imagen} 
                                    className="card-img-top mx-auto" 
                                    alt={selectedRobot.nombre} 
                                    style={{ 
                                        width: '130px', 
                                        height: '130px', 
                                        objectFit: 'cover', 
                                        marginBottom:'1vh', 
                                        border: '3px solid black'  
                                    }} 
                                    />
                                    <p className="card-text" style={{ textAlign: 'left' }}><strong><FormattedMessage id="anio"/></strong> {selectedRobot.añoFabricacion}</p>
                                    <p className="card-text" style={{ textAlign: 'left' }}><strong><FormattedMessage id="procesamiento"/></strong> {selectedRobot.capacidadProcesamiento} GHz</p>
                                    <p className="card-text" style={{ textAlign: 'left' }}><strong><FormattedMessage id="humor"/></strong> {selectedRobot.humor}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
        </div>
    );
};

export default List;
