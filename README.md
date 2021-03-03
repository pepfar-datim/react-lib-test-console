# DHIS2 Dev Tools
Do you need to give your testers superpowers?
You can automatize some tasks such as filling out search forms, clicking buttons, etc.

Then using this library you can easily give super-user access to these methods.

## Usage

You can inject any method. Anything you need to automate in your app. Just wrap it into a method and inject into `Dev Tools`.

In the below example we want to automate searches by calling `this.search` method with different parameters.

```javascript
import DevTools, {registerDevMethod} from "../../../sharedModules/mainPage/components/devTools.component";

export default class SearchForm extends React.Component {
    constructor(props) {
        const searches = [
            {name: '1. Rwanda', method: () => this.search('Rwanda', '2020Q4')},
            {name: '2. Nigeria', method: () => this.search('Nigeria', '2020Q4')},
        ];
        searches.forEach(registerDevMethod);
    }
    
    search(ou:string, period:string){
        // your code
    }
    
    render(){
        return <React.Fragment>
            <MyAwesomeSearchForm onSearch={this.search}/>
            <DevTools/>
        </React.Fragment>
    }
}
```