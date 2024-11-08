
import { useState } from 'react';
import './App.css'
import DataTable from './component/DataTable'
import GroupFilter from './component/GroupFilter';
import GenderFilter from './component/GenderFilter';
import MarksFilter from './component/MarksFilter';

export default function App() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Omar Faruk', gender: 'male', group: 'science', mark: 90 },
    { id: 2, name: 'Antu Ghosh', gender: 'male', group: 'business', mark: 80 },
    { id: 3, name: 'Asif', gender: 'male', group: 'humanities', mark: 85 },
    { id: 4, name: 'Tabassum Fariya', gender: 'female', group: 'business', mark: 60 },
    { id: 5, name: 'Nusrat Jahan', gender: 'female', group: 'science', mark: 30 },
  ]);

  const removeStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  }


  const [genderFilter, setGenderFilter] = useState("");
  const handleGenderFilter = (event) => {
    setGenderFilter(event.target.value);
  }

  const [groupFilter, setGroupFilter] = useState("");
  const handleGroupFilter = (event) => {
    setGroupFilter(event.target.value);
  };

  const [marksFilter, setMarksFilter] = useState("");
  const handleMarksFilter = (event) => {
    setMarksFilter(event.target.value);
  }

  const filtered = students.filter((student) => {
    return (
      (!genderFilter || student.gender === genderFilter)&&
      (!groupFilter || student.group === groupFilter) &&
      (!marksFilter || (student.mark >= 40 && marksFilter === "pass") || (student.mark < 40 && marksFilter === "fail"))
    );
  });
  
  return (
    <>
      <DataTable 
      students={filtered} removeStudent={removeStudent}
       groupFilterRender={<GroupFilter handleGroupFilter={handleGroupFilter}/>}
       genderFilterRender={<GenderFilter handleGenderFilter={handleGenderFilter}/>}
       marksFilterRender={<MarksFilter handleMarksFilter={handleMarksFilter}/>}
       />
    </>
  )
}

