import { CompanyDetails } from './../../models/company-details.model';
import * as EditSettingsActions from './company-details.actions';

const initialState = {
  companyData: <CompanyDetails>{}
};

export function companyDetailsReducer(state = initialState, action: EditSettingsActions.EditCompanySettingsActions) {
  switch (action.type) {
    case EditSettingsActions.EDIT_COMPANY_SETTINGS:
      return {
        ...state,
        companyDetails: Object.assign({}, state.companyData, action.payload)
      };
    default:
      return state;
  }
}
