import LessonNotes from './LessonNotes';
import LessonCompleted from './LessonCompleted';

import YouTube from 'react-youtube';
import getYoutubeVideoID from './../../utils/getYoutubeVideoID';
import { useSelector } from 'react-redux';

import { Box, Typography } from '@mui/material';
import {
  useAddNoteMutation,
  useGetCurrentLessonQuery,
  useSetCompletedStatusMutation,
} from '../../redux-toolkit/api/apiSlice';

import type { Lesson } from '../../utils/types';

// This module will show the video preview and notes

export default function LessonContent() {
  interface GetCurrentLesson {
    data: Lesson;
    isLoading: boolean;
  }

  const currentLessonID = useSelector((state): string => state.currentLesson);
  const [dispatchCompletedStatus] = useSetCompletedStatusMutation();
  const [dispatchNotes] = useAddNoteMutation();

  const { data: currentLessonData, isLoading: currentLessonDataIsLoading }: GetCurrentLesson =
    useGetCurrentLessonQuery(currentLessonID);

  function changeCompletedStatus(e: Event) {
    dispatchCompletedStatus({ lessonID: currentLessonID, completed: e.target.checked });
  }

  function addNote(e: Event) {
    e.preventDefault();
    let notesToSubmit = [];

    if (currentLessonData.notes) {
      notesToSubmit = [...currentLessonData.notes, e.target[0].value];
    } else notesToSubmit.push(e.target[0].value);

    dispatchNotes({ lessonID: currentLessonID, notes: notesToSubmit });
  }

  function removeNote(targetIndex: number) {
    const newNotes = currentLessonData.notes.filter((item, index) => index !== targetIndex);

    dispatchNotes({
      lessonID: currentLessonID,
      notes: newNotes,
    });
  }

  let lessonContent;

  if (currentLessonDataIsLoading) {
    lessonContent = <Box>Loading...</Box>;
  } else if (!currentLessonData) {
    lessonContent = <Box>Choose the lesson</Box>;
  } else {
    lessonContent = (
      <Box flex={3} style={{ height: '80vh', position: 'sticky', top: '64px' }}>
        <Typography variant='h3' textAlign='center' margin='10px'>
          {currentLessonData.title}
        </Typography>

        <div style={{ width: '100%', height: 'auto', margin: 'auto', textAlign: 'center' }}>
          {/* {currentLessonData.youtube ? (
            <YouTube opts={{ width: '90%', height: '360px' }} videoId={getYoutubeVideoID(currentLessonData.youtube)} />
          ) : (
            <p style={{ backgroundColor: 'pink' }}>No video for this lesson</p>
          )} */}
        </div>

        <LessonCompleted
          completedStatus={currentLessonData.completed}
          changeCompletedStatus={(e) => changeCompletedStatus(e)}
        />

        <LessonNotes
          notes={currentLessonData.notes ? currentLessonData.notes : []}
          addNote={(e: Event) => addNote(e)}
          removeNote={(targetIndex: number) => removeNote(targetIndex)}
        />
      </Box>
    );
  }

  return lessonContent;
}
