import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [

  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pagess/dashboard',
    home: true,
  },
  {
    title: 'Client',
    icon: 'people-outline',
        link: '/pagess/all-client',
      },
  {
    title: 'Créer Client',
    icon: 'person-add-outline',
     link: '/pagess/add-client',
      
  },
  {
    title: 'Facture',
    icon: 'file-text-outline',
        link: '/pagess/all-facture',
      },
  {
    title: 'Créer Facture',
    icon: 'file-add-outline',
     link: '/pagess/add-facture',
      
  },
  {
    title: 'Relance',
    icon: 'grid-outline',
        link: '/pagess/all-relance',
      },
 
  
     
 // {
  //  title: 'Miscellaneous',
    //icon: 'shuffle-2-outline',
  //  children: [
    //  {
    //    title: '404',
   //     link: '/pages/miscellaneous/404',
   //   },
 //   ],
//  },
 /* {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },*/
];
