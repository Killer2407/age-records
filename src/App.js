import React, { useState } from 'react'
import Radio from "./components/Radio"
import Table from "./components/Table"
import "h8k-components"

const title = "Birthday Records"

function App() {
  const [sortBy, setSortBy] =useState('');

  const doSortBy = (parameter) => {
    if (parameter === 'name') {
      setSortBy('name')
    } else {
      setSortBy('birth')
    }
  }

  return (
    <div>
      <h8k-navbar header={title}></h8k-navbar>
      <Radio sortBy={sortBy} doSortBy={doSortBy} />
      <Table sortBy={sortBy}/>
    </div>
  )
}

export default App
