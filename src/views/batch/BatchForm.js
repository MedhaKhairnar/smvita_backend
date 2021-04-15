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
const BatchForm = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)
  const [items, setItems] = React.useState([])

  const formik = useFormik({
    initialValues: {
      //BatchId: 0,
      Name: '',
      StartDate: '',
      EndDate: '',
      FinalPresentationDate: '',
      //IsActive: Joi.boolean(),
      CourseId: {}
    
    },

    validationSchema: yup.object({
   
     Name: yup.string()
     .min(1, 'Name should have at least 1 Character')
     .max(8, 'Name should not exceed 15 Characters')
       .required('Please Enter Batch Name'),
    
    
       StartDate: yup.date()
     
       
       .required('Please Enter Start Date of Batch'),
  
  
  
       EndDate: yup.date()
     
         .required('Please Enter End Date of Batch '),
    
  
         
  
//       CourseId: yup.object()
  
        //.max(10, 'Mobile number should be 10 digits')
  
  //     .required('Please Enter CourseId')
  
   }),
    onSubmit: values => {
     console.log(values);
      let demo=JSON.stringify(values);
      console.log(JSON.parse(demo));
        console.log(demo);
      fetch("http://localhost:5050/Batch/addbatch", {
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          body: demo
      }).then(() => {
          console.log("Batch added");
      });
    },
  }); 
  useEffect(() => {
    async function fetchData() {
      var data = await fetch("http://localhost:5050/Course/courses", {
        method: 'GET',
        headers: { 'Content-type': 'application/json' },
        //body: demo
    }).then(res => {
        return res.json();
      });
      setItems(data);
        console.log(data);
      }
      fetchData();
      
    }, []);
  
  return (
    <>
     <CRow>
     <CCol >
          <CCard>
          <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal" onSubmit={formik.handleSubmit}>
            <CCardHeader>
                Batch Registration              
            </CCardHeader>
    
            <CCardBody>
            
              
              <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Batch Name</CLabel>
                  </CCol>
                  <CCol xs="6" md="6">
                    <CInput id="text-input" name="Name" placeholder="Text" value={formik.values.Name} {...formik.getFieldProps("Name")} />
                    <CFormText>Enter Batch Name</CFormText>
                    {formik.touched.Name && formik.errors.Name ? <span style={{color:'red'}}>{formik.errors.Name}</span> : null}
                  </CCol>
                </CFormGroup>
                
                
               <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="date-input">Batch Start Date</CLabel>
                  </CCol>
                  <CCol xs="6" md="6">
                    <CInput type="date" id="date-input" name="StartDate" placeholder="Start Date"  value={formik.values.StartDate} {...formik.getFieldProps("StartDate")}/>
                    <CFormText>Enter Batch Start Date</CFormText>
                    {formik.touched.StartDate && formik.errors.StartDate ? <span style={{color:'red'}}>{formik.errors.StartDate}</span> : null}
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="date-input">Batch End Date</CLabel>
                  </CCol>
                  <CCol xs="6" md="6">
                    <CInput type="date" id="date-input" name="EndDate" placeholder="End Date" value={formik.values.EndDate} {...formik.getFieldProps("EndDate")}/>
                    <CFormText>Enter Batch End Date</CFormText>
                    {formik.touched.EndDate && formik.errors.EndDate ? <span style={{color:'red'}}>{formik.errors.EndDate}</span> : null}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Course</CLabel>
                  </CCol>
                  <CCol xs="6" md="4">
                    <CSelect custom name="CourseId.course" id="select" value="['CourseId.course']" {...formik.getFieldProps("CourseId.course")}>
                      
                    {items.map((item, i)=>{return(<option key={i} value={item._id}>{item.Name}</option>)})}
                    </CSelect>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="date-input">Final Presentation Date</CLabel>
                  </CCol>
                  <CCol xs="6" md="6">
                    <CInput type="date" id="date-input" name="FinalPresentationDate" placeholder="Date" value={formik.values.FinalPresentationDate} {...formik.getFieldProps("FinalPresentationDate")}/>
                    <CFormText>Enter Final Presentation Date</CFormText>
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
export default BatchForm