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
import PaymentData from '../users/PaymentData'



const fields = [
  {key: 'id',_style: { width: '20%'}},
  { key: 'student_name', _style: { width: '20%'} },
  
  { key: 'payment_amount', _style: { width: '20%'} },
  { key: 'payment_remaining', _style: { width: '50%'} },
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
    
      < >
        <CRow>
          <CFormGroup row>
                  <CCol md="6">
                    <CLabel htmlFor="text-input">Student ID</CLabel>
                  </CCol>
                  <CCol xs="12" md="6">
                    <CInput id="text-input" name="text-input" placeholder="Student ID" />
                    <hr/>
                    <CButton type="submit" size="sm" color="primary"className="ml-1"> Submit</CButton>
                  </CCol>
                </CFormGroup>
                </CRow> 
               
                <CCard>
            <CCardHeader>
              Payment Table
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={PaymentData}
              fields={fields}
              hover
              display= "flex"
              striped
              bordered
              size="sm"
            
              itemsPerPage={10}
              pagination
              scopedSlots = {{
                'show_details':
                          (item, index)=>{
                            return (
                              <td className="py-2">
                                <CButton
                                  color="primary"
                                  variant="outline"
                                  shape="square"
                                  size="sm"
                                  onClick={()=>{toggleDetails(index)}}
                                >
                                  {details.includes(index) ? 'Hide' : 'Show'}
                                </CButton>
                              </td>
                              )
                          },
                        'details':
                            (item, index)=>{
                              return (
                              <CCollapse show={details.includes(index)}>
                                <CCardBody>
                                  <h4>
                                    Batch Information
                                  </h4>
                                  <p className="text-muted">Student ID:{item.student_id}</p>
                                  <p className="text-muted">Batch ID:{item.batch_id}</p>
                                  <p className="text-muted">Student Name:{item.student_name}</p>
                                  <p className="text-muted">Course Fees:{item.course_fees}</p>
                                  <p className="text-muted">Payment ID:{item.payment_id}</p>
                                  <p className="text-muted">Payment Type:{item.payment_type}</p>
                                  <p className="text-muted">Payment Date:{item.payment_date}</p>
                                  <p className="text-muted">Amount Made by this Transaction:{item.payment_amount}</p>
                                  <p className="text-muted">Total Amount Paid:{item.payment_total}</p>
                                  <p className="text-muted">Remaining Amount:{item.payment_remaining}</p>
                                  <p className="text-muted">Receipt Send:{item.payment_receipt_send}</p>
                                  <CButton size="sm" color="info" className="ml-1" >
                                    Edit{redirect?<Redirect push to="/batch/BatchForm"/>:null}
                                    
                                  </CButton>
                                  <CButton size="sm" color="danger" className="ml-1">
                                    Delete
                                  </CButton>
                                </CCardBody>
                              </CCollapse>
                            )
                          }
                }}
            />
            
    {/*<CButton  marginLeft= "auto"  color="secondary">Edit</CButton>
    <CButton color="secondary">Confirm</CButton>
    <CButton color="secondary">Delete</CButton>
  */}
               
            </CCardBody>
          </CCard>
         
      </>

    )
}
export default PaymentDetails;