import LessonsListItem from './LessonsListItem.tsx';
import { useGetLessonsQuery } from '../../redux-toolkit/api/apiSlice.ts';

import { useDispatch } from 'react-redux';
import { chooseLesson } from '../../redux-toolkit/currentLessonSlice.ts';
import { Box, List, ListItem } from '@mui/material';

import type { Lesson } from '../../utils/types.ts';

export default function LessonsList() {
  // console.log(useGetLessonsQuery);

  const dispatch = useDispatch();

  const { data: lessonsList, isLoading, isSuccess, isError, error } = useGetLessonsQuery();

  let content;

  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = (
      <List>
        {lessonsList.map((lesson: Lesson) => {
          return (
            <ListItem
              sx={{ margin: '1px', padding: '0px', width: '100%' }}
              key={lesson.id}
              onClick={() => dispatch(chooseLesson(lesson.id))}>
              <LessonsListItem lesson={lesson} />
            </ListItem>
          );
        })}
      </List>
    );
  } else if (isError) {
    content = <p>{error}</p>;
  }

  return (
    <Box
      flex={2}
      p={1}

      // sx={{ display: { xs: 'none', md: 'block' } }}
    >
      {content}
    </Box>
  );
}
