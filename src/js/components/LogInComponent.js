import IllustrationComponent from "./IllustrationComponent.js"
import ButtonComponent from "./ButtonComponent.js"
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
                        <span> Discover Recipes </span>
                    </template>
                    <template #sub-title>
                        <span> Learn more with us </span>
                    </template>
                    <template #img>
                        <img src="../src/images/recipe-book.png" alt="recipe-book.png" class="w-illustration"/> 
                    </template>
               </IllustrationComponent>
                <div class="flex justify-between items-center text-xs  absolute bottom-5 left-5 right-24 bottom ">
                    <p> Don't have an account ? </p>
                    <p class="font-bold cursor-pointer" @click="$emit('toggle','form-signup','signup')">  Sign up </p>
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