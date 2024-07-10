import { takeLatest, call, put } from 'redux-saga/effects';

import { getData, getCountryList, postUrlShorten } from '@domain/api';
import { showPopup, setLoading, setData, setCountryList, setDataUrl } from '@containers/App/actions';
import { GET_DATA, GET_COUNTRY_LIST, POST_DATA_URL } from '@containers/App/constants';

function* doGetData() {
  yield put(setLoading(true));
  try {
    const response = yield call(getData);
    if (response) {
      yield put(setData(response.data));
    }
  } catch (error) {
    yield put(showPopup());
  }
  yield put(setLoading(false));
}

function* doGetCountryList() {
  yield put(setLoading(true));
  try {
    const response = yield call(getCountryList);
    if (response) {
      yield put(setCountryList(response));
    }
  } catch (error) {
    yield put(showPopup());
  }
  yield put(setLoading(false));
}

function* doPostUrlList({ url }) {
  yield put(setLoading(true));
  try {
    const response = yield call(postUrlShorten, url);
    if (response.message) {
      yield put(showPopup('Error', 'website telah digunakan'));
    } else {
      yield put(setDataUrl(response));
    }
  } catch (error) {
    yield put(showPopup());
  }
  yield put(setLoading(false));
}

export default function* appSaga() {
  yield takeLatest(GET_DATA, doGetData);
  yield takeLatest(GET_COUNTRY_LIST, doGetCountryList);
  yield takeLatest(POST_DATA_URL, doPostUrlList);
}
