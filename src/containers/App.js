import  React  from "react";
import { connect } from "react-redux";
import 'tachyons'
import './App.css'
import { ErrorBoundry } from "../components/errorboundry"; 
import { CardList }  from "../components/card-list";
import { SearchBar } from "../components/searchbar";
import { Scroll } from "../components/scroll";
import { Header } from "../components/header";
import { setSearchField , requestRobots} from "../actions";


const mapStateToProps = state => {
 return {
    searchField : state.searchRobots.searchField,
    robots : state.requestRobots.robots,
    isPending : state.requestRobots.isPending,
    error : state.requestRobots.error,
 }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearchChange : (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots : () => dispatch(requestRobots())
    }
}

class App extends React.Component {


    componentDidMount() {
        this.props.onRequestRobots();
    }

    render () {
        const {searchField , onSearchChange ,robots } = this.props; 
        const filteredRobots = robots.filter(robot  => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        }) 
        return !robots.length ? <h1 className='tc'>Loading</h1> :
                <div className='tc'>
                    <Header />
                    <SearchBar 
                        searchChange = {onSearchChange}
                    />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots = {filteredRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
    }
} 

export default connect(mapStateToProps , mapDispatchToProps)(App); 