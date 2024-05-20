import type { Lesson } from './LessonsList';
import { Box, Card, CardContent, Typography, Chip, Link, Divider } from '@mui/material';

export default function LessonsListItem(props: { lesson: Lesson }) {
  const lesson = props.lesson;
  const published = lesson.published;

  return (
    <Card variant='outlined' id={lesson.name} sx={{ width: '100%' }}>
      <CardContent>
        <Box sx={{ display: 'flex', flexFlow: 'row', justifyContent: 'space-between' }}>
          <Typography variant='h5' component='h3'>
            {lesson.title}
          </Typography>
          <Chip label={published ? 'Published' : 'Not published'} color={published ? 'success' : 'info'} size='small' />
        </Box>
        <Divider />

        <Typography fontSize='small'>Type: {lesson.type}</Typography>

        <Typography fontSize='small'>
          Short summary:
          <br /> {lesson.shortSummary}
        </Typography>
        <Box>
          {lesson.youtube ? (
            <Link href={lesson.youtube} target='blank'>
              Watch on YouTube
            </Link>
          ) : null}
        </Box>
        <Chip
          variant='outlined'
          label={lesson.completed ? 'completed' : 'not completed'}
          color={lesson.completed ? 'success' : 'error'}
        />
      </CardContent>
    </Card>
  );
}
