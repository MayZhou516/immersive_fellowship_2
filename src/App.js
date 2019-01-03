import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import Users from './Users';
import UserForm from './UserForm';

const Title = ({ title })=> <h1>{ title }</h1>;

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      users : [] 
    }; 
    //this.addRandomUser = this.addRandomUser.bind(this);
  }
  deleteUser = (id)=> {
    const users  = this.state.users.filter( user => user.id !== id);
    this.setState({ users: users });
  }
  addRandomUser = () => {
    const user = {
      id: faker.random.number(),
      name: faker.name.firstName()
    };
    this.addUser(user);
  }
  addUser = (user) => {
    const users = [...this.state.users, user ];
    this.setState({ users });
  }
  componentDidMount(){
    this.addRandomUser();
  }
  render(){
    const { title } = this.props;
    const { users } = this.state;
    const { addRandomUser, addUser, deleteUser } = this;
    return ( 
      <div>
        <Title title={ title }/>
        <UserForm addRandomUser={ addRandomUser } addUser={ addUser }/>
        <Users users={ users } deleteUser={ deleteUser }/>
      </div>
    );
  }   
}
