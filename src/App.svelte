<script>
  class Scene {
    constructor() {
      this.objects = {};
      this.audios = {};
      this.rules = [];
      this.audios["error"] = new Audio("assets/error.mp3");
    }

    add(id, x, y) {
      this.objects[id] = { id: id, x: x, y: y, visible: false };
    }

    addAudio(id) {
      this.audios[id] = new Audio("assets/" + id + ".mp3");
    }

    contains(id) {
      return this.objects[id] != undefined;
    }
    play(id) {
      if (this.audios[id]) this.audios[id].play();
    }

    playError() {
      this.play("error");
    }

    stop(id) {
      if (this.audios[id]) {
        this.audios[id].pause();
        this.audios[id].currentTime = 0;
      }
    }

    hide(id) {
      this.objects[id].visible = false;
      scene.stop(id);
    }

    isUseful(id) {
      return id != "cuisine";
    }
    show(id) {
      console.log("show " + id);
      console.log(this.objects[id].visible);
      this.objects[id].visible = true;
      this.play(id);
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

  function IDgetDual(id) {
    if (id[id.length - 1] == "+") return id.substr(0, id.length - 1) + "-";
    if (id[id.length - 1] == "-") return id.substr(0, id.length - 1) + "+";
    return undefined;
  }

  function click(id) {
    const id2 = IDgetDual(id);
    if (id2 != undefined) {
      scene.hide(id);
      scene.show(id2);
      scene = scene;
    } else if (scene.audios[id]) scene.audios[id].play();
  }

  function drag(event, id) {
    event.dataTransfer.setData("id", id);
    console.log("drag " + id);
  }

  function drop(event, id) {
    event.preventDefault();
    const idSource = event.dataTransfer.getData("id");
    console.log("drop " + idSource + " on " + id);
    action2(idSource, id);
  }

  function action2(idSource, idTarget) {
    if (scene.contains(idTarget + "+" + idSource)) {
      scene.hide(idSource);
      scene.hide(idTarget);
      scene.show(idTarget + "+" + idSource);
      scene = scene;
    } else scene.playError();
  }

  function dragover(event, id) {
    event.preventDefault();
  }

  /**** script of the game
   */

  let scene = new Scene();
  scene.addInit("cuisine", 0, 0);

  scene.addCropInit("robinet-", "cuisine", 20, 420, 120, 540);
  scene.addCrop("robinet+", "cuisineOuverte", 20, 420, 120, 540);
  scene.addCrop("placardEvier+", "cuisineOuverte", 90, 550, 200, 700);
  scene.addInit("oeufs", 100, 600);
  scene.addCropInit("placardEvier-", "cuisine", 90, 550, 200, 700);
  scene.addAudio("robinet+");

  scene.addCropInit("fenetre-", "cuisine", 120, 180, 250, 400);
  scene.addCrop("fenetre+", "cuisineOuverte", 120, 180, 250, 400);

  scene.addInit("saladier", 550, 340);

  scene.addInit("mouton", 650, 540);
  scene.addAudio("mouton");

  scene.addInit("radio", 560, 210);
  scene.addAudio("radio");
  scene.add("saladier+oeufs", 550, 340);
</script>

<style>
  img {
    position: absolute;
  }

  .object:hover {
  }

  .object {
    position: absolute;
  }

  .scene {
    position: absolute;
  }
</style>

<div class="scene">
  {#each Object.values(scene.objects) as { id, x, y, imgId, width, height, visible }}
    {#if visible}
      {#if imgId}
        <div
          class={scene.isUseful(id) ? 'object' : 'decoration'}
          on:click={() => click(id)}
          style={'position: absolute; overflow: hidden; ' + 'left: ' + x + 'px; top: ' + y + 'px; width: ' + width + 'px; height: ' + height + 'px'}>
          <img
            alt={id}
            src={'assets/' + imgId + '.png'}
            style={'position: absolute; left: -' + x + 'px; top: -' + y + 'px;'} />
        </div>
      {:else}
        <div
          class={scene.isUseful(id) ? 'object' : 'decoration'}
          draggable="true"
          on:dragover={event => dragover(event, id)}
          on:dragstart={event => drag(event, id)}
          on:drop={event => drop(event, id)}
          on:click={() => click(id)}
          style={'position: absolute; display:inline-block; ' + 'left: ' + x + 'px; top: ' + y + 'px'}>
          <img alt={id} src={'assets/' + id + '.png'} />
        </div>
      {/if}
    {/if}
  {/each}
</div>
