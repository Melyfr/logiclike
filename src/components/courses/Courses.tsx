import './Courses.scss'
import Course from '../course/Course';
import ICourse from '../../interfaces/ICourse'

type ICoursesProps = {
  courses: ICourse[];
  currTag: string;
}

 const Courses: React.FC<ICoursesProps> = ({courses, currTag}) => {
  return (
    <div className='courses'>
      {courses.map(course => {
        if (currTag === 'Все темы' || course.tags.includes(currTag)) {
          return <Course key={course.id} course={course}/>
        }
      })}
    </div>
  )
};

export default Courses;
