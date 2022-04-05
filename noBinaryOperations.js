//Room
var box1Geometry = new THREE.BoxGeometry(1, 5, 5);
var box1Material = new THREE.MeshLambertMaterial({color: 0xA020F0});
var box1 = new THREE.Mesh(box1Geometry, box1Material);

box1.position.z = 2.5;

var box2Geometry = new THREE.BoxGeometry(1, 5, 5);
var box2Material = new THREE.MeshLambertMaterial({color: 0xA020F0});
var box2 = new THREE.Mesh(box2Geometry, box2Material);

box2.position.set(2.5, 2, 2.5);
box2.rotation.z = Math.PI / 2;

var box3Geometry = new THREE.BoxGeometry(1, 5, 5);
var box3Material = new THREE.MeshLambertMaterial({color: 0xA020F0});
var box3 = new THREE.Mesh(box3Geometry, box3Material);

box3.position.z = 2.5;
box3.position.x = 5;

var box4Geometry = new THREE.BoxGeometry(1, 5, 6);
var box4Material = new THREE.MeshLambertMaterial({color: 0xA020F0});
var box4 = new THREE.Mesh(box4Geometry, box4Material);

box4.position.set(2.5, 0, 5);
box4.rotation.y = Math.PI / 2;

var group = new THREE.Group();
group.add(box1);
group.add(box2);
group.add(box3);
group.add(box4);

group.position.x = -2.5;
scene.add(group);
