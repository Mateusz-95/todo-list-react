import { call, put, select, takeEvery, takeLatest } from "redux-saga/effects";
import { getExampleTasks } from "../getExampleTasks";
import { saveTasksToLocalStorage } from "../tasksLocalStorage";
import { fetchExampleTasks, selectTasksState, setTasks } from "../tasksSlice";

function* fetchExampleTasksHandler() {
  try {
    const exampleTasks = yield call(getExampleTasks);
    yield put(setTasks(exampleTasks));
  } catch (error) {
    yield call(alert, "Coś poszło nie tak.");
  }
}

function* saveTasksToLocalStorageHandler() {
  const tasks = yield select(selectTasksState);
  yield call(saveTasksToLocalStorage, tasks);
}

export function* tasksSaga() {
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
  yield takeEvery("*", saveTasksToLocalStorageHandler);
}
