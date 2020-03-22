<script>
  class Scene {
    constructor(filename, func) {
      this.objects = {};
      this.audios = {};
      this.events = [];

      this.audios["error"] = new Audio("assets/error.mp3");

      fetch(filename)
        .then(response => response.text())
        .then(text =>
          this.load(new DOMParser().parseFromString(text, "text/xml"))
        )
        .then(func);
    }

    load(xmlDoc) {
      console.log(xmlDoc.documentElement);
      this.addObjects(xmlDoc.documentElement.children);
    }

    performEvents() {
      let isTrue = condition => {
        for (let id of condition.split(" ")) {
          if (this.objects[id] == undefined)
            console.log("error in event condition: " + condition);
          if (!this.objects[id].visible) return false;
        }
        return true;
      };

      for (let i in this.events) {
        let event = this.events[i];
        if (isTrue(event.condition)) {
          this.addObjects(event.xmlObjects);
          this.events.splice(i, 1);
          return;
        }
      }
    }

    addObjects(xmlObjects) {
      function addObject(e) {
        switch (e.nodeName) {
          case "object":
            if (e.getAttribute("src"))
              this.addCrop(
                e.getAttribute("id"),
                e.getAttribute("src"),
                e.getAttribute("x"),
                e.getAttribute("y"),
                e.getAttribute("width"),
                e.getAttribute("height")
              );
            else
              this.add(
                e.getAttribute("id"),
                e.getAttribute("x"),
                e.getAttribute("y"),
                e.getAttribute("width"),
                e.getAttribute("height")
              );
            break;
          case "audio":
            this.addAudio(e.getAttribute("id"));
            break;
          case "event":
            this.addEvent(
              e.getAttribute("id"),
              e.getAttribute("if"),
              e.children
            );
        }
        scene = scene;
      }

      for (let e of xmlObjects) {
        let delay = e.getAttribute("delay");
        if (delay) setTimeout(addObject.bind(this, e), delay);
        else addObject.bind(this)(e);
      }
    }

    add(id, x, y, width, height) {
      this.objects[id] = {
        id: id,
        x: x,
        y: y,
        width: width,
        height: height,
        visible: isVisibleFromStart(id)
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
        visible: isVisibleFromStart(id)
      };
    }

    addEvent(id, condition, xmlObjects) {
      this.events[id] = {
        id: id,
        condition: condition,
        xmlObjects: xmlObjects
      };
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
      scene.performEvents();
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
      scene.performEvents();
      scene = scene;
    } else scene.playError();
  }

  function dragover(event, id) {
    event.preventDefault();
  }

  /**** script of the game
   */

  let scene = new Scene("assets/scene.xml", () => {
    scene = scene;
  });

  function isVisibleFromStart(id) {
    return id.indexOf("+") < 0;
  }
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
          <img alt={id} {width} {height} src={'assets/' + id + '.png'} />
        </div>
      {/if}
    {/if}
  {/each}
</div>
