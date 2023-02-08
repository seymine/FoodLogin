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
                    <h1 class="text-5xl font-bold ">  Why sign up ? </h1>
                    <h3 class="text-sm  tracking-wider mt-2"> Find out new recipes & interact with people all around the world. </h3>
                </div>
                <p class="mt-8">  
                    <img src="../src/images/deconstructed-food.png" alt="deconstructed-food.png" class="w-72"/> 
                </p>
                <div class="flex justify-between items-center text-xs  absolute bottom-5 left-5 right-24 bottom ">
                    <p> Already have account ? </p>
                    <p class="font-bold cursor-pointer" @click="$emit('toggle','login','form-login')">  Log in </p>
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