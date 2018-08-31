import React, { Component } from 'react'
import { Text, View, ScrollView, Dimensions } from 'react-native';
import { Button } from 'native-base';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class Slides extends Component {

  renderLastSlide(index) {
    return index === this.props.data.length - 1 ? (
      <Button
        onPress={this.props.onComplete}
        bordered
        style={styles.buttonStyle}
      ><Text>Lets Get Started!</Text></Button>
    ) : null;
  }

  renderSlides() {
    return this.props.data.map( (slide, index) => {
      return (
        <View
          key={slide.text}
          style={[styles.slideStyle, { backgroundColor: slide.color } ]}
        >
          <Text style={styles.textStyle}>
            {slide.text}
          </Text>

          {this.renderLastSlide(index) }
        </View>
      );
    })
  }
  render() {
    return (
      <ScrollView
        pagingEnabled
        horizontal
        style={{ flex: 1 }}
      >
        { this.renderSlides()}
      </ScrollView>
    )
  }
}

const styles = {
  slideStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH

  },
  textStyle: {
    fontSize: 30,
    color: 'white'
  },
  buttonStyle: {
    alignSelf:'center',
    padding: 20
  }
}