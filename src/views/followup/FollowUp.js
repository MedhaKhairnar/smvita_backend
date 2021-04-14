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
  CInput,
  CLabel,
  CDataTable,
  CRow
} from '@coreui/react'
import { DocsLink } from 'src/reusable'
import { Redirect } from 'react-router-dom';
import usersData from '../users/UsersData';
import FollowUpData from '../users/FollowUpData'

/*const fields=[
  { key: 'id', _classes: 'font-weight-bold' },
  'name', 'address','email'
]*/

const fields = [
  {key: 'id',_style: { width: '20%'}},
  { key: 'enquirer_name', _style: { width: '20%'} },
  
  { key: 'enquirer_address', _style: { width: '20%'} },
  { key: 'enquirer_email', _style: { width: '50%'} },
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
const FollowUp = () => {
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
    function onUpdateEnquirer() {

    setRedirect(true);
}
function onConfirmEnquirer() {

  setRedirect1(true);
}

  return (
    
      <CRow >
        <CCol >
          <CCard>
            <CCardHeader>
              FollowUp Table
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={FollowUpData}
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
                                    Enquirer Information
                                  </h4>
                                  <p className="text-muted">Enquirer ID:{item.id}</p>
                                  <p className="text-muted">Staff ID:{item.staff_id}</p>
                                  <p className="text-muted">Enquirer Name:{item.enquirer_name}</p>
                                  <p className="text-muted">Enquirer Query:{item.enquirer_query}</p>
                                  <p className="text-muted">Enquirer Address:{item.enquirer_address}</p>
                                  <p className="text-muted">Enquirer Email:{item.enquirer_email}</p>
                                  <p className="text-muted">Enquirer Mobile:{item.enquirer_mobile}</p>
                                  <p className="text-muted">Enquirer Alternate Mobile:{item.enquirer_alternate_mobile}</p>
                                  <p className="text-muted">FollowUp Message:{item.followUpMsg}</p>
                                  <p className="text-muted">Enquirer Date:{item.enquiry_date}</p>
                                  <p className="text-muted">Closure Reason :{item.closure_reason}</p>
                                  <p>
                                    <CCol md="3">
                                  <CLabel htmlFor="text-input">FollowUp Message</CLabel>
                                  </CCol>
                                  <CCol xs="12" md="6">
                                  <CInput id="text-input" name="text-input" placeholder="Followup Message" />
                                  <CButton size="sm" color="info" className="ml-1" onClick={onUpdateEnquirer}>
                                    Add    
                                  </CButton>
                                  </CCol>
                                  </p>
                                  <CCol md="3">
                                  <CLabel htmlFor="text-input">Closure Reason</CLabel>
                                  </CCol>
                                  <CCol xs="12" md="6">
                                  <CInput id="text-input" name="text-input" placeholder="Closure Reason" />
                                  <CButton size="sm" color="info" className="ml-1" onClick={onUpdateEnquirer}>
                                    Add    
                                  </CButton>
                                  </CCol>
                                  <hr/>
                                   <CButton size="sm" color="success" className="ml-1" onClick={onConfirmEnquirer} >
                                    Confirm{redirect1?<Redirect push to="/student/StudentForm"/>:null}
                                  </CButton>
                                  <CButton size="sm" color="info" className="ml-1" onClick={onUpdateEnquirer}>
                                    Edit{redirect?<Redirect push to="/enquiry/EnquiryForm"/>:null}
                                    
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
        </CCol>
      </CRow>

    )
}
export default FollowUp