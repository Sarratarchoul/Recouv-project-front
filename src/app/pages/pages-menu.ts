import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [

  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Utilisateur',
    icon: 'person-outline',
        link: '/pages/all-utilisateur',
      },
  {
    title: 'Créer Utilisateur',
    icon: 'person-add-outline',
     link: '/pages/add-utilisateur',
      
  },
  {
    title: 'Client',
    icon: 'people-outline',
        link: '/pages/all-client',
      },
  {
    title: 'Créer Client',
    icon: 'person-add-outline',
     link: '/pages/add-client',
      
  },
  {
    title: 'Facture',
    icon: 'file-text-outline',
        link: '/pages/all-facture',
      },
  {
    title: 'Créer Facture',
    icon: 'file-add-outline',
     link: '/pages/add-facture',
      
  },
  {
    title: 'Relance',
    icon: 'grid-outline',
        link: '/pages/all-relance',
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
