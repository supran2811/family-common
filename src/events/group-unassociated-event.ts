import { Subjects } from './subjects';

export interface GroupUnAssociated {
  subject: Subjects.GroupUnAssociated;
  data: {
    userid: string;
    version: string;
  };
}
