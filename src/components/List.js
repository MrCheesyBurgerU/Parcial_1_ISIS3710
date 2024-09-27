import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormattedMessage } from 'react-intl';
import Detail from './Detail';

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
                        <table className="table" style={{width:'55vw'}}>
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
                        <Detail robot={selectedRobot}/>
                    </div>
                </div>
        </div>
    );
};

export default List;
