import { Container, Box, Typography, Stack, AppBar } from '@mui/material';
import LessonContent from './currentLesson/LessonContent';
import LessonsList from './lessonsList/LessonsList';
import NavBar from './NavBar';

// import { useSelector } from 'react-redux';

export default function CoursesPage() {
  // const currentLessonData = useSelector((state) => state.lessonSlice.lessonData);

  return (
    <Box>
      <NavBar />
      <Stack direction='row' justifyContent='space-between' padding={2}>
        <Box flex={2} sx={{ display: { xs: 'none', md: 'block' } }}>
          <LessonsList />
        </Box>
        <LessonContent />
      </Stack>
    </Box>
  );
}
