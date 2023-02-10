export default{
    props:["type","placeholder"],
    template:
    /*html*/
    `
    <div class="VPForm-input">
        <input :type="type" class="VPInput"  @focus="onFocus"  @blur="onBlur" />
        <span :data-placeholder="placeholder" class="VPPlaceholder"></span>
    </div>
    `, 
    methods:{
        onFocus(e){
            let input = e.target; 
            input.classList.add("VPFocus");
        }, 
        onBlur(e){
            let input = e.target; 
            if (!input.value){
                input.classList.remove("VPFocus")
            }
        }
    }
}