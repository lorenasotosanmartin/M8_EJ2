import AppointmentForm from '../components/AppointmentForm';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Profiler } from 'react';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Header from "../components/Header";
import Footer from '../components/Footer';

export default function appointment() {

    const [doctors, setDoctors] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
     
        const loadDoctors = async () => {
            try{
            await axios.get("/src/public/doctors.json")
                .then(function (response) {
                    setDoctors(response.data.doctors);
                    setIsLoading(false);
                })
                } catch (error) {
                    console.log(error.message);
                    const MySwal = withReactContent(Swal);
                    MySwal.fire({
                        title: `Error al consumir API`,
                        showCancelButton: true,
                        cancelButtonText: "Cancelar",
                        confirmButtonText: "Intentarlo nuevamente",
                    }).then(async (result) => {
                        if (result.isConfirmed) {
                            loadDoctors();
                        }
                    });
                };
        }
        loadDoctors();
    }, []);

    if (isLoading) {
        return <h1>loading..</h1>
    }

    return (
        <main>
             <Header/>
            <section className="section_primary py-5" tabIndex="0">
                <div className="primary__content container">
                    <div className="primary__row row justify-content-center">
                        <div className="col-lg-8">
                            <h1 className="primary__title mb-4">Reservar Cita</h1>
                            <p className="primary__text text-body-secondary">Completa el siguiente formulario para agendar tu cita medica</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact my-5" tabIndex="0">
                <div className="row justify-content-center">
                    <div className="col-8">
                        <Profiler id="appointment" onRender={onRenderCallback}>
                            <AppointmentForm doctors={doctors} />
                        </Profiler>
                    </div>
                </div>
            </section>
            <Footer/>
        </main>
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