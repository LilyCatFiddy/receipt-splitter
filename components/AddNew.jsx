import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import Link from 'next/link'


function AddNewGroup({description, link}) {
  return (
    <div>
      <Link href={link}>
        <div className="grayed">
          <AddIcon/>{description}
        </div>
      </Link>  
    </div>
  )
}

export default AddNewGroup