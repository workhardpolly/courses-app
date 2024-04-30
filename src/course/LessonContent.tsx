export default function LessonContent({ currentLesson }) {
  // This module will show the video preview and notes

  function getYoutubeVideoLink(link: string = currentLesson): string {
    const indexStart = link.search(/=/);
    const indexEnd = link.search(/&/);
    const videoID = link.slice(indexStart + 1, indexEnd);
    console.log(`https://www.youtube.com/embed/${videoID}`);
    return `https://www.youtube.com/embed/${videoID}`;
  }

  return (
    <div style={{ width: '70%', border: '1px dotted black', marginLeft: '10px', padding: '5px' }}>
      <div style={{ width: '100%', height: 'auto', margin: 'auto', textAlign: 'center' }}>
        Video Preview
        {currentLesson}
      </div>

      <input type='checkbox'></input>
      <span>completed</span>
      <p>Notes:</p>
      <input></input>
    </div>
  );
}
