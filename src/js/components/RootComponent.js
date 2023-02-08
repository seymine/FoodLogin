import LogInComponent from "./LogInComponent.js"
import FormLogInComponent from "./FormLoginComponent.js"
export default{
    components:{
        LogInComponent,
        FormLogInComponent
    },
    template:
    /*html*/
    `
        <div class="VPApp"> 
            <div class="VPContainer">
                <main class="VPMain">
                   <component :is="'LogInComponent'"> </component>
                   <component :is="'FormLogInComponent'"> </component>
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