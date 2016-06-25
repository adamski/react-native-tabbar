import React, { Component } from 'react'; 
import { StyleSheet } from 'react-native';
import Dynamicbar from './dynamic';
import { window } from './../util';

const styles = StyleSheet.create({
  bar: {
    overflow: 'hidden',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: window.width
  }
});

export default class Normalbar extends Component {
  constructor(props, context) {
    super(props, context);
  }

  show(enable) {
    this.refs['dynamic'].show(enable, this.props.duration);
  }

  setBarHeight(value) {
    this.refs['dynamic'].setBarHeight(value);
  }

  render() {
    const { children, size, barColor, barBorderColor, barBorderWidth } = this.props;
    const width = this.props.width || window.width; 
    console.log (`barBorderColor: ${barBorderColor}`)

    return (
      <Dynamicbar
        ref="dynamic"
        size={size}
        style={[
		  styles.bar, { 
            width, 
            backgroundColor: barColor, 
            borderTopColor: barBorderColor, 
            borderTopWidth: barBorderWidth 
          }
        ]}>
        {children}
      </Dynamicbar>
    )
  }
}

Normalbar.propTypes = {
  size: React.PropTypes.number,
  duration: React.PropTypes.number,
  barColor: React.PropTypes.string,
  barBorderColor: React.PropTypes.string,
  barBorderWidth: React.PropTypes.number
};

Normalbar.defaultProps = {
  duration: 200,
  barBorderColor: 'gray',
  barBorderWidth: 0
};
