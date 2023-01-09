import React from 'react'

function Table({sortBy}) {
  const people = [
    {
      name: "Rhianna Johnson",
      birth: "11/30/2011",
    },
    {
      name: "Aiden Shaw",
      birth: "09/16/1992",
    },
    {
      name: "Trevon Floyd",
      birth: "01/16/1992",
    },
    {
      name: "Melanie Yates",
      birth: "12/12/2001",
    },
    {
      name: "Chris Andrews",
      birth: "02/09/1891",
    },
    {
      name: "Jacinda Miller",
      birth: "12/01/1982",
    },
    {
      name: "Will Davis",
      birth: "11/30/2011",
    },
    {
      name: "Eliza Baxter",
      birth: "10/31/1999",
    },
  ]

  const compareDates = () => {
    return people.sort((a,b) => {
      return new Date(a.birth) - new Date(b.birth);
    })
  }

  const compareNames = () => {
    return people.sort((a,b) => {
      const person1 = a.name.toLowerCase();
      const person2 = b.name.toLowerCase();
      return person1 < person2 ? -1 : person1 > person2 ? 1 : 0;
    })
  }

  return (
    <div className="table-div">
      <div className="card w-50 mx-auto mt-20 pb-30">
        <table data-testid="table">
          <thead>
            <tr>
              <th className="course-name">Person Name</th>
              <th className="duration">Date of Birth</th>
            </tr>
          </thead>
          <tbody>
            {!sortBy &&
              people.map((item) =>
                <tr>
                  <td>{item.name}</td>
                  <td>{item.birth}</td>
                </tr>
              )}
            {sortBy === 'name' &&
              compareNames().map((item) => {
                return (
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.birth}</td>
                  </tr>
                )
              })}
              {sortBy === 'birth' &&
              compareDates().map((item) => {
                return (
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.birth}</td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table


