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
import {useEffect} from 'react';
const StudentForm = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)
  const [items, setItems] = React.useState([])
  const formik = useFormik({
    initialValues: {
            Name: '',
            Email: '',
            Address: '',
            Gender: '', 
            Mobile : '',
            DOB: '',
            Age: '',
            Qualification: '',
            Mobile: '',
            AlternateMobile: '',
            //IsActive: Joi.boolean(),
            // UserName: Joi.string().min(2).max(32),  
            // Password: Joi.string().min(2).max(32),
            PhotoUrl: '',
            batchId: {},
            IsEnrolledByEnquiry:{},
            paymentMasterId:{}
    },
    validationSchema: yup.object({
   
     Name: yup.string()
     .min(3, 'Name should be greater than 3 characters')
       .max(32, 'Name should not exceed 32 Characters')
  
       .required('Please Enter Student Name'),


   Email: yup.string()
      
        .required('Please Enter email address'),

  
     Address: yup.string()
     .min(2,'Address should be greater than 2 characters')
     .max(300, 'Address should be less than 300 characters')
         .required('Please Enter Student address '),
    
  
    Gender: yup.string()
         .min(4,'Gender should be greater than 4 characters')
         .max(10, 'Gender should be less than 10 characters')
             .required('Please Enter Gender '),
     Mobile: yup.string()
  
        .min(10, 'Mobile number should be 10 digits')
  
       .required('Please Enter Mobile number'),
  
       Age: yup.number()  
       .required('Please Enter Age'),
       Qualification: yup.string()
  
       .min(2, 'Qualification should be at leat 2 characters')
 
      .required('Please Enter Qualification'),
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
  

  useEffect(() => {
    async function fetchData() {
      var data = await fetch("http://localhost:5050/Batch/batches", {
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
                    {formik.touched.Email && formik.errors.Email ? <span style={{color:'red'}}>{formik.errors.Email}</span> : null}
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
                    {formik.touched.Age && formik.errors.Age ? <span style={{color:'red'}}>{formik.errors.Age}</span> : null}
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
                
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Qualification</CLabel>
                  </CCol>
                  <CCol xs="6" md="6">
                    <CInput id="text-input" name="text-input" placeholder="Qualification" value={formik.values.Qualification} {...formik.getFieldProps("Qualification")}/>
                    {formik.touched.Qualification && formik.errors.Qualification ? <span style={{color:'red'}}>{formik.errors.Qualification}</span> : null}
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
                    <CSelect custom name="batchId.batch" id="select" value="['batchId.batch']" {...formik.getFieldProps("batchId.batch")}>
                    {items.map((item, i)=>{return(<option key={i} value={item._id}>{item.Name}</option>)})}
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