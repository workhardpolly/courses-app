import { ChangeEvent, FormEventHandler, useEffect, useState } from 'react';
import { Button, TextField, Typography, Box } from '@mui/material';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Add } from '@mui/icons-material';

// Types

type RemoveNoteFunction = (targetIndex: number) => void;

type Props = {
  notes: string[];
  addNote: FormEventHandler<object>;
  removeNote: RemoveNoteFunction;
};

export default function LessonNotes({ notes = [], addNote, removeNote }: Props) {
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue('');
  }, [notes]);

  return (
    <Box>
      <label>Notes:</label>
      <ul>
        {notes.map((note, index) => {
          return (
            <div
              key={index}
              style={{ border: '1px dotted brown ', margin: '5px', display: 'flex', justifyContent: 'space-between' }}>
              <li>{<Typography color='textPrimary'>{note}</Typography>}</li>
              <Button onClick={() => removeNote(index)}>
                <DeleteOutlineIcon />
              </Button>
            </div>
          );
        })}
      </ul>

      <form onSubmit={addNote}>
        <TextField
          required
          type='text'
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}></TextField>
        <Button startIcon={<Add />} type='submit' color='primary' variant='contained'>
          Save note
        </Button>
      </form>
    </Box>
  );
}
