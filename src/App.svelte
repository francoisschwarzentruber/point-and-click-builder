<script>
  class Scene {
    constructor() {
	  this.objects = {};
	  this.rules= [];
    }

    add(id, x, y) {
      this.objects[id] = { id: id, x: x, y: y, visible: false };
	}
	
    addInit(id, x, y) {
      this.objects[id] = { id: id, x: x, y: y, visible: true };
    }

    init(id) {
      this.objects[id].visible = true;
    }

    addRule(ruleText) {}
  }

  let scene = new Scene();
  scene.addInit("cuisine", 0, 0);
  scene.addInit("boiteoeufs", 1200, 1000);
  
  scene = scene;
</script>

<style>
img {
	position: fixed;
}

</style>

<div id="scene">
  {#each Object.values(scene.objects) as { id, x, y, visible }}
    {#if visible}
      <img alt={id} src={"assets/" + id + '.png'} style={"left: " + x + "px; top: " + y + "px"}/>
    {/if}
  {/each}
</div>
