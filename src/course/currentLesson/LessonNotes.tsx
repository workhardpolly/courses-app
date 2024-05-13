import { useEffect, useState } from 'react';
export default function LessonNotes({ notes = '', updateNotes }) {
  console.log('notes has rendered', notes);

  const [value, setValue] = useState(notes);

  useEffect(() => {
    setValue(notes);
  }, [notes]);

  return (
    <div>
      <p>Notes:</p>
      <form onSubmit={updateNotes}>
        <p>{notes}</p>
        <label>Notes for the lesson</label>
        <textarea type='text' value={value} onChange={(e) => setValue(e.target.value)}></textarea>
        <button type='submit'>Save notes</button>
      </form>
    </div>
  );
}
