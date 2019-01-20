import React from "react";
import { View } from "react-native";
import AddEntry from "./app/components/AddEntry";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./app/reducers";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <AddEntry />
        </View>
      </Provider>
    );
  }
}
