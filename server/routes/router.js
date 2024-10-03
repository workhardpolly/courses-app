const express = require('express');
const router = express.Router();
const allLessons = require('../src/lessons.json');
const BASE_URL = '/lessons/';
const lessonsList = allLessons.lessons;

// Get lessons list

router.get(BASE_URL, (req, res) => {
  console.log(lessonsList);
  res.send(lessonsList);
});

// Get current lesson

router.get(`${BASE_URL}:id`, (req, res) => {
  const {
    params: { id },
  } = req;

  const resLesson = lessonsList.filter((lesson) => lesson.id === id);

  res.send(resLesson[0]);
});

// Patch completed status

router.patch(`${BASE_URL}:id`, (req, res) => {
  const {
    body,
    params: { id },
  } = req;

  // for (let key in body) {

  //   const keyCopy = JSON.parse(JSON.stringify(key));

  //   if (keyCopy != 'completed' || keyCopy != 'notes') {
  //     console.log('key is wrong, key is:', typeof key);
  //     return res.status(400).json({ errors: '400 Bad request' });
  //   }
  // }

  const lessonIndex = lessonsList.findIndex((lesson) => lesson.id === id);

  if (lessonIndex === -1) {
    return res.status(404).send('Lesson not found');
  }

  console.log('current', lessonsList[lessonIndex]);
  lessonsList[lessonIndex] = { ...lessonsList[lessonIndex], ...body };

  return res.sendStatus(200).send('OK');

  // allLessons.lessons.map((lesson) => {
  //   if (lesson.id === id) {
  //     console.log(body[0]);
  //     switch (body[0]) {
  //       case 'completed':
  //         lesson.completed = body.completed;
  //         return res.sendStatus(200).send('OK');

  //       case 'notes':
  //         lesson.notes = body.notes;
  //         console.log(body.notes);
  //         return res.sendStatus(200).send('OK');

  //       default:
  //         return;
  //     }
  //   }
  // });

  // return res.sendStatus(404).send('NOT FOUND');
});

module.exports = router;
