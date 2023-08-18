import { all } from "redux-saga/effects";
import { tasksSaga } from "./features/tasks/TasksList/tasksSaga";

export default function* rootSaga() {
  yield all([tasksSaga()]);
}
