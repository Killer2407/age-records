import React from 'react'

function Radio({doSortBy}) {

  const onChange = (e) => {
    doSortBy(e.target.value)
  }
  return (
    <div className="layout-row align-items-center justify-content-center mt-75">
      <label className="pr-10">Sort By</label>
      <input type="radio" onChange={onChange} name="sort" value="name" data-testid="name"/>
      <label className="px-4">Name</label>
      <input type="radio" onChange= {onChange} name="sort" value = "age" data-testid="age"/>
      <label className="px-4">Age</label>
    </div>
  )
}

export default Radio
