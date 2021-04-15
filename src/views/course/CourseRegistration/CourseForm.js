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
import { useFormik } from 'formik';
import * as yup from 'yup';
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'

const CourseForm = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  const formik = useFormik({
    initialValues: {
      Name: '',
      Description: '',
      Duration: '',
      Fees: '',
      Syllabus: '',
      AgeGroupType: '',
      EnquiryCounter: 0,
      
      CoverPhoto: ''
    },
    validationSchema: yup.object({
   
     Name: yup.string()
     .min(3, 'Name should be greater than 3 characters')
       
  
       .required('Please Enter Course Name'),
    
    
    Description: yup.string()
     .min(2, 'Description should be greater than 2 characters')
       
       .required('Please Enter Course Description'),
  
  
  
     Duration: yup.string()
     
         .required('Please Enter Duration in hours '),
    
  
     Fees: yup.string()
  
        //.max(10, 'Mobile number should be 10 digits')
  
       .required('Please Enter Fees in rupees'),
  
       Syllabus: yup.string()
  
        //.max(10, 'Mobile number should be 10 digits')
  
       .required('Please Enter Syllabus'),
       AgeGroupType: yup.string()
  
        //.max(10, 'Mobile number should be 10 digits')
  
       .required('Please Enter Age group')
   }),
    onSubmit: values => {
     console.log(values);
      let demo=JSON.stringify(values);
      console.log(JSON.parse(demo));
        console.log(demo);
      fetch("http://localhost:5050/Course/addcourse", {
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          body: demo
      }).then(() => {
          console.log("Course added");
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
                Course Registration              
            </CCardHeader>
    
            <CCardBody>
            
              
              <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Course Name</CLabel>
                  </CCol>
                  <CCol xs="6" md="6">
                    <CInput id="text-input" name="Name" placeholder="Text"  value={formik.values.Name} {...formik.getFieldProps("Name")} />
                    {formik.touched.Name && formik.errors.Name ? <span style={{color:'red'}}>{formik.errors.Name}</span> : null}
                    <CFormText>Enter Course Name</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="textarea-input">Course Description</CLabel>
                  </CCol>
                  <CCol xs="6" md="6">
                    <CTextarea 
                      name="Description" 
                      id="textarea-input" 
                      rows="3"
                      placeholder="Course Description" 
                      value={formik.values.Description} {...formik.getFieldProps("Description")}
                    />
                    {formik.touched.Description && formik.errors.Description ? <span style={{color:'red'}}>{formik.errors.Description}</span> : null}
                  </CCol>
                </CFormGroup>
                
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Course Duration</CLabel>
                  </CCol>
                  <CCol xs="6" md="6">
                    <CInput id="text-input" name="Duration" placeholder="Course Duration" value={formik.values.Duration} {...formik.getFieldProps("Duration")}/>
                    {formik.touched.Duration && formik.errors.Duration ? <span style={{color:'red'}}>{formik.errors.Duration}</span> : null}
                    <CFormText>Enter Course Duration</CFormText>
                  </CCol>
                </CFormGroup>    
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Course Fees</CLabel>
                  </CCol>
                  <CCol xs="6" md="6">
                    <CInput id="text-input" name="Fees" placeholder="Course fees" value={formik.values.Fees} {...formik.getFieldProps("Fees")} />
                    {formik.touched.Fees && formik.errors.Fees ? <span style={{color:'red'}}>{formik.errors.Fees}</span> : null}
                    <CFormText>Enter Course Fees</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="textarea-input">Course Syllabus</CLabel>
                  </CCol>
                  <CCol xs="6" md="6">
                    <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="3"
                      placeholder="Course Syllabus" 
                      value={formik.values.Syllabus} {...formik.getFieldProps("Syllabus")}
                    />
                  </CCol>
                  {formik.touched.Syllabus && formik.errors.Syllabus ? <span style={{color:'red'}}>{formik.errors.Syllabus}</span> : null}
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Eligible AgeGroup</CLabel>
                  </CCol>
                  <CCol xs="6" md="6">
                    <CInput id="text-input" name="AgeGroupType" placeholder="AgeGroupType" value={formik.values.AgeGroupType} {...formik.getFieldProps("AgeGroupType")} />
                    {formik.touched.Fees && formik.errors.AgeGroupType ? <span style={{color:'AgeGroupType'}}>{formik.errors.AgeGroupType}</span> : null}
                    <CFormText>Enter AgeGroup</CFormText>
                  </CCol>
                </CFormGroup>
                
               
                <CFormGroup row>
                  <CLabel col md="3" htmlFor="file-input">Upload Cover Photo</CLabel>
                  <CCol xs="6" md="6">
                    <CInputFile id="file-input" name="CoverPhoto" value={formik.values.CoverPhoto} {...formik.getFieldProps("CoverPhoto")}/>
                  </CCol>
                </CFormGroup>
                {/*<CFormGroup row>
                  <CLabel col md="3" htmlFor="file-input">Upload Video</CLabel>
                  <CCol xs="6" md="6">
                    <CInputFile id="file-input" name="file-input"/>
                  </CCol>
                </CFormGroup>
                */}
              
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
export default CourseForm