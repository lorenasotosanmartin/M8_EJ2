import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
export default function TableList(appointments) {


    let dataAppointments = appointments.appointments;
    let th = ['Fecha', 'Hora', 'Paciente', 'Doctor'];
    
    return (
        <Table hover>
            <thead>
                <tr>
                    {th.map((th, key) =>
                        <th key={key}>{th}</th>
                    )}
                    <th colSpan={2} ></th>
                </tr>
            </thead>
            <tbody>
                {dataAppointments.map((appointment, key) => (
                    <tr key={key} >
                        <td>{appointment.fecha}</td>
                        <td>{appointment.hora}</td>
                        <td>{appointment.paciente}</td>
                        <td>{appointment.doctor}</td>
                        <td><Button variant="success">Confirmar</Button></td>
                        <td><Button variant="danger">Cancelar</Button></td>
                    </tr>
                ))}

            </tbody>
        </Table>
    );
}