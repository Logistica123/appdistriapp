export const adminLteConf = {
  skin: 'blue',
  // isSidebarLeftCollapsed: false,
  // isSidebarLeftExpandOnOver: false,
  // isSidebarLeftMouseOver: false,
  // isSidebarLeftMini: true,
  // sidebarRightSkin: 'dark',
  // isSidebarRightCollapsed: true,
  // isSidebarRightOverContent: true,
  // layout: 'normal',
  sidebarLeftMenu: [
    {label: 'MENU', separator: true},
    // {label: 'Get Started', route: '/', iconClasses: 'fa fa-road', pullRights: [{text: 'New', classes: 'label pull-right bg-green'}]},
    {label: 'Inicio', route: '/', iconClasses: 'fa fa-home'},
    {label: 'Repartidores', route: '/admin/repartidores', iconClasses: 'fa fa-road'},
    {label: 'Sucursales', route: '/admin/sucursales', iconClasses: 'fa fa-list'},
    {label: 'Material-Ubicación', route: '/admin/material-ubicacion', iconClasses: 'fa fa-list'},
    {label: 'Ranking', route: '/admin/ranking', iconClasses: 'fa fa-list'},
    {label: 'Ubic. repartidores', route: '/admin/repartidores/ubicacion', iconClasses: 'fa fa-map'},
    {label: 'Direcciones cargadas', route: '/admin/direcciones-cargadas', iconClasses: 'fa fa-map-pin'},
    {label: 'Viajes', route: '/admin/viajes', iconClasses: 'fa fa-car'},
    {label: 'Distribución urbana', route: '/admin/distribucion-urbana', iconClasses: 'fa fa-car'},
    {label: 'Empresas', route: '/admin/empresas', iconClasses: 'fa fa-list'},
    // {label: 'Conf. puntaje', route: '/admin/puntaje', iconClasses: 'fa fa-list'},
    {label: 'Control operaciones', route: '/admin/control-operaciones', iconClasses: 'fa fa-list'},
    {label: 'Control combustible', route: '/admin/control-combustible', iconClasses: 'fa fa-list'},
    {label: 'Control peaje', route: '/admin/control-peaje', iconClasses: 'fa fa-list'},
    {label: 'Solicitudes retiro', route: '/admin/solicitudes-retiro', iconClasses: 'fa fa-list'},
    {label: 'Transacciones', route: '/admin/transacciones', iconClasses: 'fa fa-list'},
    {label: 'Documentos Cargados', route: '/admin/documentos-cargados', iconClasses: 'fa fa-files-o'},
    {label: 'Notificaciones enviadas', route: '/admin/notificaciones-enviadas', iconClasses: 'fa fa-bell-o'},
    {label: 'Sugerencias', route: '/admin/sugerencias', iconClasses: 'fa fa-edit'},
    {label: 'Ayuda', route: '/admin/ayuda', iconClasses: 'fa fa-question-circle'},
    // {label: 'Layout', iconClasses: 'fa fa-th-list', children: [
    //     {label: 'Configuration', route: 'layout/configuration'},
    //     {label: 'Custom', route: 'layout/custom'},
    //     {label: 'Header', route: 'layout/header'},
    //     {label: 'Sidebar Left', route: 'layout/sidebar-left'},
    //     {label: 'Sidebar Right', route: 'layout/sidebar-right'},
    //     {label: 'Content', route: 'layout/content'}
    //   ]},
    // {label: 'COMPONENTS', separator: true},
    // {label: 'Accordion', route: 'accordion', iconClasses: 'fa fa-tasks'},
    // {label: 'Alert', route: 'alert', iconClasses: 'fa fa-exclamation-triangle'},
    // {label: 'Boxs', iconClasses: 'fa fa-files-o', children: [
    //     {label: 'Default Box', route: 'boxs/box'},
    //     {label: 'Info Box', route: 'boxs/info-box'},
    //     {label: 'Small Box', route: 'boxs/small-box'}
    //   ]},
    // {label: 'Dropdown', route: 'dropdown', iconClasses: 'fa fa-arrows-v'},
    // {label: 'Form', iconClasses: 'fa fa-files-o', children: [
    //     {label: 'Input Text', route: 'form/input-text'}
    // ]},
    // {label: 'Tabs', route: 'tabs', iconClasses: 'fa fa-th'}
  ]
};
