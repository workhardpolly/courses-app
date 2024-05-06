import { useDispatch, useSelector } from 'react-redux';
import YouTube from 'react-youtube';
import { addNote } from '../redux-toolkit/lessonsSlice';
import { useState } from 'react';

function getYoutubeVideoID(link: string = ''): string | null {
  const regex =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

  const match = link.match(regex);

  if (match && match[1]) {
    return match[1];
  } else {
    return null;
  }
}

export default function LessonContent() {
  const currentLessonData = useSelector((state) => state.currentLessonSlice);

  console.log(currentLessonData.notes);

  const [notes, setNotes] = useState(currentLessonData.notes);
  // This module will show the video preview and notes

  console.log(notes);
  const currentLessonName = currentLessonData.name;

  const dispatch = useDispatch();

  const handleSubmitNotes = (e) => {
    e.preventDefault();
    console.log([currentLessonName, e.target[0].value]);

    dispatch(addNote([currentLessonName, e.target[0].value]));

    setNotes('');
  };

  return (
    <div
      style={{
        width: '70%',
        height: '80vh',
        border: '1px dotted black',
        marginLeft: '10px',
        padding: '5px',
        position: 'sticky',
        top: '5px',
      }}>
      <div style={{ width: '100%', height: 'auto', margin: 'auto', textAlign: 'center' }}>
        Lesson "{currentLessonData.title}" Preview
        {/* <YouTube videoId={getYoutubeVideoID(currentLessonData.youtube)} /> */}
      </div>

      <input type='checkbox'></input>
      <span>Completed</span>
      <p>Notes:</p>
      <form onSubmit={handleSubmitNotes}>
        <p>{currentLessonData.notes}</p>
        <label>Notes for the lesson</label>
        <textarea type='text' value={notes} onChange={(e) => setNotes(e.target.value)}></textarea>
        <button type='submit'>Save notes</button>
      </form>
    </div>
  );
}

// when sending note, it goes to state, but input doesn't clears up
