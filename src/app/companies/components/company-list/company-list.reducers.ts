import { Company } from './../../../shared/models/company.model';
import * as ListCompanyActions from './company-list.actions';

const initialState = {
  companies: [
    <Company>{ id: 1, title: 'Company 1', userId: 123 },
    <Company>{ id: 2, title: 'Company 2', userId: 123 }
  ]
};

export function companyListReducer(state = initialState, action: ListCompanyActions.ListCompanyActions) {
  switch (action.type) {
    case ListCompanyActions.LIST_COMPANIES:
      return {
        ...state,
        companies: [...state.companies, action.payload]
      };
    default:
      return state;
  }
}
