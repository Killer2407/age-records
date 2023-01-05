import React from 'react'
import Radio from "./components/Radio"
import Table from "./components/Table"
import "h8k-components"

const title = "Birthday Records"

function App() {
  return (
    <div>
      <h8k-navbar header={title}></h8k-navbar>
      <Radio />
      <Table />
    </div>
  )
}

export default App
