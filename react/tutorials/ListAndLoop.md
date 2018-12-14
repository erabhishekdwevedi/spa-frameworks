# Iterating an Array /List in React


We need to generate a list of features in teaser component.
We will pass this list to <Teaser> component in Page

* Feature List

```
import React, { Component } from 'react';
import Teaser from '../../components/teaser/Teaser';


class Page extends Component {
  render() {
    const featureList= ["Exclusive Design", "Patented Design","Best Finish"];

    return (
      <div class="about-page">
          <Teaser list = {featureList} />
      </div>
    );
  }
}

export default Page;

```

* Teaser Component

```
import React, { Component } from 'react';
import './Teaser.css';

class Teaser extends Component {
  render() {
    return (
      <div>
                    <h3> List without Key </h3>
                        <ul>
                            {this.props.list.map(function (data) {
                                return <li>{data}</li>;
                            })}
                        </ul>
                        
                        <h3> List with Key </h3>
              
                          <ul>
                            {this.props.list.map(function (name, index) {
                                return <li key={index}>{name}</li>;
                            })}
                        </ul>
    </div>
    );
  }
}

export default Teaser;

```

