import LessonContent from './LessonContent';
import LessonsList from './LessonsList';

// import { useSelector } from 'react-redux';

export default function CoursesPage() {
  // const currentLessonData = useSelector((state) => state.lessonSlice.lessonData);

  return (
    <div style={{ border: '1px solid yellow' }}>
      <h1>Content</h1>

      <div style={{ display: 'flex', padding: '5px' }}>
        <LessonsList />
        <LessonContent />
      </div>
    </div>
  );
}
