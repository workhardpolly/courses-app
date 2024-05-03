import { Lesson } from './LessonsList';

export default function LessonsListItem(props: { lesson: Lesson }) {
  const lesson = props.lesson;
  return (
    <div id={lesson.name} style={{ border: '1px solid red', padding: '5px', marginTop: '5px' }}>
      <p>Title: {lesson.title}</p>
      <p>
        Name: {lesson.name} <span>isPublished</span>
      </p>
      <p>Type: {lesson.type}</p>
      <p>Short summary: {lesson.shortSummary}</p>
      <p>
        <a href={lesson.youtube} target='blank'>
          Watch on YouTube
        </a>
      </p>
    </div>
  );
}
