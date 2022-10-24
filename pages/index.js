import Head from 'next/head'
import AddNew from '../components/AddNew'

export default function Home() {
  return (
    <div className="center">
      <h1>Select Group</h1>
      <div>This is a group Section</div>
      <div>This is a group Section</div>
      <AddNew link="/groupCreation" description="Add New Group" />
    </div>
  )
}
