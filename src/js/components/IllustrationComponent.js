export default{
    template:
    /*html*/
    `
        <div>
            <div class="title">
            <h1 class="text-5xl font-bold "> <slot name="main-title"> </slot>  </h1>
            <h3 class="text-sm  tracking-wider mt-2"> <slot name="sub-title"> </slot>  </h3>   
            </div>
            <p class="mt-8">  
                <slot name="img"></slot>
            </p>
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
        }
    },
    mounted(){
        this.init()
    }
}