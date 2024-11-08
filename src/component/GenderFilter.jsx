

export default function GenderFilter({handleGenderFilter}) {
    const genders = ['male', 'female'];
  return (
    <>
        <div>
            <select className="select select-bordered w-full" onChange={(event) => handleGenderFilter(event)}>
                <option disabled selected>Sort by gender</option>
                <option value="">All</option>
                {
                    genders.map((gender) => (
                        <option key={gender} value={gender}>{gender}</option>
                    ))
                }
            </select>
        </div>
    </>
  )
}
