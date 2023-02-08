import ButtonComponent from "./ButtonComponent.js"
export default{
    components:{
        ButtonComponent
    },
    template:
    /*html*/
    `
        <div class="hidden w-full h-full relative md:block  ">
            <form class="VPForm">
                <h1 class=" text-2xl text-primary mb-8"> Sign up </h1> 
                
                <div class="VPForm-input">
                        <input type="text" class="VPInput" @focus="onFocus" @blur="onBlur"/>
                        <span data-placeholder="Username" class="VPPlaceholder" ref="placeholder"></span>
                </div>
                <div class="VPForm-input">
                        <input type="password" class="VPInput" @focus="onFocus" @blur="onBlur"/>
                        <span data-placeholder="Password" class="VPPlaceholder"></span>
                </div>
                <div class="VPForm-input">
                        <input type="password" class="VPInput" @focus="onFocus" @blur="onBlur"/>
                        <span data-placeholder="Confirm password" class="VPPlaceholder"></span>
                </div>
                <ButtonComponent class="w-full mt-5"> Sign up </ButtonComponent>
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
        onFocus(e){
            let input = e.target; 
            input.classList.add("VPFocus")
        }, 
        onBlur(e){
            let input = e.target; 
            if (!input.value){
                input.classList.remove("VPFocus")
            }
        }
    }, 
    mounted(){
       this.init()
    }

}