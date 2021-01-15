export interface IdVO {
  id: string;
}

export interface CourseVO extends IdVO {
  course: string;
}

export interface SubjectVO extends CourseVO {
  subject: string;
}

export interface TopicVo extends SubjectVO {
  topic: string;
}
