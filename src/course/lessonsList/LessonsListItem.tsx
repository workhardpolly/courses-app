import type { Lesson } from './LessonsList';

export default function LessonsListItem(props: { lesson: Lesson }) {
  const lesson = props.lesson;

  return (
    <div id={lesson.name} style={{ border: '1px solid red', padding: '5px', marginTop: '5px' }}>
      <p
        style={{
          position: 'relative',
          textAlign: 'center',
          backgroundColor: `${lesson.published ? 'green' : 'grey'}`,
        }}>
        {lesson.published ? 'Published' : 'Not published'}
      </p>
      <h3>{lesson.title}</h3>

      <p>Type: {lesson.type}</p>
      <p>Short summary: {lesson.shortSummary}</p>
      <p>
        {lesson.youtube ? (
          <a href={lesson.youtube} target='blank'>
            Watch on YouTube
          </a>
        ) : (
          <p style={{ backgroundColor: 'pink', textAlign: 'center' }}>No video</p>
        )}
      </p>
      <label style={{ backgroundColor: `${lesson.completed ? 'green' : 'grey'}` }}>Lesson completed</label>
    </div>
  );
}
