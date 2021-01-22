import { Course } from './course.model';
export interface Subject {
  id: string;
  label: string;
  course: Course;
}
