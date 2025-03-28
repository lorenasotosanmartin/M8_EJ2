import ServiceList from "../components/ServiceList";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Profiler } from 'react';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Header from "../components/Header";
import Footer from '../components/Footer';

export default function Home() {

    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadServices = async () => {
            try{

            await axios.get("/src/public/services.json")
                .then(function (response) {
                    setServices(response.data.servicies);
                    setIsLoading(false);
                })
            }catch (error) {
                    console.log(error.message);
                    const MySwal = withReactContent(Swal);
                    MySwal.fire({
                        title: `Error al consumir API`,
                        showCancelButton: true,
                        cancelButtonText: "Cancelar",
                        confirmButtonText: "Intentarlo nuevamente",
                    }).then(async (result) => {
                        if (result.isConfirmed) {
                            loadServices();
                        }
                    });
                };
        }
        loadServices();
    }, []);

    if (isLoading) {
        return <h1>loading..</h1>
    }

    return (
        <main>
             <Header/>
            <section className="section_primary">
                <div className="primary__row row justify-content-center">
                    <div className="col-6 m-5">
                        <h1 className="primary__title mb-4">Bienvenido a clínica Chillán</h1>
                        <p className="primary__text secondary">Somos la principal clínica de la comuna Chillán y
                            sus
                            alrededores,nos
                            caracterizamos por
                            nuestro amplio equipo de profesional de la salud y por brindar un servicio grato y de
                            calidad a
                            cada
                            uno
                            de nuestros pacientes.</p>
                        <button className="primary__btn btn btn-primary" type="button">Conoce más<i className="button__icon bi bi-chevron-right"></i></button>
                    </div>
                </div>
            </section>

            <section>
                <div className="cards__content">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card p-4 border-0">
                                <i className="card__icon bi bi-hospital" title="icono misiòn"></i>
                                <h3 className="card__title">Misión</h3>
                                <p className="card__text text-body-secondary">Nuestra misión es brindar un servicio de salud con
                                    los más altos
                                    estándares de
                                    calidad a los
                                    habitantes de la comuna, garantizando la efectividad, ética laboral y amabilidad con
                                    nuestros
                                    pacientes.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card p-4 border-0">
                                <i className="card__icon bi bi-eye" title="icono visión"></i>
                                <h3 className="card__title">Visión</h3>
                                <p className="card__text text-body-secondary">Ser el principal centro de salud de la región,
                                    ofreciendo a toNamedos
                                    los
                                    pacientes
                                    la mejor experiencia
                                    en la atención integral y de alta complejidad, con los más altos estandares de
                                    calidad.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="my-5">
                <h2 className="mb-5">Nuestro Servicios</h2>
                <div className="row">
                    {services.map((service, key) => (
                        <div className='col-md-4 col-lg-3' key={key}>
                            <Profiler id="Services" onRender={onRenderCallback}>
                                <ServiceList key={key} service={service} />
                            </Profiler>
                        </div>
                    ))}
                </div>
            </section>
            <section className="cards my-5" tabIndex="0">
                <div className="cards__content">
                    <h2 className="cards__title mb-5">Testimonios de nuestros pacientes</h2>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card p-4">
                                <p className="card__text text-body-secondary">"Mi experiencia con Clínica Chillán, fue muy
                                    buena, me
                                    brindaron una
                                    atención
                                    rápida y
                                    con excelentes profesionales, que explican en detalle tu diagnóstico y tratamiento a
                                    seguir"
                                </p>
                                <p className="card__text card__text--strong">Victoria Solis</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card p-4">
                                <p className="card__text text-body-secondary">"Recurrí a urgencias de Clinica Chillán y recibi
                                    un
                                    trato amable por
                                    parte
                                    de sus
                                    profesionales y personal administrativo,ademas, me brindaron una atención rápida y
                                    efectiva"
                                </p>
                                <p className="card__text card__text--strong">María Ignacia Sanhueza</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card p-4">
                                <p className="card__text text-body-secondary">"Clínica Chillán, cuenta con una amplia gama de
                                    profesionales medicos
                                    de
                                    excelencia,
                                    que brindan un gran trato a sus pacientes con tratamientos efectivos, sin duda, la
                                    recomiendo"
                                </p>
                                <p className="card__text card__text--strong">Andrés Pérez</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card p-4">
                                <p className="card__text text-body-secondary">"Me opere hace un mes en Clínica Chillán con
                                    excelentes resultados y
                                    recibí un
                                    trato amable y
                                    cordial por para cada uno de sus funcionarios, estoy muy conforme con el servicio."
                                </p>
                                <p className="card__text card__text--strong">Andrea Poblete</p>
                            </div>
                        </div>
                    </div>
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