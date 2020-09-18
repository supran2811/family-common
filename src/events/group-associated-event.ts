import { Subjects } from './subjects';

export interface GroupAssociated {
  subject: Subjects.GroupAssociated;
  data: {
    userid: string;
    groupid: string;
    version: string;
  };
}
