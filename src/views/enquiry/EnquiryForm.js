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

const EnquiryForm = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)
  function onCreateCustomer (){
    console.log(this.refs.name.value);
    
}
let search = (e) => {
  e.preventDefault();
  let keyword = e.target.elements.key.value;
  console.log('Keyword: ' + keyword);
}

const formik = useFormik({
  initialValues: {
    Name: '',
    Email:'',
    Address:'',
    Mobile:'',
    AlternateMobile:''
  },
  validationSchema: yup.object({
 
   Name: yup.string()
   .min(3, 'Name should be greater than 3 characters')
     .max(15, 'Name should not exceed 15 Characters')

     .required('Please Enter Customer Name'),



   Address: yup.string()
   
   .max(25, 'Address should be less than 25 characters')
       .required('Please Enter Customer address '),
  

   Mobile: yup.string()

      .max(10, 'Mobile number should be 10 digits')

     .required('Please Enter Mobile number'),

     AlternateMobile: yup.string()

      .max(10, 'Mobile number should be 10 digits')

     .required('Please Enter Mobile number'),
 }),
  onSubmit: values => {
   console.log(values);
    let demo=JSON.stringify(values);
    console.log(JSON.parse(demo));
      console.log(demo);
    fetch("http://localhost:5050/Enquiry/addenquiry", {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: demo
    }).then(() => {
        console.log("Customer added");
    });
  },
}); 
    return (
    <>
     <CRow>
     <CCol >
          <CCard>
          <CForm   method="post" encType="multipart/form-data" className="form-horizontal" onSubmit={formik.handleSubmit}>
            <CCardHeader>
                Enquiry              
            </CCardHeader>
    
            <CCardBody>
            
              
              <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input" >Full Name</CLabel>
                  </CCol>
                  <CCol xs="6" md="6">
                    <CInput id="text-input" name="Name" placeholder="Text" value={formik.values.Name} {...formik.getFieldProps("Name")}/>
                    {formik.touched.Name && formik.errors.Name ? <span style={{color:'red'}}>{formik.errors.Name}</span> : null}
                    <CFormText>Enter Full Name</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="email-input">Email</CLabel>
                  </CCol>
                  <CCol xs="6" md="6">
                    <CInput type="email" id="email-input" name="Email" placeholder="Email" autoComplete="email" value={formik.values.Email} {...formik.getFieldProps("Email")}/>
                    <CFormText className="help-block">Please enter your email</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Mobile</CLabel>
                  </CCol>
                  <CCol xs="6" md="6">
                    <CInput id="text-input" name="Mobile" placeholder="Mobile Number" value={formik.values.Mobile}  
{...formik.getFieldProps("Mobile")}/>
                    <CFormText>Enter Mobile Number</CFormText>
                    {formik.touched.Mobile && formik.errors.Mobile ? <span style={{color:'red'}}>{formik.errors.Mobile}</span> : null}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Alternate Mobile</CLabel>
                  </CCol>
                  <CCol xs="6" md="6">
                    <CInput id="text-input" name="AlternateMobile" placeholder="Mobile Number" value={formik.values.AlternateMobile}  
{...formik.getFieldProps("AlternateMobile")}/>
                    <CFormText>Enter Mobile Number</CFormText>
                    {formik.touched.AlternateMobile && formik.errors.AlternateMobile ? <span style={{color:'red'}}>{formik.errors.AlternateMobile}</span> : null}
                  </CCol>
                </CFormGroup>
                {/*<CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Course</CLabel>
                  </CCol>
                  <CCol xs="6" md="4">
                    <CSelect custom name="course" id="select" value={formik.values.course} {...formik.getFieldProps("course")}>
                      <option value="0">select course</option>
                      <option value="1">Option #1</option>
                      <option value="2">Option #2</option>
                      <option value="3">Option #3</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="textarea-input">Query</CLabel>
                  </CCol>
                  <CCol xs="6" md="6">
                    <CTextarea 
                      name="query" 
                      id="textarea-input" 
                      rows="3"
                      placeholder="Query" value={formik.values.query} {...formik.getFieldProps("query")} 
                    />
                  </CCol>
                </CFormGroup>
                */}
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Adress line 1</CLabel>
                  </CCol>
                  <CCol xs="6" md="6">
                    <CInput id="text-input" name="Address" placeholder="Adress" value={formik.values.Address}  
{...formik.getFieldProps("Address")}/>
{formik.touched.Address && formik.errors.Address ? <span style={{color:'red'}}>{formik.errors.Address}</span> : null}
                    <CFormText>Enter Adress</CFormText>
                  </CCol>
                </CFormGroup>
                {/*<CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Adress line 2</CLabel>
                  </CCol>
                  <CCol xs="6" md="6">
                    <CInput id="text-input" name="address2" placeholder="Adress" value={formik.values.address2} {...formik.getFieldProps("address2")} />
                    <CFormText>Enter Adress</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Country</CLabel>
                  </CCol>
                  <CCol xs="6" md="4">
                    <CSelect custom name="country" id="select" value={formik.values.country} {...formik.getFieldProps("country")}>
                      <option value="0">select country</option>
                      <option value="1">Option #1</option>
                      <option value="2">Option #2</option>
                      <option value="3">Option #3</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
                
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">State</CLabel>
                  </CCol>
                  <CCol xs="6" md="4">
                    <CSelect custom name="state" id="select" value={formik.values.state} {...formik.getFieldProps("state")}>
                      <option value="0">select state</option>
                      <option value="1">Option #1</option>
                      <option value="2">Option #2</option>
                      <option value="3">Option #3</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">District</CLabel>
                  </CCol>
                  <CCol xs="6" md="4">
                    <CSelect custom name="district" id="select" value={formik.values.district} {...formik.getFieldProps("district")}>
                      <option value="0">select district</option>
                      <option value="1">Option #1</option>
                      <option value="2">Option #2</option>
                      <option value="3">Option #3</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">City</CLabel>
                  </CCol>
                  <CCol xs="6" md="4">
                    <CSelect custom name="city" id="select" value={formik.values.city} {...formik.getFieldProps("city")}>
                      <option value="0">select city</option>
                      <option value="1">Option #1</option>
                      <option value="2">Option #2</option>
                      <option value="3">Option #3</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
                */}
              
            </CCardBody>   
            <CCardFooter>
            <CButton type="submit" size="sm" color="primary"className="ml-1" > Submit</CButton>
              <CButton type="reset" size="sm" color="danger"className="ml-1">Reset</CButton>
            </CCardFooter>
            </CForm>  
            </CCard>
      </CCol>      
      </CRow>
      
    </>
  )
}
export default EnquiryForm