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
import react from 'react';
const EnquiryForm = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)
  const [items, setItems] = React.useState([])
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
            Email: '',
            Name: '',
            Address: '',
            //Date: '',
            
            Mobile: '',
            AlternateMobile:'',
            CourseId:{},
           // ClosureReasonId: {},
            StaffId: {},
            EnquirerQuery: ''
  },
  validationSchema: yup.object({
    
   Name: yup.string()
   .min(3, 'Name should be greater than 3 characters')
     .max(15, 'Name should not exceed 15 Characters')

     .required('Please Enter Enquirer Name'),



   Address: yup.string()
   .min(3, 'Name should be greater than 3 characters')
   .max(300, 'Address should be less than 300 characters')
       .required('Please Enter Enquirer address '),
  

   Mobile: yup.number()
   .min(10, 'Mobile number should be 10 digits')
     // .max(10, 'Mobile number should be 10 digits')

     .required('Please Enter Mobile number'),

     Email: yup.string()
     .min(3, 'Mobile number should be 3 characters ')
     .required('Please Enter Email address'),

     //CourseId: yup.object()
     //.required('Please Enter CourseId'),

     EnquirerQuery: yup.string()
     .min(3, 'Query should be greater than 3 characters')
     .max(300, 'Query should be less than 300 characters')
         .required('Please Enter Query '),
  
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
        console.log("Enquirer added");
    });
  },
}); 



const coursess=[{id: 'A', name: 'dac'},
{id: 'B', name: 'DBDA'},
{id: 'C', name: 'MSCIT'}]
let courses=items.map((item, i)=>{return(<option key={i} value={item}>{item.Name}</option>)});


var items1=[];

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
  
  /*fetch("http://localhost:5050/Course/courses", {
        method: 'GET',
        headers: { 'Content-type': 'application/json' },
        //body: demo
    }).then(response=>{return response.json();
              })
    .then((data) => {
        setItems({
          items:data
        })
        items1:data
        console.log(data);
        console.log("Enquirer added");
    });*/
//});


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
                    
                  </CCol>
                </CFormGroup>
               {<CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Course</CLabel>
                  </CCol>
                  <CCol xs="6" md="4">

                  
                    <CSelect custom name="CourseId.course" id="select" value="['CourseId.course']" {...formik.getFieldProps("CourseId.course")}>
                    
                    {items.map((item, i)=>{return(<option key={i} value={item._id}>{item.Name}</option>)})}
                    </CSelect>
                    {formik.touched.CourseId && formik.errors.CourseId ? <span style={{color:'red'}}>{formik.errors.CourseId}</span> : null}
                  </CCol>
                </CFormGroup>
}
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="textarea-input">Query</CLabel>
                  </CCol>
                  <CCol xs="6" md="6">
                    <CTextarea 
                      name="EnquirerQuery" 
                      id="textarea-input" 
                      rows="3"
                      placeholder="Query" value={formik.values.EnquirerQuery} {...formik.getFieldProps("EnquirerQuery")} 
                  
                  />
                  {formik.touched.EnquirerQuery && formik.errors.EnquirerQuery ? <span style={{color:'red'}}>{formik.errors.EnquirerQuery}</span> : null}
                  </CCol>
                  
                </CFormGroup>
                
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="textarea-input">Adress</CLabel>
                  </CCol>
                  <CCol xs="6" md="6">
                    <CInput id="textarea-input" name="Address" placeholder="Adress" value={formik.values.Address}  
{...formik.getFieldProps("Address")}/>
{formik.touched.Address && formik.errors.Address ? <span style={{color:'red'}}>{formik.errors.Address}</span> : null}
                    <CFormText>Enter Address</CFormText>
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