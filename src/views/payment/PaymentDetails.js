import React,{useState,useEffect} from 'react'

import {
  //CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CButton,
  CCollapse,
  CButtonGroup,
  CDataTable,
  CFormGroup,
  CLabel,
  CInputRadio,
  CInput,
  CFormText,
  CRow
} from '@coreui/react'
import { DocsLink } from 'src/reusable'
import { Redirect } from 'react-router-dom';
import usersData from '../users/UsersData'



const fields = [
  {key: 'id',_style: { width: '20%'}},
  { key: 'name', _style: { width: '20%'} },
  
  { key: 'address', _style: { width: '20%'} },
  { key: 'email', _style: { width: '50%'} },
  {
    key: 'show_details',
    label: '',
    _style: { width: '1%' },
    sorter: false,
    filter: false
  }
]

{/*const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}*/}
{/*const fields = ['name','address', 'email']*/}
{/*const styles={display: "flex" ,marginLeft: "auto"}*/}
const PaymentDetails = () => {
  const [details, setDetails] = useState([])
  const toggleDetails = (index) => {
    const position = details.indexOf(index)
    let newDetails = details.slice()
    if (position !== -1) {
      newDetails.splice(position, 1)
    } else {
      newDetails = [...details, index]
    }
    setDetails(newDetails)
  }
  const [redirect, setRedirect] = useState(false);
  const [redirect1, setRedirect1] = useState(false);
    function onUpdatePayment() {

    setRedirect(true);
}
function onDeleteEnquirer() {

  setRedirect1(true);
}

const handleOnChange=e=>{
if(e.target.value===1)
{
    
}
}
  return (
    
      <CRow >
          <CFormGroup row>
                  <CCol md="6">
                    <CLabel htmlFor="text-input">Student ID</CLabel>
                  </CCol>
                  <CCol xs="12" md="6">
                    <CInput id="text-input" name="text-input" placeholder="Student ID" />
                    <CFormText>Enter Student ID</CFormText>
                  </CCol>
                </CFormGroup>
      </CRow>

    )
}
export default PaymentDetails;