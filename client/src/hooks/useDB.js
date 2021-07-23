/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { db, timeStamp, Field, storage } from '../utils/firebase';

export const useDB = () => {
  async function rsvp(name, number) {
    db.collection('guests').doc(name).set({
      name: name,
      attendees: number,
      createdAt: timeStamp,
    });
  }

  async function increment(number) {
    const increment = Field.increment(number);
    db.collection('guestCount').doc('guestCount').update({
      count: increment,
    });
  }

  async function decrement(number) {
    const decrement = Field.increment(-number);
    db.collection('guestCount').doc('guestCount').update({
      count: decrement,
    });
  }

  async function deletePhoto(doc, name) {
    db.collection('images').doc(doc).delete();
    storage.ref().child(name).delete();
  }

  return { rsvp, increment, decrement, deletePhoto };
};
