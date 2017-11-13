var camera, scene1, scene2, renderer1, renderer2;

var controls;

init();
animate();

function init() {
  var SPACE = 32;
  var LEFT = 37;
  var UP = 38;
  var RIGHT = 39;
  var DOWN = 40;
  var MOVE_AMOUNT = 0.3;
  var RADIUS = 5;
  
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / (window.innerHeight*2), 0.1, 1000);
  camera.position.z = RADIUS;
  controls = new THREE.TrackballControls( camera );

  initScene1();
  initScene2();

  document.addEventListener("keydown", function (event) {
    switch (event.keyCode) {
      case SPACE:
        controls.reset();
        break;
    }
  });
}

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer1.render(scene1, camera);
  renderer2.render(scene2, camera);
}

function initScene1(){
  console.log(document.querySelectorAll('*[id]'))
  scene1 = new THREE.Scene();
  renderer1 = new THREE.WebGLRenderer();
  renderer1.setSize(window.innerWidth/2, window.innerHeight);
  document.getElementById("leftpanel").appendChild(renderer1.domElement);
  //document.body.appendChild(renderer1.domElement);

  var geometry = new THREE.BoxGeometry(1, 1, 1);
  var material = new THREE.MeshBasicMaterial({color: 0xffff90, wireframe: true});
  var cube = new THREE.Mesh(geometry, material);
  scene1.add(cube);

}

function initScene2(){
  scene2 = new THREE.Scene();
  renderer2 = new THREE.WebGLRenderer();
  renderer2.setSize(window.innerWidth/2, window.innerHeight);
  document.getElementById("rightpanel").appendChild(renderer2.domElement);
  var geometry = new THREE.BoxGeometry(1, 1, 1);
  var material = new THREE.MeshBasicMaterial({color: 0xffff90});
  var cube = new THREE.Mesh(geometry, material);
  scene2.add(cube);
}