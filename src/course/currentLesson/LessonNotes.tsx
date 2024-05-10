export default function LessonNotes({ notes, updateNotes }) {
  console.log('notes has rendered', notes);

  return (
    <div>
      <p>Notes:</p>
      <form onSubmit={updateNotes}>
        <p>{notes}</p>
        <label>Notes for the lesson</label>
        <textarea type='text'></textarea>
        <button type='submit'>Save notes</button>
      </form>
    </div>
  );
}
