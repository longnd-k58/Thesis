import React, { Component } from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Text, Card, Divider, Icon } from 'react-native-elements';
import I18n from '../../i18n/index';
import StarRating from 'react-native-star-rating';
import { observer } from 'mobx-react';
import ProgressCircle from 'react-native-progress-circle';
import styles from '../../styles/course/course.style';


interface Props {
    onPress: Function
};

interface State { };

interface Style { };

@observer
export default class CourseCard extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
    }


    viewLesson() {
        // console.log(this.props);
        const { navigate } = this.props.navigation;
        //navigate("Lesson", { course: this.props.course, lessonId: this.props.course.element_learning.lesson_id });
        navigate('CourseDetail', { course: this.props.course })
    }

    renderEnrollCourse(course: any) {
        let is_registed = (!course.pending_status && course.enroll_status);
        let changeColorButton = '#0A9D57';
        let text = 'Đăng ký';
        let disabled = false;
        if (course.pending_status) {
            changeColorButton = '#ffd11a';
            text = 'Chờ duyệt';
            disabled = true;
        }

        if (is_registed) {
            changeColorButton = '#4493EC';
            text = 'Học tiếp';
        }

        const percent = parseInt(course.program_progress || 0);
        const averageRating = course.avg_rate ? Number.parseFloat(course.avg_rate / 2).toFixed(1) : 0.0
        return (
            <View style={styles.enrollContainer}>
                <Divider style={styles.divider} />
                <View style={styles.rowContainer}>
                    <View style={styles.leftContainer}>
                        <StarRating
                            disabled={true}
                            starSize={15}
                            maxStars={5}
                            emptyStar={'ios-star-outline'}
                            fullStar={'ios-star'}
                            halfStar={'ios-star-half'}
                            iconSet={'Ionicons'}
                            rating={Number.parseInt(averageRating)}
                            fullStarColor={'#ffd11a'}
                        />
                        <Text style={styles.textRate}>({averageRating})</Text>
                    </View>
                    <View style={[{ height: "100%", justifyContent: "center", alignItems: 'center' }]}>
                        <TouchableOpacity
                            style={[styles.enrollButton, { backgroundColor: changeColorButton }]}
                            onPress={() => is_registed ? this.viewLesson() : this.props.register(course)}
                        >
                            {
                                is_registed ?
                                    <ProgressCircle
                                        percent={percent}
                                        radius={15}
                                        borderWidth={3}
                                        color="#CBB364"
                                        shadowColor="#1190BD"
                                        bgColor="#FFF"
                                    >
                                        <Text style={{ fontSize: 8, fontWeight: 'bold', width: "100%", textAlign: 'center' }}>{`${percent}%`}</Text>
                                    </ProgressCircle>
                                    : null
                            }
                            <Text style={styles.textStyle}>{text}</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        );
    }

    render() {
        const { course } = this.props;
        let backgroundColor = '';
        let textRequire = '';
        if (course.required) {
            backgroundColor = 'red';
            textRequire = I18n.t('my_course.require');
        } else {
            backgroundColor = 'green';
            textRequire = I18n.t('my_course.free');
        }

        return (
            <TouchableOpacity
                onPress={() => this.props.onPress(this.props.course)}
            >
                <Card
                    containerStyle={styles.container}
                    image={{ uri: course.avatar }}
                    imageStyle={styles.featureImg}
                >
                    <View style={styles.mainContainer}>
                        <View style={styles.rowContainer}>
                            <View style={styles.columnContainer}>
                                <Text style={styles.titleLabel}>{course.name}</Text>
                                <View style={styles.programContainer}>
                                    <Icon
                                        name="local-library"
                                        type="material"
                                        size={13}
                                        color="#747474"
                                        containerStyle={{ alignSelf: 'center' }}
                                    />
                                    <Text
                                        style={styles.boldLabel}
                                        numberOfLines={1}
                                        ellipsizeMode="tail"
                                    >
                                        {I18n.t('my_course.course')}:
                                    </Text>
                                    <Text
                                        style={styles.programLabel}
                                        numberOfLines={1}
                                        ellipsizeMode="tail"
                                    >
                                        {course.course_name}
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.statusEnrollContainer}>
                                <Text style={[styles.textStatusEnroll, { backgroundColor }]}>{textRequire}</Text>
                            </View>
                        </View>
                        {this.renderEnrollCourse(course)}
                    </View>
                </Card>
            </TouchableOpacity>
        );
    }

}



const stylesInternal = StyleSheet.create<Style>({

})
