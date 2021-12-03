import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import * as color from '../styles/colorStyles';

function MonthFilter() {
  return (
    <>
      <Button
        title="September"
        buttonStyle={styles.buttonDate}
        titleStyle={styles.buttonDateTitle}
      />
      <Button
        title="October"
        buttonStyle={styles.buttonDate}
        titleStyle={styles.buttonDateTitle}
      />
      <Button
        title="November"
        buttonStyle={styles.buttonDate}
        titleStyle={styles.buttonDateTitle}
      />
      <Button
        title="December"
        buttonStyle={styles.buttonDate}
        titleStyle={styles.buttonDateTitle}
      />
      <Button
        title="January"
        buttonStyle={styles.buttonDate}
        titleStyle={styles.buttonDateTitle}
      />
      <Button
        title="February"
        buttonStyle={styles.buttonDate}
        titleStyle={styles.buttonDateTitle}
      />
      <Button
        title="March"
        buttonStyle={styles.buttonDate}
        titleStyle={styles.buttonDateTitle}
      />
      <Button
        title="April"
        buttonStyle={styles.buttonDate}
        titleStyle={styles.buttonDateTitle}
      />
      <Button
        title="May"
        buttonStyle={styles.buttonDate}
        titleStyle={styles.buttonDateTitle}
      />
      <Button
        title="June"
        buttonStyle={styles.buttonDate}
        titleStyle={styles.buttonDateTitle}
      />
      <Button
        title="July"
        buttonStyle={styles.buttonDate}
        titleStyle={styles.buttonDateTitle}
      />
      <Button
        title="August"
        buttonStyle={styles.buttonDate}
        titleStyle={styles.buttonDateTitle}
      />
    </>
  );
}

const styles = StyleSheet.create({
  buttonDate: {
    width: 90,
    marginTop: 20,
    marginRight: 20,
    backgroundColor: color.white,
    borderColor: color.primary,
    borderWidth: 1,
    borderRadius: 4,
  },
  buttonDateTitle: {
    color: color.primary,
    fontSize: 10,
    fontWeight: '300',
  },
});

export default MonthFilter;
