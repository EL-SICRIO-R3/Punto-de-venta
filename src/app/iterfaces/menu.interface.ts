export interface IMenu {
    label: string;
    icon: string;
    action: string;
    active: boolean;
}

export const itemsMenu: IMenu[] = [
    { label: 'Pedidos', icon: 'bi bi-clipboard-plus', action: 'pedidos', active: false},
    { label: 'Registrar Platillo', icon: 'bi bi-pencil', action: 'registrarPedido', active: false},
    { label: 'Registrar Empleado', action: 'registrar-empleado', icon: 'bi bi-person-add', active: false },
    { label: 'Reporte de movimientos', action: 'reporte', icon: 'bi bi-archive', active: false},
    { label: 'Galeria', action: 'galeria', icon: 'bi bi-card-image', active: false}
  ];