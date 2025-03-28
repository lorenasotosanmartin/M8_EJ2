export default function Footer() {
     return (
          <footer className="page-footer font-small blue pt-4">
               <div className="row">
               <ul className="footer__list nav justify-content-center p-1">
                         <li className="list__item"><a className="list__link" href="#"><i className="list__icon bi bi-facebook"
                              title="icono facebook"></i></a></li>
                         <li className="list__item"><a href="#"><i className="list__icon bi bi-instagram"
                              title="icono instagram"></i></a></li>
                         <li className="list__item"> <a href="#"><i className=" list__icon  bi bi-twitter-x"
                              title="icono twitter"></i></a></li>
                    </ul>
                    <div className="footer-copyright text-center py-3">© 2024 Clinica Chillán
                    </div>
                    
               </div>
          </footer>
     );
}