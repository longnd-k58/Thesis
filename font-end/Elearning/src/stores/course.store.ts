import APIConfig from '../config/api.config';
// import { post, get } from '../services/api.service';
import { observable, action, flow, computed } from "mobx";
import SessionStore from './session.store';

class Course {

    @observable id = '';
    @observable avatar = '';
    @observable avg_rate = '';
    @observable class_fullname = '';
    @observable class_program_id = '';
    @observable course_name = '';
    @observable description = '';
    @observable element_learning: any = {};
    @observable end_date = '';
    @observable name = '';
    @observable num_subject = '';
    @observable num_user_certificate = '';
    @observable num_user_review = '';
    @observable program_id = '';
    @observable program_progress = '';
    @observable required = 0;
    @observable start_date = '';
    @observable total_lesson = 0;
    @observable time_info = '';
    @observable pending_status = false;
    @observable enroll_status = false;

    fromJson(json: any) {
        console.log("Will fromJson:", json);
        this.id = json.id;
        this.avatar = json.avatar;
        this.avg_rate = json.avg_rate;
        this.class_fullname = json.class_fullname;
        this.class_program_id = json.class_program_id;
        this.course_name = json.course_name;
        this.description = json.description;
        this.element_learning = json.element_learning;
        if (!this.element_learning) {
            this.element_learning = {
                program_schedule_number: 1,
                program_element_number: 1
            }
        } else if (!this.element_learning.program_schedule_number) {
            this.element_learning.program_schedule_number = 1;
            this.element_learning.program_element_number = 1;
        }

        this.end_date = json.end_date;
        this.name = json.name;
        this.num_subject = json.num_subject;
        this.num_user_certificate = json.num_user_certificate;
        this.num_user_review = json.num_user_review;
        this.program_id = json.program_id;
        this.program_progress = json.program_progress;
        this.required = json.required;
        this.start_date = json.start_date;
        this.total_lesson = json.total_lesson;
        this.time_info = json.time_info;
        this.pending_status = json.pending_status;
        this.enroll_status = json.enroll_status;
        console.log("Will fromJson:", this.element_learning);
    }
}

export default class CourseStore {
    SessionStore: any;

    @observable myCoursesLoading = false;
    @observable myCourses = [];

    @observable myFinishedCoursesLoading = false;
    @observable myFinishedCourses = [];

    @observable myUpcomingProgressCoursesLoading = false;
    @observable myUpcomingProgressCourses = [];

    @observable myFinishedProgressCoursesLoading = false;
    @observable myFinishedProgressCourses = [];

    @observable coursesLoading = false;
    @observable courses = [];

    @observable courseMapper: any = {};

    constructor(SessionStore: SessionStore) {
        this.SessionStore = SessionStore;
    }

    getCourse(class_program_id: number) {
        return this.courseMapper[class_program_id];
    }

    // @action
    // loadMyCourses = flow(function* (index, limit) {
    //     this.myCoursesLoading = true;
    //     let [err, res] = yield post(APIConfig.get_learning_course(this.SessionStore.user.id), { type: 'learning', type_progress: 'learning', limit: limit, offset: index });
    //     if (!err) {
    //         if (index == 0)
    //             this.myCourses.length = 0
    //         for (let i = 0; i < res.length; i++) {
    //             let course = new Course();
    //             course.fromJson(res[i]);
    //             course.pending_status = false;
    //             course.enroll_status = true;
    //             this.myCourses.push(course)
    //             this.courseMapper[course.class_program_id] = course;
    //         }
    //     } else {

    //     }
    //     this.myCoursesLoading = false;
    //     return [err, res];
    // });

    // @action
    // loadMyFinishedCourses = flow(function* (index, limit) {
    //     console.log("loadMyFinishedCourses:", index, limit);
    //     this.myFinishedCoursesLoading = true;
    //     let [err, res] = yield post(APIConfig.get_upcomming_process(this.SessionStore.user.id), { type: 'success', type_progress: 'success', limit: limit, offset: index });
    //     if (!err) {
    //         if (index == 0)
    //             this.myFinishedCourses.length = 0
    //         for (let i = 0; i < res.length; i++) {
    //             let course = new Course();
    //             course.fromJson(res[i]);
    //             course.pending_status = false;
    //             course.enroll_status = true;
    //             this.myFinishedCourses.push(course)
    //             this.courseMapper[course.class_program_id] = course;
    //         }
    //     } else {

    //     }
    //     this.myFinishedCoursesLoading = false;
    //     return [err, res];
    // });

    // @action
    // loadMyUpcomingProgressCourses = flow(function* (index, limit) {
    //     console.log("loadMyFinishedCourses:", index, limit);
    //     this.myUpcomingProgressCoursesLoading = true;
    //     let [err, res] = yield post(APIConfig.get_finished_process(this.SessionStore.user.id), { type: 'learning', type_progress: 'learning', limit: limit, offset: index });
    //     if (!err) {
    //         if (index == 0)
    //             this.myUpcomingProgressCourses.length = 0
    //         for (let i = 0; i < res.length; i++) {
    //             let course = new Course();
    //             course.fromJson(res[i]);
    //             this.myUpcomingProgressCourses.push(course)
    //             this.courseMapper[course.class_program_id] = course;
    //         }
    //     } else {

    //     }
    //     this.myUpcomingProgressCoursesLoading = false;
    //     return [err, res];
    // });

    // @action
    // loadMyFinishedProgressCourses = flow(function* (index, limit) {
    //     console.log("loadMyFinishedCourses:", index, limit);
    //     this.myFinishedProgressCoursesLoading = true;
    //     let [err, res] = yield post(APIConfig.get_finished_process(this.SessionStore.user.id), { type: 'success', type_progress: 'success', limit: limit, offset: index });
    //     if (!err) {
    //         if (index == 0)
    //             this.myFinishedProgressCourses.length = 0
    //         for (let i = 0; i < res.length; i++) {
    //             let course = new Course();
    //             course.fromJson(res[i]);
    //             this.myFinishedProgressCourses.push(course)
    //             this.courseMapper[course.class_program_id] = course;
    //         }
    //     } else {

    //     }
    //     this.myFinishedProgressCoursesLoading = false;
    //     return [err, res];
    // });

    @action
    loadCourses = flow(function* (index: number, limit: number) {
        return [];
        // this.coursesLoading = true;
        // let [err, res] = yield post(APIConfig.get_courses(this.SessionStore.user.id), { user_id: this.SessionStore.user.id, limit: limit, offset: index });
        // if (!err) {
        //     if (index == 0)
        //         this.courses.length = 0
        //     for (let i = 0; i < res.length; i++) {
        //         let course = new Course();
        //         course.fromJson(res[i]);
        //         this.courses.push(course);
        //         this.courseMapper[course.class_program_id] = course;
        //     }
        // } else {

        // }
        // this.coursesLoading = false;
        // return [err, res];
    })

    // @action
    // registerCourse = flow(function* (course_id) {
    //     let [err, res] = yield post(APIConfig.register_course(), { user_id: this.SessionStore.user.id, course_id: course_id });
    //     if (!err) {
    //         //filter course id and replace
    //         for (let i = 0; i < this.courses.length; i++) {
    //             if (this.courses[i].id == res.id) {
    //                 this.courses[i].fromJson(res);
    //             }
    //         }
    //     }
    //     return [err, res];
    // })
}