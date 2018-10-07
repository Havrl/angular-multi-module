import { Action } from '@ngrx/store';
import { Company } from '../../../shared/models/company.model';


export const LIST_COMPANIES = 'LIST_COMPANIES';

export class ListCompanies implements Action {
  readonly type = LIST_COMPANIES;
  payload: Company[];
}

export type ListCompanyActions = ListCompanies;
