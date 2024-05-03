import { useSelector } from 'react-redux';
import YouTube from 'react-youtube';

function getYoutubeVideoID(link: string = ''): string | null {
  const regex =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

  const match = link.match(regex);

  if (match && match[1]) {
    return match[1];
  } else {
    return null;
  }
}

export default function LessonContent() {
  const currentLessonData = useSelector((state) => state.currentLessonSlice);
  // This module will show the video preview and notes

  console.log(currentLessonData);

  return (
    <div
      style={{
        width: '70%',
        height: '80vh',
        border: '1px dotted black',
        marginLeft: '10px',
        padding: '5px',
        position: 'sticky',
        top: '5px',
      }}>
      <div style={{ width: '100%', height: 'auto', margin: 'auto', textAlign: 'center' }}>
        Video Preview
        {/* <YouTube videoId={getYoutubeVideoID(currentLessonData.youtube)} /> */}
      </div>

      <input type='checkbox'></input>
      <span>completed</span>
      <p>Notes:</p>
      <input></input>
    </div>
  );
}
