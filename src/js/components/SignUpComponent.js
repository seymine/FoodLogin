import ButtonComponent from "./ButtonComponent.js"
import IllustrationComponent from "./IllustrationComponent.js"
export default{
    components:{
        IllustrationComponent,
        ButtonComponent
    },
    emits:["toggle"],
    template:
    /*html*/
    `
        <div class="w-full h-full relative p-5 "> 
            <div>
                <IllustrationComponent>
                    <template #main-title>
                        <span> Why sign up ? </span>
                    </template>
                    <template #sub-title>
                        <span> Find out new recipes & interact with people all around the world.</span>
                    </template>
                    <template #img>
                        <img src="../src/images/deconstructed-food.png" alt="deconstructed-food.png" class="w-72"/> 
                    </template>
                </IllustrationComponent>
                <div class="flex justify-between items-center text-xs  absolute bottom-5 left-5 right-24 bottom ">
                    <p> Already have an account ? </p>
                    <p class="font-bold cursor-pointer" @click="$emit('toggle','login','form-login')">  Log in </p>
                </div>
                
            </div>
        </div>
    `,
    methods:{
        init(){
        
            gsap.from(".bottom",{
                opacity:0,
                delay:1.5,
                duration:1.5
            })
        }
    },
    mounted(){
    this.init()

    }

}