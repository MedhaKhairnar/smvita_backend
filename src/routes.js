import React from 'react';
const FollowUp=React.lazy(()=>import('./views/followup/FollowUp') );
const enquiryRegistration=React.lazy(()=>import('./views/enquiry/enquiryRegistration') );
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
//const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'));
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));
const EnquiryForm = React.lazy(() => import('./views/enquiry/EnquiryForm'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/followup/FollowUp', name: 'FollowUp', component: FollowUp},
  { path: '/enquiry/enquiryRegistration', name: 'enquiryRegistration', component: enquiryRegistration},
  //{ path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  //{ path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
  { path: '/enquiry/EnquiryForm', exact: true, name: 'Enquiry Form', component: EnquiryForm }
];

export default routes;
