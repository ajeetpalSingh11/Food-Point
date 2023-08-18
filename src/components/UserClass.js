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
      <div className="user-card bg-gray-200 w-1/3 m-auto flex flex-wrap items-center">
        <img className="w-1/3 p-4" src={avatar_url} />
        <div className="flex flex-col ml-5">
          <h2 className="p-1">Name: {name}</h2>
          <h3 className="p-2">Id: {id}</h3>
        </div>
      </div>
    );
  }
}

export default UserClass;
