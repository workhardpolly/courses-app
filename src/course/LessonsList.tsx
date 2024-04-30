import { useEffect, useState } from 'react';
import LessonsListItem from './LessonsListItem';
import fetchLessons from '../utils/fetchLessons';
export type Lesson = {
  name: string;
  title: string;
  type: 'string';
  published?: boolean;
  links?: [string, string][];
  hidden?: boolean;
  shortSummary?: string;
  keyPoints?: string[];
  takeaways?: string[];
  youtube?: string;
  prerequisite?: string[];
  hometask?: string[];
};

export default function LessonsList() {
  const [lessonsList, setLessonsList] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  const lessonsUrl = 'https://raw.githubusercontent.com/Drag13/react-learning-course-short/master/course.json';

  useEffect(() => {
    fetchLessons(lessonsUrl).then((lessonsData: object) => setLessonsList(lessonsData.lessons));
    setIsloading(false);
  }, []);

  return (
    <div style={{ width: '30%', border: '1px dotted blue', padding: '5px' }}>
      <p>Lessons list</p>
      <p>This element designed to render the parsed pist of lessons</p>
      {isLoading ? (
        <p>'loading'</p>
      ) : (
        <ul>
          {lessonsList.map((lesson: Lesson) => {
            return (
              <li key={lesson.name} onClick={() => console.log(`you clicked lesson: ${lesson.name}`)}>
                <LessonsListItem lesson={lesson} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
