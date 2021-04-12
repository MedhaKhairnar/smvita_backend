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

const PaymentForm = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>
     <CRow>
     <CCol >
          <CCard>
            <CCardHeader>
                Payment              
            </CCardHeader>
    
            <CCardBody>
            
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
              <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Student ID</CLabel>
                  </CCol>
                  <CCol xs="6" md="6">
                    <CInput id="text-input" name="text-input" placeholder="Text" />
                    <CFormText>Enter Student ID</CFormText>
                  </CCol>
                </CFormGroup>
                
                
               <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Student Name</CLabel>
                  </CCol>
                  <CCol xs="6" md="6">
                    <CInput id="text-input" name="text-input" placeholder="Student Name" />
                    <CFormText>Enter Student Name</CFormText>
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Course</CLabel>
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
                      <option value="0">select batch</option>
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
                    <CFormText>Enter Transaction ID</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">Paid Amount</CLabel>
                  </CCol>
                  <CCol xs="6" md="6">
                    <CInput id="text-input" name="text-input" placeholder="Paid Amount" />
                    <CFormText>Enter Paid Amount</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="date-input">Payment Date</CLabel>
                  </CCol>
                  <CCol xs="6" md="6">
                    <CInput type="date" id="date-input" name="date-input" placeholder="Payment Date" />
                    <CFormText>Enter Payment Date</CFormText>
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
export default PaymentForm