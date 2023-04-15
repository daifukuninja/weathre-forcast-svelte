<script lang="ts">
  export let kelvin: number;
  let celsius = kelvin - 273.15;
  celsius = Math.floor(celsius*10)/10
</script>

<span class="text-xs md:text-base">{celsius}℃</span>
