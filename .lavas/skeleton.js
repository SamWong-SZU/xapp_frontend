import Vue from 'vue';

import Skeleton from 'F:\\project\\xapp_frontend\\core\\Skeleton.vue';


export default new Vue({
    components: {
        
        Skeleton,
        
    },
    template: `
        <div>
            
            <skeleton id="skeleton" style="display:none"/>
            
        </div>
    `
});
