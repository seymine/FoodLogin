import ButtonComponent from "./ButtonComponent.js"
export default{
    components:{
        ButtonComponent
    },
    emits:["toggle"],
    template:
    /*html*/
    `
        <div class="w-full h-full relative p-5 "> 
            <div>
                <div class="title">
                    <h1 class="text-5xl font-bold "> Discovery Recipes </h1>
                    <h3 class="text-sm  tracking-wider mt-2"> Learn more recipes with us. </h3>
                </div>
                <p class="mt-8">  
                    <img src="../src/images/recipe-book.png" alt="recipe-book.png" class="w-illustration"/> 
                </p>
                <div class="flex justify-between items-center text-xs  absolute bottom-5 left-5 right-24 bottom ">
                    <p> Don't have an account ? </p>
                    <p class="font-bold cursor-pointer" @click="$emit('toggle','signup','form-signup')">  Sign up </p>
                </div>
                
            </div>
        </div>
    `,
    methods:{
        init(){
            gsap.from(".title",{
                x:20, 
                duration:1.5
            })
    
            gsap.from("img",{
                y:20,
                duration:1.5
            })
    
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