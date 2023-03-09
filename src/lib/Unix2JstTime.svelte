<script lang="ts">
    export let unixtime = 1675954800;
    let dt = new Date(unixtime * 1000);
    let h = dt.getHours().toString();
    let mm = dt.getMinutes().toString().padStart( 2, '0');
    let s = dt.getSeconds().toString().padStart( 2, '0');
    let jst_time = `${h}:${mm}:${s}`
</script>

<span>{jst_time}</span>