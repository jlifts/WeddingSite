/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useState, useEffect } from 'react';
import { storage } from '../utils/firebase';
import axios from '../api/axios';
import reqs from '../api/req';

const useStorage = (image) => {
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const storageRef = storage.ref(image.name);
    // const collectionRef = db.collection('images');

    storageRef.put(image).on(
      'state_changed',
      (snap) => {
        const percent = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percent);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const config = {
          name: image.name,
          url: url,
        };
        await axios.post(reqs.postPhoto, config).then((res) => {
          res.data;
        });

        setUrl(url);
      }
    );
  }, [image]);

  return { progress, url, error };
};

export default useStorage;
