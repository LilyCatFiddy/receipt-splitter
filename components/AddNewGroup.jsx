import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import Link from 'next/link'

function AddNewGroup() {
  return (
    <div className="grayed">
      <Link href="/groupCreation"><div><AddIcon/>Add New Group</div></Link>  
    </div>
  )
}

export default AddNewGroup