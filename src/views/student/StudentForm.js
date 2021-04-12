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

const StudentForm = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>
     <CRow>
     <CCol >
          <CCard>
            <CCardHeader>
                Student Registration              
            </CCardHeader>
    
            <CCardBody>
            
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
              <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Student Name</CLabel>
                  </CCol>
                  <CCol xs="6" md="6">
                    <CInput id="text-input" name="text-input" placeholder="Text" />
                    <CFormText>Enter Full Name</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
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
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Gender</CLabel>
                  </CCol>
                  <CCol md="9">
                    <CFormGroup variant="custom-radio" inline>
                      <CInputRadio custom id="inline-radio1" name="inline-radios" value="option1" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-radio1">Male</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-radio" inline>
                      <CInputRadio custom id="inline-radio2" name="inline-radios" value="option2" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-radio2">Female</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-radio" inline>
                      <CInputRadio custom id="inline-radio3" name="inline-radios" value="option3" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-radio3">Other</CLabel>
                    </CFormGroup>               
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="email-input">Email</CLabel>
                  </CCol>
                  <CCol xs="6" md="6">
                    <CInput type="email" id="email-input" name="email-input" placeholder="Email" autoComplete="email"/>
                    <CFormText className="help-block">Enter Email Address</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="date-input">Date of Birth</CLabel>
                  </CCol>
                  <CCol xs="6" md="6">
                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                    <CFormText>Enter Date of Birth</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Age</CLabel>
                  </CCol>
                  <CCol xs="6" md="6">
                    <CInput id="text-input" name="text-input" placeholder="Age" />
                    <CFormText>Enter Age</CFormText>
                  </CCol>
                </CFormGroup>    
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Mobile</CLabel>
                  </CCol>
                  <CCol xs="6" md="6">
                    <CInput id="text-input" name="text-input" placeholder="Mobile Number" />
                    <CFormText>Enter Mobile Number</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Qualification</CLabel>
                  </CCol>
                  <CCol xs="6" md="6">
                    <CInput id="text-input" name="text-input" placeholder="Qualification" />
                    <CFormText>Enter Qualification</CFormText>
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
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

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Batch</CLabel>
                  </CCol>
                  <CCol xs="6" md="4">
                    <CSelect custom name="select" id="select">
                      <option value="0">Select Batch</option>
                      <option value="1">Option #1</option>
                      <option value="2">Option #2</option>
                      <option value="3">Option #3</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
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

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Transaction ID</CLabel>
                  </CCol>
                  <CCol xs="6" md="6">
                    <CInput id="text-input" name="text-input" placeholder="Transaction ID" />
                    <CFormText>Enter TransactionID</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Amount Paid</CLabel>
                  </CCol>
                  <CCol xs="6" md="6">
                    <CInput id="text-input" name="text-input" placeholder="Paid Amount" />
                    <CFormText>Enter Amount Paid</CFormText>
                  </CCol>
                </CFormGroup>
                
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Address line 1</CLabel>
                  </CCol>
                  <CCol xs="6" md="6">
                    <CInput id="text-input" name="text-input" placeholder="Address" />
                    <CFormText>Enter Address</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
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
                </CFormGroup>
                <CFormGroup row>
                  <CLabel col md="3" htmlFor="file-input">Upload Photo</CLabel>
                  <CCol xs="6" md="6">
                    <CInputFile id="file-input" name="file-input"/>
                  </CCol>
                </CFormGroup>

              </CForm>
            </CCardBody>  
            <CCardFooter>
              <CButton type="submit" size="sm" color="primary"className="ml-1"> Submit</CButton>
              <CButton type="reset" size="sm" color="danger"className="ml-1">Reset</CButton>
            </CCardFooter>  
            </CCard>
      </CCol>      
      </CRow>
      
    </>
  )
}
export default StudentForm