import React, {useEffect, useRef} from "react";
import Header from "../components/Header";
import Footer from '../components/Footer';

export default function Contact() {
    const inputRef = useRef();

function focusInput(){
    inputRef.current.focus();
}

    return (
        <main>
             <Header/>
            <section className="section_primary py-5" tabIndex="0">
                <div className="primary__content container">
                    <div className="primary__row row justify-content-center">
                        <div className="col-lg-8">
                            <h1 className="primary__title mb-4">Contactanos</h1>
                            <p className="primary__text text-body-secondary">Envíanos un mensaje, con tus dudas, consultas o
                                sugerencias, nuestro equipo
                                administrativo te responderá a la brevedad</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact my-5" tabIndex="0">
                
                <div className="row">
                    <div className="col-6">
                        <form className="form">
                            <label className="form__label" htmlFor="name">Nombre</label>
                            <input  ref={inputRef} className="form__control form-control" type="text" id="name" name="name_user"
                                placeholder="Ingresa tu nombre" />
                            <label className="form__label" htmlFor="email">Email</label>
                            <input className="form__control form-control" type="email" id="email" name="email_user" placeholder="Ingresa tu email" />
                            <label className="form__label" htmlFor="reason">Motivo del mensaje</label>
                            <select className="form-select form__control" defaultValue={'DEFAULT'}>
                                <option value="DEFAULT" disabled>Selecciona motivo del mensaje</option>
                                <option value="1">Cotización</option>
                                <option value="2">Consulta general</option>
                                <option value="3">Sugerencias</option>
                                <option value="4">Felicitaciones</option>
                            </select>
                            <label className="form__label" htmlFor="issue">Asunto</label>
                            <input className="form__control form-control" type="text" id="issue" name="isuue_message"
                                placeholder="Ingresa asunto del mensaje" />
                            <label className="form__label" htmlFor="message">Mensaje</label>
                            <textarea className="form__control form-control" id="message" rows="3" name="content_message"
                                placeholder="Escribe el contenido de tu mensaje"></textarea>
                            <button className="form__button btn btn-primary mx-1" type="submit">Enviar mensaje</button>
                            <button className="form__button btn btn-primary " type="button" onClick={focusInput}>Volver al inicio</button>
                        </form>
                    </div>
                    <div className="col-6">
                        <iframe className="map__content"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3202.7433039338766!2d-72.09572292551992!3d-36.60849096611972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966929d548c1caf1%3A0x17d5e45c96dd0b49!2sAv.%20Libertad%201678%2C%20Chill%C3%A1n%2C%20%C3%91uble!5e0!3m2!1ses!2scl!4v1729456170569!5m2!1ses!2scl"
                            width="600" height="500" allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </section>
            <Footer/>
        </main>
    );
}

