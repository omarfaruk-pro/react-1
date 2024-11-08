
export default function GroupFilter({ handleGroupFilter}) {
  const groups = ['science', 'business', 'humanities'];
  return (
    <>
        <div>
            <select className="select select-bordered w-full max-w-xs" onChange={(event) => handleGroupFilter(event)}>
                <option disabled selected>Sort by group</option>
                <option value="">All</option>
                {
                    groups.map((group) => (
                        <option key={group} value={group}>{group}</option>
                    ))
                }
            </select>
        </div>
    </>
  )
}
