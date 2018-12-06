

export const navItems = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  // {
  //   title: true,
  //   name: 'Theme'
  // },
  // {
  //   name: 'Colors',
  //   url: '/theme/colors',
  //   icon: 'icon-drop'
  // },
  // {
  //   name: 'Typography',
  //   url: '/theme/typography',
  //   icon: 'icon-pencil'
  // },
  {
    title: true,
    name: 'Menu'
  },
  {
    name: 'Company',
    url: '/company',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Team',
        url: '/company/team',
        icon: 'icon-puzzle'
      },
      {
        name: 'Employee',
        url: '/company/employee',
        icon: 'icon-puzzle'
      },
      {
        name: 'Expense Category',
        url: '/company/expensecategory',
        icon: 'icon-puzzle'
      },
      {
        name: 'Tag',
        url: '/company/tag',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Reimbursement',
    url: '/reimbursement',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Claimer',
        url: '/reimbursement/claimer',
        icon: 'icon-puzzle'
      },
      {
        name: 'Approver',
        url: '/reimbursement/approver',
        icon: 'icon-puzzle'
      },
      {
        name: 'Finance',
        url: '/reimbursement/finance',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Cash Advance',
    url: '/cashadvance',
    icon: 'icon-cursor',
    children: [
      {
        name: 'Claimer',
        url: '/cashadvance/claimer',
        icon: 'icon-cursor'
      },{
        name: 'Approver',
        url: '/cashadvance/approver',
        icon: 'icon-cursor'
      },
      {
        name: 'Verificator',
        url: '/cashadvance/verificator',
        icon: 'icon-cursor'
      },
      {
        
        name: 'Finance',
        url: '/cashadvance/finance',
        icon: 'icon-cursor'
      }
    ]
  },
 

 
  {
    name: 'Attendance',
    url: '/attendance',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Claimer',
        url: '/attendance/attendanceclaimer',
        icon: 'icon-puzzle'
      },
      {
        name: 'Monitor',
        url: '/attendance/attendancemonitor',
        icon: 'icon-puzzle'
      },
      {
        name: 'Config',
        url: '/attendance/attendanceconfig',
        icon: 'icon-puzzle'
      }
    ]
  },

  {
    name:'Report',
    url:'/report',
    icon:'icon-star',
    children:[
      {
        name: 'Reimbursement',
        url: '/report/reportreimbursement',
        icon:'icon-star'
      },
      {
        name: 'Cash Advance',
        url: '/report/reportcashadvance',
        icon:'icon-star'
      },
      {
        name: 'Attendance',
        url: '/report/reportattendance',
        icon:'icon-star'
      }
    ]
  },

  {
    title: true,
    name: 'Adminstrasi'
  },

  {
    name: 'Administrasi',
    url: '/administrasi',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Position',
        url: '/administrasi/jabatan',
        icon: 'icon-puzzle'
      },
      {
        name: 'Employee Type ',
        url: '/administrasi/typeemployee',
        icon: 'icon-puzzle'
      },
      {
        name: 'Reimbursement Type',
        url: '/administrasi/reimbursementtype',
        icon: 'icon-puzzle'
      },
      // {
      //   name: 'Role Login',
      //   url: '/administrasi/role',
      //   icon: 'icon-puzzle'
      // },
      {
        name: 'Role ',
        url: '/administrasi/role',
        icon: 'icon-puzzle'
      },
      {
        name: 'Status',
        url: '/administrasi/status',
        icon: 'icon-puzzle'
      },
      {
        name: 'Account Bank',
        url: '/administrasi/accountbank',
        icon: 'icon-puzzle'
      },
      {
        name: 'Holiday', 
        url: '/administrasi/libur',
        icon: 'icon-puzzle'
      }
    ]
  },
  
  // {
  //   title: true,
  //   name: 'Components'
  // },
  // {
  //   name: 'Base',
  //   url: '/base',
  //   icon: 'icon-puzzle',
  //   children: [
  //     {
  //       name: 'Cards',
  //       url: '/base/cards',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Carousels',
  //       url: '/base/carousels',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Collapses',
  //       url: '/base/collapses',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Forms',
  //       url: '/base/forms',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Pagination',
  //       url: '/base/paginations',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Popovers',
  //       url: '/base/popovers',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Progress',
  //       url: '/base/progress',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Switches',
  //       url: '/base/switches',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Tables',
  //       url: '/base/tables',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Tabs',
  //       url: '/base/tabs',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Tooltips',
  //       url: '/base/tooltips',
  //       icon: 'icon-puzzle'
  //     }
  //   ]
  // },
  // {
  //   name: 'Buttons',
  //   url: '/buttons',
  //   icon: 'icon-cursor',
  //   children: [
  //     {
  //       name: 'Buttons',
  //       url: '/buttons/buttons',
  //       icon: 'icon-cursor'
  //     },
  //     {
  //       name: 'Dropdowns',
  //       url: '/buttons/dropdowns',
  //       icon: 'icon-cursor'
  //     },
  //     {
  //       name: 'Brand Buttons',
  //       url: '/buttons/brand-buttons',
  //       icon: 'icon-cursor'
  //     }
  //   ]
  // },
  // {
  //   name: 'Charts',
  //   url: '/charts',
  //   icon: 'icon-pie-chart'
  // },
  // {
  //   name: 'Icons',
  //   url: '/icons',
  //   icon: 'icon-star',
  //   children: [
  //     {
  //       name: 'CoreUI Icons',
  //       url: '/icons/coreui-icons',
  //       icon: 'icon-star',
  //       badge: {
  //         variant: 'success',
  //         text: 'NEW'
  //       }
  //     },
  //     {
  //       name: 'Flags',
  //       url: '/icons/flags',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Font Awesome',
  //       url: '/icons/font-awesome',
  //       icon: 'icon-star',
  //       badge: {
  //         variant: 'secondary',
  //         text: '4.7'
  //       }
  //     },
  //     {
  //       name: 'Simple Line Icons',
  //       url: '/icons/simple-line-icons',
  //       icon: 'icon-star'
  //     }
  //   ]
  // },
  // {
  //   name: 'Notifications',
  //   url: '/notifications',
  //   icon: 'icon-bell',
  //   children: [
  //     {
  //       name: 'Alerts',
  //       url: '/notifications/alerts',
  //       icon: 'icon-bell'
  //     },
  //     {
  //       name: 'Badges',
  //       url: '/notifications/badges',
  //       icon: 'icon-bell'
  //     },
  //     {
  //       name: 'Modals',
  //       url: '/notifications/modals',
  //       icon: 'icon-bell'
  //     }
  //   ]
  // },
  // {
  //   name: 'Widgets',
  //   url: '/widgets',
  //   icon: 'icon-calculator',
  //   badge: {
  //     variant: 'info',
  //     text: 'NEW'
  //   }
  // },
  // {
  //   divider: true
  // },
  // {
  //   title: true,
  //   name: 'Extras',
  // },
  // {
  //   name: 'Pages',
  //   url: '/pages',
  //   icon: 'icon-star',
  //   children: [
  //     {
  //       name: 'Login',
  //       url: '/login',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Register',
  //       url: '/register',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Error 404',
  //       url: '/404',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Error 500',
  //       url: '/500',
  //       icon: 'icon-star'
  //     }
  //   ]
  // },
  // {
  //   name: 'Download CoreUI',
  //   url: 'http://coreui.io/angular/',
  //   icon: 'icon-cloud-download',
  //   class: 'mt-auto',
  //   variant: 'success'
  // },
  // {
  //   name: 'Try CoreUI PRO',
  //   url: 'http://coreui.io/pro/angular/',
  //   icon: 'icon-layers',
  //   variant: 'danger'
  // }
];
