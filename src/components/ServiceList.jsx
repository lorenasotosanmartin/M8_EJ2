import PropTypes from 'prop-types';
export default function ServiceList(service) {
  return (
    <>
      <i className={service.service.icono} style={{ color: '#0D6EFD',fontSize: '4rem'}}></i>
      <h3>{service.service.servicio}</h3>
      <p>{service.service.descripcion}</p>
    </>
  );
}

ServiceList.propTypes = {
  service: PropTypes.shape({
    servicio: PropTypes.string,
    descripcion: PropTypes.string,

  })

};