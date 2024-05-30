import { useState, useEffect  } from 'react'
import './reset.css'
import './App.scss'
import Sidebar from '../sidebar/Sidebar'
import Courses from '../courses/Courses'
import ICourse from '../../interfaces/ICourse'

const App = () => {
  const [courses, setCourses] = useState<ICourse[]>([]);
  const [tags, setTags] = useState<Set<string>>(new Set(['Все темы']));
  const [currTag, setCurrTag] = useState<string>('Все темы');

  const fetchCourses = async () => {
    try {
      const response = await fetch('https://logiclike.com/docs/courses.json');
      const data = await response.json();
      setCourses(data);
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    }
  };
  
  useEffect(() => {
    fetchCourses();
  }, []);

  useEffect(() => {
    courses.forEach(course => {
      course.tags.forEach(tag => {
        setTags(prev => new Set([...prev, tag]));
      })
    })
  }, [courses]);

  return (
    <main className='container'>
      <Sidebar tags={tags} currTag={currTag} setCurrTag={setCurrTag}/>
      <Courses courses={courses} currTag={currTag}/>
    </main>
  );
};

export default App;