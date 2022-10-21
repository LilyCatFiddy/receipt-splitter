import Head from 'next/head'
import AddNewGroup from '../components/AddNewGroup'

export default function Home() {
  return (
    <div>
      <h1>Select Group</h1>
      <div>This is a group Section</div>
      <div>This is a group Section</div>
      <AddNewGroup/>
    </div>
  )
}
