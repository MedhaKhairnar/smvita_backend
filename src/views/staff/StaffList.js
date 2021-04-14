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
  CRow
} from '@coreui/react'
import { DocsLink } from 'src/reusable'
import { Redirect } from 'react-router-dom';
import usersData from '../users/UsersData';
import StaffData from '../users/StaffData';



const fields = [
  {key: 'id',_style: { width: '20%'}},
  { key: 'staff_name', _style: { width: '20%'} },
  
  { key: 'staff_mobile', _style: { width: '20%'} },
  { key: 'staff_email', _style: { width: '50%'} },
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
const StaffList = () => {
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
    function onUpdateStudent() {

    setRedirect(true);
}
function onDeleteStudent() {

  setRedirect1(true);
}

  return (
    
      <CRow >
        <CCol >
          <CCard>
            <CCardHeader>
              Staff Table
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={StaffData}
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
                                    Staff Information
                                  </h4>
                                  <p className="text-muted">Staff ID:{item.id}</p>
                        
                                  <p className="text-muted">Staff Name:{item.staff_name}</p>
                                  <p className="text-muted">Staff Address:{item.staff_address}</p>
                                  <p className="text-muted">Staff Email:{item.staff_email}</p>
                                  <p className="text-muted">Staff Mobile:{item.staff_mobile}</p>
                                  <p className="text-muted">Staff Alternate Mobile:{item.staff_alternate_mobile}</p>

                                  <CButton size="sm" color="info" className="ml-1" onClick={onUpdateStudent}>
                                    Edit{redirect?<Redirect push to="/staff/StaffForm"/>:null}
                                    
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
export default StaffList;