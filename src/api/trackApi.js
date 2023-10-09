const basedUrl = "https://skypro-music-api.skyeng.tech/";


const trackApi = {
  getAllTracks(onSavedAction) {
    return fetch(`${basedUrl}catalog/track/all/`, {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Ошибка при загрузке данных');
        }
        return response.json();
      })
      .then((data) => {
        onSavedAction(data);
      })
      .catch((error) => {
        alert("Не удалось загрузить плейлист, попробуйте позже");
      });
  },

  getEntireTrack(onSavedAction, id) {
    try {
      return fetch(`${basedUrl}catalog/track/${id}`, {
        method: "GET",
      })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        onSavedAction(data);
      })

    } catch (error) {
      console.log(error);
    }
  }
};

export default trackApi;
// const [track, setTrack] = useState([]);

// useEffect(() => {
//   const getTracks = () => {
//     return fetch("https://skypro-music-api.skyeng.tech/catalog/track/all/".then((response) => {
//       setTrack(response.data)
//     })
//   }
// }, [])
