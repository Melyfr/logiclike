import './Course.scss'
import ICourse from '../../interfaces/ICourse'

type ICourseProps = {
    course: ICourse;
  }

const Course: React.FC<ICourseProps> = ({course}) => {
  return (
    <div className='course'>
        <div className="course__image" style={{backgroundColor: course.bgColor}}>
            <img src={course.image} alt='Course image' className='course__image__icon'/>
        </div>
        <p className='text course__title'>{course.name}</p>
    </div>
  )
};

export default Course;
