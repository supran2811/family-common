import { Subjects } from './subjects';

export interface UserCreatedEvent {
  subject: Subjects.UserCreated;
  data: {
    userid: string;
    email: string;
    name: string;
  };
}
