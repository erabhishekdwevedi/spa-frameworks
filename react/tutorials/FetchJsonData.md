# Fetch JSON Data


```
import React, { Component } from 'react';

const API='https://jsonplaceholder.typicode.com/users';

class Test extends Component {

    constructor(props) {
        super(props);

        this.state = {
            info: [],
        };
    }


/* Life Cycle Method componentDidMount, here we are fetching External Data and setting state info with response data */

    componentDidMount() {
        fetch(API)
            .then(response => response.json())
            .then(data => this.setState({ info: data }));
    }


    render() {
        return (
            <div className="tester">
               
                <ul>
                    {this.state.info.map(function (data, index) {
                        return(
                        <li>{data.id} {data.name}</li> 
                        ) 
                    })}
                </ul>
            </div>);
    }
}

export default Tester;

```
