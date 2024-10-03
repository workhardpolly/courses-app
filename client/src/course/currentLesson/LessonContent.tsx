import LessonNotes from "./LessonNotes";
import LessonCompleted from "./LessonCompleted";

import YouTube from "react-youtube";
import getYoutubeVideoID from "../../utils/getYoutubeVideoID";
import { useSelector } from "react-redux";

import { Box, Typography } from "@mui/material";
import {
  useAddNoteMutation,
  useGetCurrentLessonQuery,
  useSetCompletedStatusMutation,
} from "../../redux-toolkit/api/apiSlice";

import type { Lesson } from "../../utils/types";

export default function LessonContent() {
  interface GetCurrentLesson {
    data: Lesson;
    isLoading: boolean;
  }

  const currentLessonID = useSelector(
    (state: object): string => state.currentLesson
  );
  const [dispatchCompletedStatus] = useSetCompletedStatusMutation();
  const [dispatchNotes] = useAddNoteMutation();

  const {
    data: currentLessonData,
    isLoading: currentLessonDataIsLoading,
  }: GetCurrentLesson = useGetCurrentLessonQuery(currentLessonID);

  function changeCompletedStatus(newCompletedStatus: boolean) {
    dispatchCompletedStatus({
      lessonID: currentLessonID,
      completed: newCompletedStatus,
    });
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
    const newNotes = currentLessonData.notes.filter(
      (item, index) => index !== targetIndex
    );

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
      <Box
        flex={5}
        padding="10px"
        style={{
          height: "90vh",
          position: "sticky",
          top: "64px",
          overflowY: "auto",
        }}
      >
        <Typography variant="h3" textAlign="center" margin="10px">
          {currentLessonData.title}
        </Typography>

        {currentLessonData.youtube ? (
          <YouTube
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              left: "0",
              right: "0",
              textAlign: "center",
            }}
            // style={{ width: '100%', height: 'fit-content', margin: '0 auto' }}
            // opts={{ width: '100%', height: '400px' }}

            videoId={getYoutubeVideoID(currentLessonData.youtube)}
          />
        ) : (
          <p style={{ backgroundColor: "pink", textAlign: "center" }}>
            No video for this lesson
          </p>
        )}

        <LessonCompleted
          completedStatus={currentLessonData.completed}
          changeCompletedStatus={(newCompletedStatus) =>
            changeCompletedStatus(newCompletedStatus)
          }
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
