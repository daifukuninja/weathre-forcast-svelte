<script lang="ts">
    export let unixtime = 1675954800;
    let dt = new Date(unixtime * 1000);
    let y = dt.getFullYear();
    let m = dt.getMonth()+1;
    let d = dt.getDate();
    let h = dt.getHours().toString().padStart( 2, '0');
    let mm = dt.getMinutes().toString().padStart( 2, '0');
    let s = dt.getSeconds().toString().padStart( 2, '0');
    let jst = `${y}年${m}月${d}日 ${h}:${mm}:${s}`
</script>

<span>{jst}</span>