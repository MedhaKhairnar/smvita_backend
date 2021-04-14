import React from 'react';
//Here give path of each component from dedicated folder
//import EnquiryRegistration from './views/enquiry/enquiryRegistration';
const FollowUp=React.lazy(()=>import('./views/followup/FollowUp') );
const enquiryRegistration=React.lazy(()=>import('./views/enquiry/EnquiryForm') );
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
//const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'));
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));
const FollowUpData = React.lazy(() => import('./views/users/FollowUpData'));
const EnquiryForm = React.lazy(() => import('./views/enquiry/EnquiryForm'));
const StudentForm = React.lazy(() => import('./views/student/StudentForm'));
const StudentManage = React.lazy(() => import('./views/student/StudentManage'));
const StaffForm = React.lazy(() => import('./views/staff/StaffForm'));
const StaffList = React.lazy(() => import('./views/staff/StaffList'));
const CourseForm = React.lazy(() => import('./views/course/CourseRegistration/CourseForm'));
const BatchForm = React.lazy(() => import('./views/batch/BatchForm'));
const BatchManage= React.lazy(()=> import('./views/batch/BatchManage'));
const PaymentForm = React.lazy(() => import('./views/payment/PaymentForm'));
const PaymentDetails = React.lazy(() => import('./views/payment/PaymentDetails'));
const Gallery = React.lazy(() => import('./views/gallery/Gallery'));
const GalleryEdit = React.lazy(() => import('./views/gallery/GalleryEdit'));
const GalleryNavbar = React.lazy(() => import('./views/gallery/GalleryNavbar'));
const ManageGallery = React.lazy(() => import('./views/gallery/ManageGallery'));
const Uploader = React.lazy(() => import('./views/gallery/Uploader'));
const CourseManage=React.lazy(()=> import('./views/course/CourseList/CourseManage'));


//Here name represents grey colored path on head of dashboard such as home/enquiryregistration.
//path represents the path of component shown in url bar.
//component represents which component will be called or loaded.
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/followup/FollowUp', name: 'FollowUp', component: FollowUp},
  { path: '/enquiry/enquiryRegistration', name: 'EnquiryRegistration', component: EnquiryForm},
  //{ path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  //{ path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
  { path: '/enquiry/EnquiryForm',  name: 'EnquiryForm', component: EnquiryForm },
  { path: '/student/StudentForm', name: 'StudentForm', component: StudentForm },
  { path: '/student/StudentRegistration',  name: 'StudentForm', component: StudentForm },
  { path: '/student/StudentManage',  name: 'StudentManage', component: StudentManage },
  { path: '/staff/StaffRegistration',  name: 'StaffForm', component: StaffForm },
  { path: '/staff/StaffForm',  name: 'StaffForm', component: StaffForm },
  { path: '/staff/StaffList',  name: 'StaffList', component: StaffList },
  { path: '/course/CourseForm',  name: 'Course', component: CourseForm },
  { path: '/course/CourseRegistration',  name: 'CourseForm', component: CourseForm },
  { path: '/course/CourseManage',  name: 'CourseManage', component: CourseManage },
  { path: '/batch/BatchRegistration',  name: 'BatchForm', component: BatchForm },
  { path: '/batch/BatchForm',  name: 'BatchForm', component: BatchForm },
  { path: '/batch/BatchManage',  name: 'BatchManage', component: BatchManage},
  { path: '/payment/PaymentForm',  name: 'PaymentForm', component: PaymentForm },
  { path: '/payment/PaymentDetails',  name: 'PaymentDetails', component: PaymentDetails },
  { path: '/gallery/Gallery',  name: 'Gallery', component: Gallery },
  { path: '/gallery/GalleryEdit',  name: 'GalleryEdit', component: GalleryEdit },
  { path: '/gallery/GalleryNavbar',  name: 'GalleryNavbar', component: GalleryNavbar },
  { path: '/gallery/ManageGallery',  name: 'ManageGallery', component: ManageGallery },
  { path: '/gallery/Uploader',  name: 'Uploader', component: Uploader },
  
];

export default routes;
