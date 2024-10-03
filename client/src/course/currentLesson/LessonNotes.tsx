import { ChangeEvent, FormEventHandler, useEffect, useState } from 'react';
import { Button, TextField, Typography, Box, ListItem, List} from '@mui/material';

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
      <List>
        {notes.map((note, index) => {
          return (
            <ListItem
              key={index}
              sx={{ border: '1px solid rgba(190,250,170,0.7)', borderRadius:'5px', margin: '5px', display: 'flex', justifyContent: 'space-between' }}>
              {<Typography color='textPrimary' sx={{maxHeight:'250px',  overflow:'auto'}}>{note}</Typography>}
              <Button onClick={() => removeNote(index)}>
                <DeleteOutlineIcon />
              </Button>
            </ListItem>
          );
        })}
      </List>

      <form onSubmit={addNote}>
        <TextField
          required
          type='text'
          value={value}
          sx={{width:'100%', margin: '5px'}}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}></TextField>
        <Button startIcon={<Add />} type='submit' color='primary' variant='contained' sx={{margin:"5px"}}>
          Save note
        </Button>
      </form>
    </Box>
  );
}
