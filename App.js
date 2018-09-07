import React from "react";
import { View } from "react-native";
import Tab from "./src/containers/Tab";
import { Header } from "react-native-elements";
import { FloatingAction } from "react-native-floating-action";
import DialogInput from "react-native-dialog-input";
import Icon from "react-native-vector-icons/FontAwesome";

const actions = [
  {
    text: "Add Task",
    icon: <Icon name="plus" size={15} />,
    name: "bt_add",
    position: 1,
    color: "#694fad"
  }
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ id: "1", todo: "Insert a task", checked: false }],
      dialog: false,
      cont: 1
    };
  }

  sendInput = inputText => {
    this.setState({ dialog: false });
    let newCont = this.state.cont + 1;
    let newItem = {
      id: newCont.toString(),
      todo: inputText,
      checked: false
    };
    let newList = this.state.todos;
    newList.push(newItem);
    this.setState({ todos: newList, cont: newCont });
  };

  showDialog = dialog => {
    this.setState({ dialog: dialog });
  };

  toggleCheck = id => {
    let newList = this.state.todos;
    let index = newList.findIndex(x => x.id == id);
    if (newList[index].checked) {
      newList[index].checked = false;
    } else {
      newList[index].checked = true;
    }

    this.setState({ todos: newList });
  };

  deleteTask = id => {
    let newList = this.state.todos.filter(x => x.id != id);
    this.setState({ todos: newList });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          centerComponent={{
            text: "Reactive ToDo's",
            style: { color: "#fff", fontSize: 20 }
          }}
          backgroundColor="#694fad"
        />
        <Tab
          screenProps={{
            todos: this.state.todos,
            toggleCheck: this.toggleCheck,
            deleteTask: this.deleteTask
          }}
        />
        <FloatingAction
          actions={actions}
          onPressItem={name => {
            this.setState({ dialog: true });
          }}
          color="#694fad"
          distanceToEdge={65}
          iconHeight={25}
          iconWidth={25}
        />
        <DialogInput
          isDialogVisible={this.state.dialog}
          title={"Insert Task"}
          hintInput={"Write Task Name"}
          submitInput={inputText => {
            this.sendInput(inputText);
          }}
          closeDialog={() => {
            this.showDialog(false);
          }}
        />
      </View>
    );
  }
}
