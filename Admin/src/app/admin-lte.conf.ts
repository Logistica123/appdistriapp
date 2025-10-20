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
    {label: 'Repartidores', route: '/admin/repartidores', iconClasses: 'fa fa-users'},
    {label: 'Sucursales', route: '/admin/sucursales', iconClasses: 'fa fa-building'},
    {label: 'Material-Ubicación', route: '/admin/material-ubicacion', iconClasses: 'fa fa-cubes'},
    {label: 'Ranking', route: '/admin/ranking', iconClasses: 'fa fa-trophy'},
    {label: 'Ubic. repartidores', route: '/admin/repartidores/ubicacion', iconClasses: 'fa fa-map-marker'},
    {label: 'Direcciones cargadas', route: '/admin/direcciones-cargadas', iconClasses: 'fa fa-map-signs'},
    {label: 'Viajes', route: '/admin/viajes', iconClasses: 'fa fa-road'},
    {label: 'Distribución urbana', route: '/admin/distribucion-urbana', iconClasses: 'fa fa-truck'},
    {label: 'Empresas', route: '/admin/empresas', iconClasses: 'fa fa-building-o'},
    // {label: 'Conf. puntaje', route: '/admin/puntaje', iconClasses: 'fa fa-list'},
    {label: 'Control operaciones', route: '/admin/control-operaciones', iconClasses: 'fa fa-sliders'},
    {label: 'Control combustible', route: '/admin/control-combustible', iconClasses: 'fa fa-tachometer'},
    {label: 'Control peaje', route: '/admin/control-peaje', iconClasses: 'fa fa-ticket'},
    {label: 'Solicitudes retiro', route: '/admin/solicitudes-retiro', iconClasses: 'fa fa-exchange'},
    {label: 'Transacciones', route: '/admin/transacciones', iconClasses: 'fa fa-credit-card'},
    {label: 'Reclamos', route: '/admin/reclamos', iconClasses: 'fa fa-comment'},
    {label: 'Documentos Cargados', route: '/admin/documentos-cargados', iconClasses: 'fa fa-file-text-o'},
    {label: 'Liquidaciones', route: '/admin/liquidaciones', iconClasses: 'fa fa-money'},
    {label: 'Notificaciones enviadas', route: '/admin/notificaciones-enviadas', iconClasses: 'fa fa-bell'},
    {label: 'Beneficios', route: '/admin/beneficios', iconClasses: 'fa fa-gift'},
    {label: 'Sugerencias', route: '/admin/sugerencias', iconClasses: 'fa fa-lightbulb-o'},
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
