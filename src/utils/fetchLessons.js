export default function fetchLessons(link) {
  return window
    .fetch(link)
    .then(async (res) => {
      const data = await res.json();
      if (res.ok) {
        return data;
      } else {
        const error = {
          message: data?.errors?.map((e) => e.message).join('\n'),
        };
        return Promise.reject(error);
      }
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log('error:', error);
      throw error;
    });
}
