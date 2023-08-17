import { all } from "redux-saga/effects";
import { watchFetchExampleTasks } from "./features/tasks/TasksList/tasksSaga";

export default function* rootSaga() {
  yield all([watchFetchExampleTasks()]);
}
