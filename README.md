
React Notes

**To get a local server set up using react, use the following link which gets everything up and running** - https://github.com/facebookincubator/create-react-app
**Make a folder for your react website, then follow the easy steps on that link**

var (variable name) = React.createClass({

});

**Is what you would write to create a new react class. To render that class to the view, you need to add a render function inside it.**

React.createClass({
  render: function(){

  }
});

**From here, you can add anything inside it, for example:**

React.createClass({
  render: function(){
    return(
      <h1>Hello world</h1>
    );
  }
});

**Note that you will need to add a return in the function for it to render anything, also if you are returning something which is more than 2 lines you will need to wrap it in brackcets ()**




**So firstly, the main file used is App.js, this is the view that you see, you call all the components in here so that they can be used.**
**All components that you build should be in seperate files, to make a component i would make a file called Test.js (for example)**
**In there would be the class such as (the class below this)**

var HeaderTitle = React.createClass({
  render: function(){
    return (
      <h1>My name is Mark</h1>
    );
  }
});

**In the Test.js file, the first thing you need to do is include this at the top of the file:** - import React, { Component } from 'react';
**This basically tells the file that it is using react, so it can use stuff like React.createClass**
**This allows the component to be used in the app.js file.**
**Then at the bottom of the Test.js file, you need to tell the App.js page which component to use, in this case it would be the HeaderTitle. So at the bottom Test.Js you need to write**
export default HeaderTitle;
**Then the HeaderTitle component can then be accessed in App.js**

**So, now that the component is made in the seperate file, it then needs to be accessed in App.js. So, in the App.js file, you need to reference the component name from Test.js**
**This is done by adding it at the top of the page, to do this you would write** import HeaderTitle from './Test.js'; 
**Note that when referencing a component from a page, you need to put the full stop before the / so react knows.**

**Now that it has access to the HeaderTitle component, next thing to do is actually implement it so it is visable on the page**
**So in app.js you need to write <HeaderTitle /> between a div, this will then get the component to display on the webpage. But you need to put this inside render() and**
**Write down the class and ensuring it exports a component, this code is what you would need to get it to display, everything between the code below is basically the view**

class App extends Component{
  render(){
    return <HeaderTitle />

(Then you would include all the other components you want to render) such as <othercomonent />

  }
}

**THAT IS ALL THAT IS REQUIRED TO GET A COMPONENT TO DISPLAY ON A WEBPAGE**