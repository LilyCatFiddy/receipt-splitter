import React from 'react'
import AddNew from '../components/AddNew'
import GroupSection from '../components/GroupSection'
import CreateandCancel from '../components/CreateandCancel'


function groupCreation() {
  return (
    <>
    <div className="bodyContentAlign">
      <div className="grayed">Enter group name...</div>
      <div>Profile</div>
      <div>Profile</div>
      <GroupSection/>
      <CreateandCancel/>
    </div>
   
 </>
  
  )
}

export default groupCreation