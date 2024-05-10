import { useSetDoneStatusMutation } from '../../redux-toolkit/api/apiSlice';

export default function LessonCompleted({ completedStatus = false, changeCompletedStatus }) {
  console.log('completed has rendered', completedStatus);

  return (
    <label>
      <input type='checkbox' onChange={changeCompletedStatus} checked={completedStatus}></input>
      Lesson COMPLETED
    </label>
  );
}
