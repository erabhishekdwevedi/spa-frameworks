# React Tutorials

1. [Router Example](router/app/README.md)


# Basics

### Passing props or values to a Component

In this case, we have *Hero component* which accepts heading and description , we will access this Hero component in Page Component and pass required heading and description from Page Component itself.

* Hero Image Component
```
import React, { Component } from 'react';
import './Hero.css';

class Hero extends Component {
    render() {
        return (
            <div class="hero-image">
                <div class="hero-text">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.description}</p>
                </div>
            </div>);
    }
}
export default Hero;

```

* App Component Accessing Hero Component

```
import React, { Component } from 'react';
import Hero from '../../components/hero/Hero';

class Page extends Component {
  render() {

    const headingText = "Welcome";
    const descriptionText ="We make your stay comfortable";
    
    return (
      <div class="about-page">
      
        <Hero heading="Welcome" 
              description="Welcome to INDIA" />
        
        <Hero heading={headingText} 
              description={descriptionText}/>
      </div>
    );
  }
}

export default Page;

```

