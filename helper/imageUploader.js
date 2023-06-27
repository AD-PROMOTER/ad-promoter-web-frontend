import axios from 'axios';

const uploadImage = async (files) => {
  let imageURLs = [];
  const userToken = JSON.parse(localStorage.getItem('user-token'));

  const formData = new FormData();
  for (let i = 0; i < files.length; i++) {
    formData.append('files', files[i]);
  }

  console.log(formData.getAll('files'));

  const response = await axios.post(
    'https://api.ad-promoter.com/api/v1/fileUpload/image',
    formData,
    {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    }
  );

  try {
    if (response.status === 500) {
      throw new Error('error code 500');
    }

    if (response.status === 201) {
      const data = response.data;
      console.log(data.data);
      for (let i = 0; i < data.data.length; i++) {
        imageURLs.push(data.data[i].fileUrl);
      }
      return imageURLs;
    }
  } catch (error) {
    return error.message;
  }
};

export default uploadImage;
