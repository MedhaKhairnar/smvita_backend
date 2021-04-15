import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFade,
  CForm,
  CFormGroup,
  CFormText,
  CValidFeedback,
  CInvalidFeedback,
  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CDropdown,
  CInputGroupText,
  CLabel,
  CSelect,
  CRow,
  CSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'
import { useFormik } from 'formik';
import * as yup from 'yup';
import {useEffect} from 'react';
const StaffForm = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  const formik = useFormik({
    initialValues: {
      Name: '',
      Email: '', 
      Mobile : '',
      UserName: '',  
      Password: '',
      PhotoUrl: ''    
    },
    validationSchema: yup.object({
   
      Name: yup.string()
      .min(3, 'Name should have at least 3 Character')
      .max(32, 'Name should not exceed 32 Characters')
        .required('Please Enter Batch Name'),
     
     
       // Email: yup.string()
      
        
        //.required('Please Enter email address'),
   
   
   
        Mobile: yup.number()
        .min(10, 'Mobile number should have at least 10 digits')
        //.max(10, 'Mobile number should not exceed 10 digits')
          .required('Please Enter mobile number '),
     
        UserName: yup.string()
          .min(4, 'UserName should have at least 4 Character')
          .max(32, 'UserName should not exceed 32 Character')
            .required('Please Enter mobile number '),
     
            Password: yup.string()
            .min(8, 'Password should be at least 8 characters')
       .max(15, 'Password should not exceed 15 Characters')
       .matches(/(?=.*[0-9])/, "Password must contain a number.")
       .required('Please Enter Staff Password')  
   
 //       CourseId: yup.object()
   
         //.max(10, 'Mobile number should be 10 digits')
   
   //     .required('Please Enter CourseId')
   
    }),
     onSubmit: values => {
      console.log(values);
       let demo=JSON.stringify(values);
       console.log(JSON.parse(demo));
         console.log(demo);
       fetch("http://localhost:5050/Staff/addstaff", {
           method: 'POST',
           headers: { 'Content-type': 'application/json' },
           body: demo
       }).then(() => {
           console.log("Staff added");
       });
     },
   }); 
  return (
    <>
     <CRow>
     <CCol >
          <CCard>
          <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal" onSubmit={formik.handleSubmit}>
            <CCardHeader>
                Staff Registration              
            </CCardHeader>
    
            <CCardBody>
            
              
              <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Staff Name</CLabel>
                  </CCol>
                  <CCol xs="6" md="6">
                    <CInput id="text-input1" name="Name" placeholder="Text" value={formik.values.Name} {...formik.getFieldProps("Name")}/>
                    <CFormText>Enter Full Name</CFormText>
                    {formik.touched.Name && formik.errors.Name ? <span style={{color:'red'}}>{formik.errors.Name}</span> : null}
                  </CCol>
                </CFormGroup>
                
                
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="email-input">Email</CLabel>
                  </CCol>
                  <CCol xs="6" md="6">
                    <CInput type="email" id="email-input" name="Email" placeholder="Email" autoComplete="email"value={formik.values.Email} {...formik.getFieldProps("Email")}/>
                    <CFormText className="help-block">Enter Email Address</CFormText>
                    {formik.touched.Email && formik.errors.Email ? <span style={{color:'red'}}>{formik.errors.Email}</span> : null}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">UserName</CLabel>
                  </CCol>
                  <CCol xs="6" md="6">
                    <CInput id="text-input2" name="UserName" placeholder="Text" value={formik.values.UserName} {...formik.getFieldProps("UserName")}/>
                    <CFormText>Enter UserName</CFormText>
                    {formik.touched.UserName && formik.errors.UserName ? <span style={{color:'red'}}>{formik.errors.UserName}</span> : null}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="hf-password">Password</CLabel>
                  </CCol>
                  <CCol xs="6" md="6">
                    <CInput type="password" id="hf-password" name="Password" placeholder="Enter Password" autoComplete="current-password" value={formik.values.Password} {...formik.getFieldProps("Password")}/>
                    <CFormText className="help-block">Enter password</CFormText>
                    {formik.touched.Password && formik.errors.Password ? <span style={{color:'red'}}>{formik.errors.Password}</span> : null}
                  </CCol>
                </CFormGroup>
                    
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Mobile</CLabel>
                  </CCol>
                  <CCol xs="6" md="6">
                    <CInput id="text-input3" name="Mobile" placeholder="Mobile Number" value={formik.values.Mobile} {...formik.getFieldProps("Mobile")}/>
                    <CFormText>Enter Mobile Number</CFormText>
                    {formik.touched.Mobile && formik.errors.Mobile ? <span style={{color:'red'}}>{formik.errors.Mobile}</span> : null}
                  </CCol>
                </CFormGroup>
                

                
                <CFormGroup row>
                  <CLabel col md="3" htmlFor="file-input">Upload Photo</CLabel>
                  <CCol xs="12" md="9">
                    <CInputFile id="file-input" name="PhotoUrl" value={formik.values.PhotoUrl} {...formik.getFieldProps("PhotoUrl")}/>
                  </CCol>
                </CFormGroup>

              
            </CCardBody>  
            <CCardFooter>
              <CButton type="submit" size="sm" color="primary"className="ml-1"> Submit</CButton>
              <CButton type="reset" size="sm" color="danger"className="ml-1">Reset</CButton>
            </CCardFooter>
            </CForm>  
            </CCard>
      </CCol>      
      </CRow>
      
    </>
  )
}
export default StaffForm