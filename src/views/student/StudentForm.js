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

const StudentForm = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  const formik = useFormik({
    initialValues: {
      Name: '',
      Email:'',
      Address:'',
      Mobile:'',
      AlternateMobile:'',
      Gender:'',
      PhotoUrl:'',
      DOB:'',
      Age:'',
      Qualification:'',
      batchId:[],
      paymentMasterId:[],
      UserName:'',
      Password:''
    },
    validationSchema: yup.object({
   
     Name: yup.string()
     .min(3, 'Name should be greater than 3 characters')
       .max(15, 'Name should not exceed 15 Characters')
  
       .required('Please Enter Student Name'),
    
    
    Password: yup.string()
     .min(8, 'Password should be at least 8 characters')
       .max(15, 'Password should not exceed 15 Characters')
       .matches(/(?=.*[0-9])/, "Password must contain a number.")
       .required('Please Enter Student Password'),
  
  
  
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
      fetch("http://localhost:5050/Student/addstudent", {
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          body: demo
      }).then(() => {
          console.log("Student added");
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
                Student Registration              
            </CCardHeader>
    
            <CCardBody>
            
              
              <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Student Name</CLabel>
                  </CCol>
                  <CCol xs="6"g md="6">
                    <CInput id="text-input" name="Name" placeholder="Text" value={formik.values.Name} {...formik.getFieldProps("Name")}/>
                    {formik.touched.Name && formik.errors.Name ? <span style={{color:'red'}}>{formik.errors.Name}</span> : null}
                    <CFormText>Enter Full Name</CFormText>
                  </CCol>
                </CFormGroup>
                {/*<CFormGroup row>
                  <CCol tag="label" sm="3" className="col-form-label">
                    Registration through Enquiry
                  </CCol>
                  <CCol sm="9">
                  <CSwitch
                      className="mr-1"
                      color="dark"
                      defaultChecked
                      shape="pill"
                      variant="opposite"
                    />
                  </CCol>
                </CFormGroup>*/}
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Gender</CLabel>
                  </CCol>
                  <CCol md="9">
                    <CFormGroup variant="custom-radio" inline>
                      <CInputRadio custom id="inline-radio1" name="Gender" value="Male" onChange={formik.handleChange}
                    defaultChecked={formik.values.gender=== "Male"} /*{...formik.getFieldProps("Gender")}*/ />
                      <CLabel variant="custom-checkbox" htmlFor="inline-radio1">Male</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-radio" inline>
                      <CInputRadio custom id="inline-radio2" name="Gender" value="Female" onChange={formik.handleChange}
                    defaultChecked={formik.values.gender=== "Female"}/*{...formik.getFieldProps("Gender")}*//>
                      <CLabel variant="custom-checkbox" htmlFor="inline-radio2">Female</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-radio" inline>
                      <CInputRadio custom id="inline-radio3" name="Gender" value="Other" onChange={formik.handleChange}
                    defaultChecked={formik.values.gender=== "Other"} /*{...formik.getFieldProps("Gender")}*/ />
                      <CLabel variant="custom-checkbox" htmlFor="inline-radio3">Other</CLabel>
                    </CFormGroup>               
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="email-input">Email</CLabel>
                  </CCol>
                  <CCol xs="6" md="6">
                    <CInput type="email" id="email-input" name="email-input" placeholder="Email" autoComplete="email" value={formik.values.Email} {...formik.getFieldProps("Email")}/>
                    <CFormText className="help-block">Enter Email Address</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="date-input">Date of Birth</CLabel>
                  </CCol>
                  <CCol xs="6" md="6">
                    <CInput type="date" id="date-input" name="DOB" placeholder="date" value={formik.values.DOB} {...formik.getFieldProps("DOB")}/>
                    <CFormText>Enter Date of Birth</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Age</CLabel>
                  </CCol>
                  <CCol xs="6" md="6">
                    <CInput id="text-input" name="Age" placeholder="Age" value={formik.values.Age} {...formik.getFieldProps("Age")}/>
                    <CFormText>Enter Age</CFormText>
                  </CCol>
                </CFormGroup>    
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Mobile</CLabel>
                  </CCol>
                  <CCol xs="6" md="6">
                    <CInput id="text-input" name="text-input" placeholder="Mobile Number" alue={formik.values.Mobile}  
{...formik.getFieldProps("Mobile")} />
{formik.touched.Mobile && formik.errors.Mobile ? <span style={{color:'red'}}>{formik.errors.Mobile}</span> : null}
                    <CFormText>Enter Mobile Number</CFormText>
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
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Qualification</CLabel>
                  </CCol>
                  <CCol xs="6" md="6">
                    <CInput id="text-input" name="text-input" placeholder="Qualification" value={formik.values.Qualification} {...formik.getFieldProps("Qualification")}/>
                    <CFormText>Enter Qualification</CFormText>
                  </CCol>
                </CFormGroup>

                {/*<CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Course Enrolled for</CLabel>
                  </CCol>
                  <CCol xs="6" md="4">
                    <CSelect custom name="select" id="select">
                      <option value="0">select course</option>
                      <option value="1">Option #1</option>
                      <option value="2">Option #2</option>
                      <option value="3">Option #3</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
                */}
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Batch</CLabel>
                  </CCol>
                  <CCol xs="6" md="4">
                    <CSelect custom name="batchId" id="select" value={formik.values.batchId} {...formik.getFieldProps("batchId")}>
                      <option value="0">Select Batch</option>
                      <option value="1">A</option>
                      <option value="2">B</option>
                      <option value="3">C</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>

               {/* <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Payment Type</CLabel>
                  </CCol>
                  <CCol xs="6" md="4">
                    <CSelect custom name="select" id="select">
                      <option value="0">select payment type</option>
                      <option value="1">Option #1</option>
                      <option value="2">Option #2</option>
                      <option value="3">Option #3</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
               */}
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Transaction ID</CLabel>
                  </CCol>
                  <CCol xs="6" md="6">
                    <CInput id="text-input" name="paymentMasterId" placeholder="Transaction ID" value={formik.values.paymentMasterId}
                     {...formik.getFieldProps("paymentMasterId")}/>
                    <CFormText>Enter TransactionID</CFormText>
                  </CCol>
                </CFormGroup>
               {/*} <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Amount Paid</CLabel>
                  </CCol>
                  <CCol xs="6" md="6">
                    <CInput id="text-input" name="text-input" placeholder="Paid Amount" />
                    <CFormText>Enter Amount Paid</CFormText>
                  </CCol>
                </CFormGroup>
              */}
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Address line 1</CLabel>
                  </CCol>
                  <CCol xs="6" md="6">
                    <CInput id="text-input" name="text-input" placeholder="Address" value={formik.values.Address}  
{...formik.getFieldProps("Address")} />
{formik.touched.Address && formik.errors.Address ? <span style={{color:'red'}}>{formik.errors.Address}</span> : null}
                    <CFormText>Enter Address</CFormText>
                  </CCol>
                </CFormGroup>
                {/*<CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Address line 2</CLabel>
                  </CCol>
                  <CCol xs="6" md="6">
                    <CInput id="text-input" name="text-input" placeholder="Address" />
                    <CFormText>Enter Address</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Country</CLabel>
                  </CCol>
                  <CCol xs="6" md="4">
                    <CSelect custom name="select" id="select">
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
                    <CSelect custom name="select" id="select">
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
                    <CSelect custom name="select" id="select">
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
                    <CSelect custom name="select" id="select">
                      <option value="0">select city</option>
                      <option value="1">Option #1</option>
                      <option value="2">Option #2</option>
                      <option value="3">Option #3</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>*/}
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">UserName</CLabel>
                  </CCol>
                  <CCol xs="6" md="6">
                    <CInput id="text-input" name="UserName" placeholder="Text" value={formik.values.UserName} {...formik.getFieldProps("UserName")}/>
                    
                    <CFormText>Enter UserName</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Password</CLabel>
                  </CCol>
                  <CCol xs="6" md="6">
                    <CInput id="text-input" name="Password" placeholder="Text" value={formik.values.Password} {...formik.getFieldProps("Password")}/>
                    {formik.touched.Password && formik.errors.Password ? <span style={{color:'red'}}>{formik.errors.Password}</span> : null}
                    <CFormText>Enter Password</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CLabel col md="3" htmlFor="file-input">Upload Photo</CLabel>
                  <CCol xs="6" md="6">
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
export default StudentForm