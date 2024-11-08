

export default function MarksFilter({handleMarksFilter}) {
  return (
    <>
        <div>
            <select className="select select-bordered w-full" onChange={(event) => handleMarksFilter(event)}>
                <option disabled selected>Sort by mark</option>
                <option value="">All</option>
                <option value="pass">Pass</option>
                <option value="fail">Fail</option>
            </select>
        </div>
    </>
  )
}
