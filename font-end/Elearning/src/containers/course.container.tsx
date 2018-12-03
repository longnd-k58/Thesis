import React, { Component } from 'react';
import {
    Alert,
} from 'react-native';
import CourseCard from '../components/course/course_card.component';
import { observer, inject } from 'mobx-react';
import I18n from '../i18n/index';
import FlatListContainer from './flatlist.container';
import UIStore from '../stores/ui.store';
import { Text } from 'react-native-elements';
import CourseStore from '../stores/course.store';


interface Props {
    UIStore: UIStore,
    CourseStore: CourseStore
};

interface State { };

interface Style { };


@inject('UIStore')
// @inject('CourseStore')
@observer
export default class CourseContainer extends Component<Props, State> {


    constructor(props: Props) {
        super(props);
    }

    get UIStore(): UIStore {
        return this.props.UIStore as UIStore;
    }

    confirmRegister(course: any) {
        let text = course.required ?
            'Khoá học này cần quản lý đào tạo duyệt đăng ký, bạn có chắc chắn muốn đăng ký khoá học không?' :
            'Bạn có chắc chắn muốn đăng ký khoá học không?';
        Alert.alert(
            'Xác nhận',
            text,
            [
                { text: 'Cancel', onPress: () => console.log('canceled'), style: 'cancel' },
                { text: 'OK', onPress: () => this.register(course) },
            ],
            { cancelable: false }
        )
    }

    register(course: any) {
        this.props.UIStore.showLoading('register_course');
        // this.props.CourseStore.registerCourse(course.id).then(([err, res]) => {
        //     this.props.UIStore.hideLoading('register_course');
        //     const { enroll_status, pending_status } = res;
        //     if (pending_status) {
        //         Alert.alert(I18n.t('message.title'), I18n.t('message.pending'))
        //     }
        //     if (enroll_status) {
        //         Alert.alert(I18n.t('message.title'), I18n.t('message.success'))
        //     }
        // })

    }

    onPressCourse(course: any) {
        this.props.root_navigation.navigate('CourseDetail', { course })
    }

    createCourseCard(item: any) {
        return (
            <CourseCard
                course={item.item}
                register={this.confirmRegister.bind(this)}
                onPress={this.onPressCourse.bind(this)}
                navigation={this.props.root_navigation}
            />
        )
    }

    render() {
        return (
            <FlatListContainer
                loadData={this.props.CourseStore.loadCourses.bind(this.props.CourseStore)}
                data={this.props.CourseStore.courses}
                itemPerPage={20}
                itemCreator={this.createCourseCard.bind(this)}
                emptyMessage={I18n.t('my_course.no_register_course')}
                containerStyle={styles.container}
            />
        )
    }
}