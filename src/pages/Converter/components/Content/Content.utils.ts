type GetExchangeCourseProps = (to: number, from: number) => number;

export const getExchangeCourse: GetExchangeCourseProps = (to, from) => to / from;
