import { Course } from './course.model';
export interface Topic {
  id: string;
  label: string;
  course: Course;
}
