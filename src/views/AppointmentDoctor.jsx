import { useEffect, useState } from 'react';
import TableList from '../components/TableList';
import axios from 'axios';
import { Profiler } from 'react';
import Footer from '../components/Footer';
import Logout from '../components/Logout'
import {useAuth}  from "../context/AuthContext"
import { useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs'

export default function AppointmentDoctor() {
    const navigate = useNavigate();
    const user = useAuth();
    console.log(user.user.username)
    const doctor = user.user.username;
    const [appointments, setAppointments] = useState([]);


    useEffect(() => {
        const loadAppointments = async () => {
            const appointments = await axios.get("/src/public/appointment.json");
            for (let i=0; i<=appointments.data.appointments.length;i++){
                bcrypt.compare(appointments.data.appointments[i].username_doctor, doctor ).then((match) => {
                    if(!match) {console.log("no es ")
                    }else{
                        console.log("si" )
                        let username = appointments.data.appointments[i].username_doctor
                        console.log(username)
                        setAppointments((appointments.data.appointments).filter((appointment) => appointment.username_doctor === username));
                    
                   }
                   
                } ); 
            }
           
        
        //    setAppointments(appointments.data.appointments)
        }
        loadAppointments();
    }, []);




    
    if (appointments.length === 0) {
        return (<h1>loading</h1>)
    }
    
    return (
        <main>
            <Logout />
            <section className='my-5'>
                <div className="row">
                    <div className="col-12 justify-content-center">
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
            <Footer />
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