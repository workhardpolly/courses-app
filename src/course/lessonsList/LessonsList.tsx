import { useEffect, useState } from 'react';
import LessonsListItem from './LessonsListItem';
import { useGetLessonsQuery } from '../../redux-toolkit/api/apiSlice.ts';

// import fetchLessons from '../utils/useFetch';
import { useDispatch } from 'react-redux';
import { chooseLesson } from '../../redux-toolkit/currentLessonSlice.ts';
// import useFetch from '../utils/useFetch';

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
  notes?: string;
  done?: boolean;
};

export default function LessonsList() {
  // console.log(useGetLessonsQuery);

  const dispatch = useDispatch();

  const { data: lessonsList, isLoading, isSuccess, isError, error } = useGetLessonsQuery();

  // const lessonsList = useFetch('http://localhost:65065/lessons').data;

  let content;

  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = (
      <ol>
        {lessonsList.map((lesson: Lesson) => {
          return (
            <li key={lesson.name} onClick={() => dispatch(chooseLesson(lesson.id))}>
              <LessonsListItem lesson={lesson} />
            </li>
          );
        })}
      </ol>
    );
  } else if (isError) {
    content = <p>{error}</p>;
  }

  return (
    <div style={{ width: '30%', border: '1px dotted blue', padding: '5px' }}>
      <p>Lessons list</p>
      <p>This element designed to render the parsed pist of lessons</p>
      {content}
    </div>
  );
}
