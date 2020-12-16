import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  // {
  //   title: 'E-commerce',
  //   icon: 'shopping-cart-outline',
  //   link: '/pages/dashboard',
  // },
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/iot-dashboard',
    home: true,
  },
  {
    title: 'Employee Management',
    icon: 'person-outline',
    children:[
      {
      title: 'Employee Details',
      link: '/pages/employeemanagement/employeemanage',
      },
      {
        title: 'Employee logs',
        link: '/pages/employeemanagement/e-logs',
      },
      {
        title: 'Leave policy',
        link: '/pages/employeemanagement/e-leavepolicy',
      },
      {
        title: 'Salary Slips Forms',
        link: '/pages/employeemanagement/e-salary',
      }
    ]
  },
  {
    title: 'Forums',
    icon:'layout-outline',
    children:[
      {
        title: 'Forum',
        link: '/pages/forums/forum'
      }
    ]
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Bank / Branch ',
    icon: 'layout-outline',
    children: [
      {
        title: 'Bank Register',
        link: '/pages/layout/bankregister',
      },
      {
        title: 'Branch Register',
        link: '/pages/layout/branchregister',
      },
    ],
  },
  {
    title: 'CASA Accounts',
    icon:'cube-outline',
    children:[
      {
        title: 'Users Info',
        link: '/pages/casaaccounts/usersinfo',
      },
      {
        title: 'Create User',
        link: '/pages/casaaccounts/createprofile',
      },
    ],
  }, 
  {
    title: 'Deposit Management',
    icon: 'grid-outline',
    children: [
      {
        title: 'Deposit List',
        link: '/pages/deposit/list',
      },
      {
        title: 'User Deposits',
        link: '/pages/deposit/userlist',
      },
      {
        title: 'Transaction Deposit',
        link: '/pages/deposit/transactionlist',
      },
    ],
  },
  {
    title: 'Loan Management',
    icon: 'gift-outline',
    children: [
      {
        title: 'Lists',
        link: '/pages/loans/lists',
      },
      {
        title: 'Users',
        link: '/pages/loans/users',
      },
      {
        title: 'Transactions',
        link: '/pages/loans/usertransactions',
      },
    ],
  },
  {
    title: 'Product',
    icon: 'briefcase-outline',
    children: [
      {
        title: 'Account Details',
        link: '/pages/product/accountdetails',
      },
      {
        title: 'Loan Details',
        link: '/pages/product/loandetails',
      },
      {
        title: 'Deposit Details',
        link: '/pages/product/depositdetails',
      },
    ],
  },
  {
    title: 'Offers',
    icon: 'pantone-outline',
    children: [
      {
        title: 'create offer',
        link: '/pages/offers/createoffer',
      },
    ],
  },  
  {
    title: 'Message Settings',
    icon: 'message-circle-outline',
    children: [
      {
        title: 'Email',
        link: '/pages/messagesettings/emailtemplate',
      },
    ],
  },
  {
    title: 'Localization',
    icon: 'message-circle-outline',
    children: [
      {
        title: 'Localize',
        link: '/pages/localization/localize',
      },
    ],
  },
];
