import { Company } from './../../../shared/models/company.model';
import * as ListCompanyActions from './company-list.actions';

const initialState = {
  companies: []
};

export function companyListReducer(state = initialState, action: ListCompanyActions.ListCompanyActions) {
  switch (action.type) {
    case ListCompanyActions.ADD_COMPANY:
      return {
        ...state,
        companies: [...state.companies, action.payload]
      };
      case ListCompanyActions.LIST_COMPANIES:
        return {
          ...state,
          companies: [...state.companies, ...action.payload]
        };
    default:
      return state;
  }
}
