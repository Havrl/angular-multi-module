import { Action } from '@ngrx/store';
import { Company } from '../../../shared/models/company.model';


export const LIST_COMPANIES = 'LIST_COMPANIES';
export const ADD_COMPANY = 'ADD_COMPANY';

export class AddCompany implements Action {
  readonly type = ADD_COMPANY;

  constructor(public payload: Company) {}
}

export class ListCompanies implements Action {
  readonly type = LIST_COMPANIES;

  constructor(public payload: Company[]) {}
}

export type ListCompanyActions = ListCompanies | AddCompany;
