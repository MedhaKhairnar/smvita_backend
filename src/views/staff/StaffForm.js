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

const StaffForm = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>
     <CRow>
     <CCol >
          <CCard>
            <CCardHeader>
                Staff Registration              
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
                    <CLabel htmlFor="hf-password">Password</CLabel>
                  </CCol>
                  <CCol xs="6" md="6">
                    <CInput type="password" id="hf-password" name="hf-password" placeholder="Enter Password" autoComplete="current-password"/>
                    <CFormText className="help-block">Enter password</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="hf-password">Confirm Password</CLabel>
                  </CCol>
                  <CCol xs="6" md="6">
                    <CInput type="password" id="hf-password" name="hf-password" placeholder="Re-enter Password" autoComplete="current-password"/>
                    <CFormText className="help-block">Re-enter password</CFormText>
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
                  <CLabel col md="3" htmlFor="file-input">Upload Photo</CLabel>
                  <CCol xs="12" md="9">
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
export default StaffForm