import { useEffect, useState } from 'react';
import TableList from '../components/TableList';
import axios from 'axios';
import { Profiler } from 'react';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Footer from '../components/Footer';
import Logout from '../components/Logout';

export default function Register() {

    const [appointments, setAppointments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadAppointments = async () => {
            try{
            await axios.get("src/public/appointment.json")
                .then(function (response) {
                    setIsLoading(false);
                    setAppointments(response.data.appointments);
                })
            }catch (error) {
                    console.log(error)
                    const MySwal = withReactContent(Swal);
                    MySwal.fire({
                        title: `Error al consumir API`,
                        showCancelButton: true,
                        cancelButtonText: "Cancelar",
                        confirmButtonText: "Intentarlo nuevamente",
                    }).then(async (result) => {
                        if (result.isConfirmed) {
                            loadAppointments();
                        }
                    });
                };
        }
        loadAppointments();
    }, []);

    if (isLoading) {
        return <h1>loading..</h1>
    }

    return (
        <main>
               <Logout />
            <section>
                <div className="primary__row row justify-content-center">
                    <div className="col-6 m-5">
                        <h1 className="primary__title mb-4">Registro de citas</h1>
                    </div>
                </div>
            </section>
            <section>
                <div className='container mb-5'>
                    <Profiler id="registerAppointment" onRender={onRenderCallback}>
                        <TableList appointments={appointments} />
                    </Profiler>
                </div>
            </section>
            <Footer/>
        </main >
    );
}

function onRenderCallback(
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    endTime,
) {
    console.log(`Profiler: ${id},\n fase: ${phase},\n Duración actual: ${actualDuration},\n Duración base: ${baseDuration},\n inicio: ${startTime},\n fin: ${endTime}`);
}