export default{
    template:
    /*html*/
    `
        <div class="VPApp"> 
            <div class="VPContainer">
                <main class="VPMain">
                </main>
            </div>
        </div>
    `, 
    mounted(){
        gsap.set(".VPApp",{
            backgroundImage:"linear-gradient(45deg,#F09819,#FF5858)",
        })

        gsap.to(".VPApp",{
            backgroundImage:"linear-gradient(45deg,#3498db,#8e44ed)",
            repeat:-1,
            yoyo:true,
            duration:4
        })
        
        
    }
}