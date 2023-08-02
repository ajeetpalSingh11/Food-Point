import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummyName",
        id: "dummyId",
        avatar_url: "dummyUrl",
      },
    };
  }

  async componentDidMount() {
    //Api Calls
    const data = await fetch("https://api.github.com/users/ajeetpalsingh11");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, id, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Id: {id}</h3>
      </div>
    );
  }
}

export default UserClass;
