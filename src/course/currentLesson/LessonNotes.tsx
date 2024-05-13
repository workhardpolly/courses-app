import { FormEventHandler, useEffect, useState } from 'react';

type Props = {
  notes: string[];
  addNote: FormEventHandler<object>;
  removeNote: FormEventHandler<object>;
};

export default function LessonNotes({ notes = [], addNote, removeNote }: Props) {
  console.log('notes has rendered', notes);

  const [value, setValue] = useState(notes);

  useEffect(() => {
    setValue('');
  }, [notes]);

  return (
    <div>
      <label>Notes:</label>
      <ol>
        {notes.map((note, index) => {
          return (
            <div
              key={index}
              style={{ border: '1px dotted brown ', margin: '5px', display: 'flex', justifyContent: 'space-between' }}>
              <li>{note}</li>
              <span onClick={() => removeNote(index)}>remove</span>
            </div>
          );
        })}
      </ol>

      <form onSubmit={addNote}>
        <textarea required type='text' value={value} onChange={(e) => setValue(e.target.value)}></textarea>
        <button type='submit'>Save notes</button>
      </form>
    </div>
  );
}
