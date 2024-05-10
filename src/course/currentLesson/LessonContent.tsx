import LessonNotes from './LessonNotes';
import LessonCompleted from './LessonCompleted';

import YouTube from 'react-youtube';
import getYoutubeVideoID from './../../utils/getYoutubeVideoID';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useAddNoteMutation, useSetCompletedStatusMutation } from '../../redux-toolkit/api/apiSlice';

// This module will show the video preview and notes

export default function LessonContent() {
  const currentLessonData = useSelector((state) => state.currentLesson);

  console.log('currentLessonData loaded', currentLessonData);

  const [completedStatus, setCompletedStatus] = useState(null);
  console.log('completedStatus', completedStatus);

  const [notes, setNotes] = useState(null);

  const [dispatchCompletedStatus] = useSetCompletedStatusMutation();

  const [dispatchNote] = useAddNoteMutation();

  function changeCompletedStatus(e: Event) {
    const value = e.target.checked;
    setCompletedStatus(value);
    e.preventDefault();
    dispatchCompletedStatus({ ...currentLessonData, completed: value });
  }

  function updateNotes(e: Event) {
    e.preventDefault();
    const notes = e.target[0].value;
    dispatchNote({ ...currentLessonData, notes });
  }

  useEffect(() => {
    setCompletedStatus(currentLessonData.completed);
    setNotes(currentLessonData.notes);
    console.log('useEffect worked');
  }, [currentLessonData.completed, currentLessonData.notes]);

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

      <LessonCompleted completedStatus={completedStatus} changeCompletedStatus={changeCompletedStatus} />

      <LessonNotes notes={notes} updateNotes={updateNotes} />
    </div>
  );
}

// when sending note, it goes to state, but input doesn't clears up