import { useSetDoneStatusMutation } from '../../redux-toolkit/api/apiSlice';

export default function LessonCompleted({ completedStatus = false, changeCompletedStatus }) {
  return (
    <label>
      <input type='checkbox' onChange={changeCompletedStatus} checked={completedStatus}></input>
      Lesson COMPLETED
    </label>
  );
}
