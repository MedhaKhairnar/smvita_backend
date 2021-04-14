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
import StudentData from '../users/StudentData';



const fields = [
  {key: 'id',_style: { width: '20%'}},
  { key: 'student_name', _style: { width: '20%'} },
  
  { key: 'course_name', _style: { width: '20%'} },
  { key: 'batch_name', _style: { width: '50%'} },
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
const StudentManage = () => {
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
              Student Table
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={StudentData}
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
                                    Student Information
                                  </h4>
                                  <p className="text-muted">Student ID:{item.id}</p>
                                  <p className="text-muted">Student Name:{item.student_name}</p>
                                  <p className="text-muted">Student Course:{item.course_name}</p>
                                  <p className="text-muted">Student Batch:{item.batch_name}</p>
                                  <p className="text-muted"> Gender:{item.student_gender}</p>
                                  <p className="text-muted">Student Address:{item.student_address}</p>
                                  <p className="text-muted"> Date of Birth:{item.student_DateOfBirth}</p>
                                  <p className="text-muted">Student Age:{item.student_age}</p>
                                  <p className="text-muted">Student Email:{item.student_email}</p>
                                  <p className="text-muted">Student Qualification:{item.student_qualification}</p>
                                  <p className="text-muted">Student Mobile:{item.student_mobile}</p>
                                  <p className="text-muted">Student Alternate Mobile:{item.student_alternate_mobile}</p>

                                  <CButton size="sm" color="info" className="ml-1" onClick={onUpdateStudent}>
                                    Edit{redirect?<Redirect push to="/student/StudentForm"/>:null}
                                    
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
export default StudentManage