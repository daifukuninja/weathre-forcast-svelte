<script lang="ts">
    export let unixtime = 0;
    let dt = new Date(unixtime * 1000);
    let m = dt.getMonth()+1;
    let d = dt.getDate();
    let h = dt.getHours().toString();
    let mm = dt.getMinutes().toString().padStart( 2, '0');
    let s = dt.getSeconds().toString().padStart( 2, '0');
    let jst_time = `${m}/${d} ${h}:${mm}`
</script>
<div>
    <div class="text-xs md:text-base">{`${m}/${d}`}</div>
    <div class="text-xs md:text-base">{`${h}:${mm}`}</div>    
</div>
