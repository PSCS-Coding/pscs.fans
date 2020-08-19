import * as firebase from 'firebase/app';
import 'firebase/database';

export async function changeStatus(uid, status, statusInfo, returnTime) {
  // log function inputs
  // console.log(`${uid} ${status} ${statusInfo} ${returnTime}`);

  // setup promise
  const promise = new Promise((resolve, reject) => {
    // check that returntime is after current time
    if (returnTime > Date.now()) {
      reject(new Error('Too Early'));
      return;
    }

    firebase.database().ref(`/students/${uid}/current`).once('value').then((snapshot) => {
      const data = snapshot.val();
      if (data.status === 'Present' && status === 'Present') {
        reject(new Error('Double Present'));
        return;
      } if (data.status === 'Absent' && status === 'Absent') {
        reject(new Error('Double Absent'));
        return;
      }

      // update current
      firebase.database().ref(`/students/${uid}/current`).update({
        returnTime,
        status,
        statusInfo,
        timestamp: Date.now(),
      }).catch(err => reject(err));

      // insert into history
      firebase.database().ref(`/history/${uid}`).push().set(data)
        .catch(err => reject(err));
    });

    resolve(uid);
  });

  return (promise);
}

export function getUsers() {
  console.log('users');
}
