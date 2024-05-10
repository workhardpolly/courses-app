export default function getYoutubeVideoID(link: string = ''): string | null {
  const regex =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

  const match = link.match(regex);

  if (match && match[1]) {
    return match[1];
  } else {
    return null;
  }
}
