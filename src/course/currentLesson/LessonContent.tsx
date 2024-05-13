import LessonNotes from './LessonNotes';
import LessonCompleted from './LessonCompleted';

import YouTube from 'react-youtube';
import getYoutubeVideoID from './../../utils/getYoutubeVideoID';
import { useSelector } from 'react-redux';

import {
  useAddNoteMutation,
  useGetCurrentLessonQuery,
  useSetCompletedStatusMutation,
} from '../../redux-toolkit/api/apiSlice';

const wrapperStyles = {
  width: '70%',
  height: '80vh',
  border: '1px dotted black',
  marginLeft: '10px',
  padding: '5px',
  position: 'sticky',
  top: '5px',
};

// This module will show the video preview and notes

export default function LessonContent() {
  const currentLessonID = useSelector((state): string => state.currentLesson);
  const [dispatchCompletedStatus] = useSetCompletedStatusMutation();
  const [dispatchNotes] = useAddNoteMutation();

  console.log('currentLessonID', currentLessonID);

  const { data: currentLessonData, isLoading: currentLessonDataIsLoading } = useGetCurrentLessonQuery(currentLessonID);

  function changeCompletedStatus(e) {
    dispatchCompletedStatus({ lessonID: currentLessonID, completed: e.target.checked });
  }

  function updateNotes(e) {
    e.preventDefault();
    dispatchNotes({ lessonID: currentLessonID, notes: e.target[0].value });
  }

  if (currentLessonDataIsLoading) return <div style={wrapperStyles}>Loading...</div>;
  if (!currentLessonData) return <div style={{ ...wrapperStyles, textAlign: 'center' }}>Choose the lesson</div>;

  return (
    <div style={wrapperStyles}>
      <div style={{ border: '1px dotted pink', textAlign: 'center' }}>
        <h2>{currentLessonData.title}</h2>
      </div>
      <div style={{ width: '100%', height: 'auto', margin: 'auto', textAlign: 'center' }}>
        {currentLessonData.youtube ? (
          <YouTube opts={{ width: '90%', height: '360px' }} videoId={getYoutubeVideoID(currentLessonData.youtube)} />
        ) : (
          <p style={{ backgroundColor: 'pink' }}>No video for this lesson</p>
        )}
      </div>

      <LessonCompleted
        completedStatus={currentLessonData.completed}
        changeCompletedStatus={(e) => changeCompletedStatus(e)}
      />

      <LessonNotes
        notes={currentLessonData.notes}
        updateNotes={(e) => {
          updateNotes(e);
        }}
      />
    </div>
  );
}

// when sending note, it goes to state, but input doesn't clears up

// const currentLessonData = useSelector((state) => state.currentLesson);

//   console.log('currentLessonData loaded', currentLessonData);

//   const [completedStatus, setCompletedStatus] = useState(null);
//   console.log('completedStatus', completedStatus);

//   const [notes, setNotes] = useState(null);

//   const [dispatchCompletedStatus] = useSetCompletedStatusMutation();

//   const [dispatchNote] = useAddNoteMutation();

// function changeCompletedStatus(e: Event) {
//   const value = e.target.checked;
//   setCompletedStatus(value);
//   e.preventDefault();
//   dispatchCompletedStatus({ ...currentLessonData, completed: value });
// }

//   function updateNotes(e: Event) {
//     e.preventDefault();
//     const notes = e.target[0].value;
//     dispatchNote({ ...currentLessonData, notes });
//   }

//   useEffect(() => {
//     setCompletedStatus(currentLessonData.completed);
//     setNotes(currentLessonData.notes);
//     console.log('useEffect worked');
//   }, [currentLessonData.completed, currentLessonData.notes]);
