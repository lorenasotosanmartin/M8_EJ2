import { render, screen } from "@testing-library/react";
import React from "react";
import ServiceList from "./ServiceList";

const service = {
    servicio: 'Cirugia general',
    descripcion: 'El servicio de cirugia general, se caracteriza por sus profesionalidad altamente capacitados en patalogias generales.',
    icono: 'bi-clipboard-pulse'
  };
  
test("Muetra el nombre del servicio correctamente",
    () => {
        render(<ServiceList service={service} />);
        expect(screen.getByText("Cirugia general")).toBeInTheDocument();
});

test("Muetra la descripción del servicio correctamente",
    () => {
        render(<ServiceList service={service} />);
        expect(screen.getByText("El servicio de cirugia general, se caracteriza por sus profesionalidad altamente capacitados en patalogias generales.")).toBeInTheDocument();
});

test('Se aplican los estilos en el icono correctamente', () => {
    render(<ServiceList service={service} />);
    const icon = screen.getByTestId('service-icon');
    expect(icon).toHaveStyle('color: #0D6EFD');
    expect(icon).toHaveStyle('font-size: 4rem');
  });