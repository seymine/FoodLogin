import LogInComponent from "./LogInComponent.js"
import FormLogInComponent from "./FormLoginComponent.js"
import SignUpComponent from "./SignUpComponent.js"
import FormSignUpComponent from "./FormSignUpComponent.js"
export default{
    components:{
        "login":LogInComponent,
        "form-login":FormLogInComponent,
        "signup":SignUpComponent,
        "form-signup":FormSignUpComponent
    },
    template:
    /*html*/
    `
        <div class="VPApp"> 
            <div class="VPContainer">
                <main class="VPMain">
                   <component :is="'login'"> </component>
                   <component :is="'form-login'"> </component>
                </main>
            </div>
        </div>
    `, 
    mounted(){
       
        gsap.set(".VPApp",{
            backgroundImage:"linear-gradient(120deg,#FF725E,#D8CACD)",
        })

        gsap.to(".VPApp",{
            backgroundImage:"linear-gradient(120deg,#455A64,#D8CACD)",
            repeat:-1,
            yoyo:true,
            duration:3
        })

        
        
        
    }
}