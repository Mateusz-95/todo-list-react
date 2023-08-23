import { all } from "redux-saga/effects";
import { tasksSaga } from "./features/tasks/TasksPage/TasksList/tasksSaga";

export default function* rootSaga() {
  yield all([tasksSaga()]);
}
