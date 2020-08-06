'use strict';

/** constants */
const PAGE_HOME_PATH = '/';
const PAGE_PROJECT_LIST_PATH = '/projects';
const PAGE_PROJECT_DETAILS_PATH = '/:project/details';
const PAGE_PROJECT_TASK_LIST_PATH = '/:project/tasks';
const PAGE_PROJECT_TASK_OPEN_PATH = '/:project/:task';

const POPUP_PROFILE_PATH = '/profile';
const POPUP_SETTINGS_PATH = '/settings';
const POPUP_CREATE_PROJECT_PATH = '/create-project';
const POPUP_DELETE_PROJECT_PATH = '/:project/delete';
const POPUP_PROJECT_SETTINGS_PATH = '/:project/settings';
const POPUP_PROJECT_GOAL_PATH = '/:project/:goal';
const POPUP_PROJECT_TASK_PATH = '/:project/:task';

/** export */
export {
  PAGE_HOME_PATH,
  PAGE_PROJECT_LIST_PATH,
  PAGE_PROJECT_DETAILS_PATH,
  PAGE_PROJECT_TASK_LIST_PATH,
  PAGE_PROJECT_TASK_OPEN_PATH,
  POPUP_PROFILE_PATH,
  POPUP_SETTINGS_PATH,
  POPUP_CREATE_PROJECT_PATH,
  POPUP_DELETE_PROJECT_PATH,
  POPUP_PROJECT_SETTINGS_PATH,
  POPUP_PROJECT_GOAL_PATH,
  POPUP_PROJECT_TASK_PATH
}