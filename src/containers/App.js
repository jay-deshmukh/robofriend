import  React  from "react";
import 'tachyons'
import './App.css' 
import { CardList }  from "../components/card-list";
import { SearchBar } from "../components/searchbar";
import { Scroll } from "../components/scroll";


export class App extends React.Component {
    
    constructor(){
        super();
        this.state = {
            robots : [],
            searchField : ''
        }
    }

    onSearchChange = (e) => {
        this.setState(
            {searchField : e.target.value}
        ) 
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => this.setState({  }));
    }

    render () {
        const {robots , searchField } = this.state;
        const filteredRobots = robots.filter(robot  => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        }) 
        return !robots.length ?
            <h1 className='tc'>Loading</h1> :
            <div className='tc'>
                <h1 className='f2'>Robo Friends</h1>
                <SearchBar 
                    searchChange = {this.onSearchChange }
                />
                <Scroll>
                    <CardList robots = {filteredRobots}/>
                </Scroll>
            </div>
    }
} 