import React, { Component } from 'react';
import { FlatList, ActivityIndicator, View, Text, StyleSheet, ViewStyle, ListRenderItem } from 'react-native';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import activityIndicator from '../styles/activityIndicator.style'



/**
 autoLoadMore: bool -> default true
 loadData: function (index, number): Promise
 data: []
 itemPerPage: int
 itemCreator: function (item): View
 emptyMessage: string
 containerStyle: style
 */

interface Props {
    itemPerPage: number,
    autoLoadMore: boolean,
    data: any,
    emptyMessage: string,
    loadData(index: number, _number: number): Promise<any>,
    itemCreator: ListRenderItem<{}>,
    containerStyle: ViewStyle

};


interface State { };


interface Style {
    loading: ViewStyle


};


@observer
class FlatListContainer extends Component<Props, State> {
    @observable isLoading = false;
    @observable isRefreshing = false;
    @observable isLoadMore = false;

    constructor(props: Props) {
        super(props);
        console.log("Create LazyLoadListContainer");
    }

    componentWillMount() {
        this.handleLoadData();
    }

    handleLoadData() {
        console.log("Will load");
        this.isLoading = true;
        this.props.loadData(0, this.props.itemPerPage).then(([err, res]) => {
            this.isLoading = false;
        });
    }

    handleRefresh() {
        this.isRefreshing = true;
        this.props.loadData(0, this.props.itemPerPage).then(([err, res]) => {
            this.isRefreshing = false;
        });
    }

    handleLoadMore() {
        if (this.props.autoLoadMore == false)
            return;
        if (this.props.data.length < this.props.itemPerPage)
            return;
        this.isLoadMore = true;
        this.props.loadData(this.props.data.length + 1, this.props.itemPerPage).then(([err, res]) => {
            this.isLoadMore = false;
        });
    }

    render() {
        if (this.isLoading)
            return (
                <View style={activityIndicator.loading}>
                    <ActivityIndicator
                        size="large"
                        color="#000"
                        style={activityIndicator.activityIndicator}
                    />
                </View>
            )
        if (this.props.data.length > 0) {
            return (
                <FlatList
                    style={this.props.containerStyle}
                    refreshing={this.isRefreshing}
                    onEndReached={this.handleLoadMore.bind(this)}
                    onRefresh={this.handleRefresh.bind(this)}
                    onEndReachedThreshold={0.5}
                    data={this.props.data}
                    renderItem={this.props.itemCreator}
                    keyExtractor={(item, index) => index.toString()}
                />
            )
        }
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>
                    {this.props.emptyMessage}
                </Text>
            </View>
        );
    }
}

export default FlatListContainer;
