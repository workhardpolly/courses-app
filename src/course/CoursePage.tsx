import { useState } from 'react';
import LessonContent from './LessonContent';
import LessonsList from './LessonsList';

export default function CoursesPage() {
  const [currentLesson, setCurrnetLesson] = useState('https://www.youtube.com/watch?v=Cf8uCGTLnm4');

  return (
    <div style={{ border: '1px solid yellow' }}>
      <h1>Content</h1>

      <div style={{ display: 'flex', padding: '5px' }}>
        <LessonsList />
        <LessonContent currentLesson={currentLesson} />
      </div>
    </div>
  );
}
