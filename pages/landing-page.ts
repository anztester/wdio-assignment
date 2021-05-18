import { Page } from "./base-page";
import {MyConfig} from "../config/my-config"

class LandingPage extends Page{
    
    get signInLink() { return $('#username') }

    open(){
        super.open(MyConfig.baseUrl)
    }

    navigateToSignIn(){
        
    }
}