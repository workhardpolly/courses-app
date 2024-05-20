import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

interface LessonCompletedProps {
  completedStatus: boolean;
  changeCompletedStatus: (newCompletedStatus: boolean) => void;
}

export default function LessonCompleted({ completedStatus = false, changeCompletedStatus }: LessonCompletedProps) {
  console.log('rendered', completedStatus);

  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox onChange={(e) => changeCompletedStatus(e.target.checked)} checked={completedStatus} />}
        label='Lesson COMPLETED'
      />
    </FormGroup>
  );
}
