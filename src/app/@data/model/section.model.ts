import { Course } from './course.model';

export interface Section {
  id: string;
  label: string;
  course: Course;
}
