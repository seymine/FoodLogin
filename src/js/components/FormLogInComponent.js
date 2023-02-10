import ButtonComponent from "./ButtonComponent.js"
import InputComponent from "./InputComponent.js";
export default{
    components:{
        ButtonComponent,
        InputComponent
    },
    template:
    /*html*/
    `
        <div class="hidden w-full h-full relative md:block"> 
            <form class="VPForm">
                <h1 class=" text-2xl text-primary mb-8"> Log In </h1> 
                <InputComponent type="text" placeholder="Username"/>
                <InputComponent type="password" placeholder="Password"/>
              
                <ButtonComponent class="w-full mt-5"> Sign in </ButtonComponent>
            </form> 
        </div>
    `,
    methods:{
        init(){
            gsap.from("form",{
                opacity:0,
                duration:1.5
            })
        },
        
    }, 
    mounted(){
       this.init()
    }

}