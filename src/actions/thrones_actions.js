import reverseGeocode from 'latlng-to-zip';
import firebase from 'firebase';

import { FETCH_THRONES } from './types';


// passer la region en argument
export const fetchThrones = () => async (dispatch) => {
  firebase.database().ref('thrones').on('value', snapshot => {
    dispatch({ type: FETCH_THRONES, payload: [snapshot.val()] });
    console.log('action', snapshot.val() )
  });
  }
