/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useState, useEffect } from 'react';
import { storage, db, timeStamp } from '../utils/firebase';

const useStorage = (image) => {
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const storageRef = storage.ref(image.name);
    const collectionRef = db.collection('images');

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
        await collectionRef
          .doc()
          .set({ url, createdAt: timeStamp, name: image.name });
        setUrl(url);
      }
    );
  }, [image]);

  return { progress, url, error };
};

export default useStorage;
