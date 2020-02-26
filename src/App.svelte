<script>
  class Scene {
    constructor() {
      this.objects = {};
      this.audios = {};
      this.rules = [];
    }

    add(id, x, y) {
      this.objects[id] = { id: id, x: x, y: y, visible: false };
    }

    addAudio(id) {
      this.audios[id] = new Audio("assets/" + id + ".mp3");
    }

    play(id) {
      if (this.audios[id]) this.audios[id].play();
    }

    stop(id) {
      if (this.audios[id]) {
        this.audios[id].pause();
        this.audios[id].currentTime = 0;
      }
    }

    addInit(id, x, y) {
      this.objects[id] = { id: id, x: x, y: y, visible: true };
    }

    addCropInit(id, imgId, x, y, width, height) {
      this.objects[id] = {
        id: id,
        x: x,
        y: y,
        imgId: imgId,
        width: width - x,
        height: height - y,
        visible: true
      };
    }

    addCrop(id, imgId, x, y, width, height) {
      this.objects[id] = {
        id: id,
        x: x,
        y: y,
        imgId: imgId,
        width: width - x,
        height: height - y,
        visible: false
      };
    }

    init(id) {
      this.objects[id].visible = true;
    }

    addRule(ruleText) {}
  }

  let scene = new Scene();
  scene.addInit("cuisine", 0, 0);
  scene.addInit("boiteoeufs", 500, 400);
  scene.addCrop("robinet-", "cuisine", 20, 420, 120, 540);
  scene.addCropInit("robinet+", "cuisineOuverte", 20, 420, 120, 540);
  scene.addAudio("robinet+");

  scene = scene;

  function IDgetDual(id) {
    if (id[id.length - 1] == "+") return id.substr(0, id.length - 1) + "-";
    if (id[id.length - 1] == "-") return id.substr(0, id.length - 1) + "+";
    return undefined;
  }

  function click(id) {
    const id2 = IDgetDual(id);
    if (id2 != undefined) {
      scene.objects[id].visible = false;
      scene.objects[id2].visible = true;
      scene.stop(id);
      scene.play(id2);
      scene = scene;
    } else console.log("oups");
  }
</script>

<style>
  img {
    position: absolute;
  }

  div:hover {
    border: yellow;
    border-width: 3px;
    border-style: solid;
  }

  div {
    position: absolute;
    border: 3px solid transparent;
  }
</style>

{#each Object.values(scene.objects) as { id, x, y, imgId, width, height, visible }}
  {#if visible}
    {#if imgId}
      <div
        on:click={() => click(id)}
        style={'overflow: hidden; ' + 'left: ' + x + 'px; top: ' + y + 'px; width: ' + width + 'px; height: ' + height + 'px'}>
        <img
          alt={id}
          src={'assets/' + imgId + '.png'}
          style={'left: -' + x + 'px; top: -' + y + 'px;'} />
      </div>
    {:else}
      <div
        on:click={() => click(id)}
        style={'display:inline-block; ' + 'left: ' + x + 'px; top: ' + y + 'px'}>
        <img alt={id} src={'assets/' + id + '.png'} />
      </div>
    {/if}
  {/if}
{/each}
