'use strict';

/** data */
let appRouterHistory: any = null;
let appRouterLocation: any = null;
let isPopupOpen: boolean = false;

/** PopupService */
const PopupService = {
  init(history: any, location: any) {
    appRouterHistory = history;
    appRouterLocation = location;
  },
  openPopup(popupName: string) {
    isPopupOpen = true;
    appRouterHistory.push({
      pathname: `/${popupName}`,
      state: {
        background: appRouterLocation
      }
    });
  },
  closePopup() {
    isPopupOpen = false;
    appRouterHistory.goBack();
  }
};

/** export */
export default PopupService;