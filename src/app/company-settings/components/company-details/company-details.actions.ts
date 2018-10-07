import { Action } from '@ngrx/store';
import { CompanyDetails } from '../../models/company-details.model';

export const EDIT_COMPANY_SETTINGS = 'EDIT_COMPANY_SETTINGS';

export class EditCompanySettings implements Action {
  readonly type = EDIT_COMPANY_SETTINGS;
  payload: CompanyDetails;
}

export type EditCompanySettingsActions = EditCompanySettings;
